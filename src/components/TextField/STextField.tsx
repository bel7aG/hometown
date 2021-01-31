import { styled } from 'shared'

export const STextField = styled.div`
  position: relative;
  &,
  > div,
  input {
    color: ${({ theme }) => theme?.layout?.colors?.text};
    width: 100%;
  }
  > div {
    &,
    > div,
    > div > input {
      width: 100%;
    }
  }
`
