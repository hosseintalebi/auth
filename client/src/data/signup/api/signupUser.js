import postCall from 'utils/network/postCall'
import { END_POINT } from '../constants'

export default function signupUser(credentials) {
  return postCall({
    url: END_POINT,
    data: credentials,
  })
}
