import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from '@apollo/client'
import { RetryLink } from '@apollo/client/link/retry'
import { setContext } from '@apollo/client/link/context'

let apolloClient: any

const link = ApolloLink.concat(
  new RetryLink({
    delay: {
      initial: 1000,
      max: Infinity,
      jitter: true
    },
    attempts: {
      max: 5,
      retryIf: (error) => !!error
    }
  }),
  new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
  })
)

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token.replace(/^"(.*)"$/, '$1')}` : ''
    }
  }
})

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(link),
    cache: new InMemoryCache()
  })
}

export function initializeApollo(initialState = null) {
  const myApolloClient = apolloClient ?? createApolloClient()

  // If page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    myApolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return myApolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = myApolloClient

  return myApolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
