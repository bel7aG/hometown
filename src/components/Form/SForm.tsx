import { styled } from 'shared'
import { SCREEN } from 'constant'

export const SForm = styled.div`
  > form {
    max-width: 100%;
    width: 100%;
    overflow-x: hidden;

    > div {
      &:first-child {
        margin-top: 1rem;
      }
      &:not(:first-child) {
        margin-top: 4rem;
      }
      @media screen and (min-width: ${SCREEN.MOBILE}px) {
        padding: 0 4rem;
      }

      @media screen and (max-width: ${SCREEN.MOBILE}px) {
        padding: 0 2rem;
      }

      > div {
        &:not(:last-child) {
          margin-bottom: 2rem;
        }

        > div {
          width: 100%;
        }

        * {
          label {
            font-size: 1.4rem;
          }

          input,
          textarea {
            font-size: 1.7rem;
            width: 100%;
          }

          textarea {
            line-height: 3rem;
          }

          p,
          span {
            font-size: 1.1rem;
          }
        }
      }

      > button {
        font-size: 1.3rem;
        display: block;
        height: 4.2rem;
      }
    }
  }
`
