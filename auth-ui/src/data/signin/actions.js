import { PASSWORD_CHANGE, USERNAME_CHANGE, SING_IN } from './constants'

export function password_change({value}) {
    return {
      type: PASSWORD_CHANGE,
      payload: {value}
    }
}

export function username_change ({value}) {
    return {
      type: USERNAME_CHANGE,
      payload: {value}
    }
}

export function sign_in () {
    return {
      type: SING_IN,
    }
}
