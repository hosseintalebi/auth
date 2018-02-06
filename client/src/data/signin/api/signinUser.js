import postCall from 'utils/network/postCall'
import { END_POINT } from '../constants'

export default function signinUser(credentials) {
  return postCall({
    url: END_POINT,
    data: credentials,
  })
}
