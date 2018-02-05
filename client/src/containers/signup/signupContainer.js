import { connect } from 'react-redux'

// actions
import {
  onChangeFirstName,
  onChangeLastName,
  onChangeEmail,
  onChangePassowrd,
  onChangeRepeatPassword,
  onSignup,
} from 'data/signup/actions'

// selectors
import {
  firstname$,
  lastname$,
  email$,
  password$,
  repeatPassword$,
  errors$,
  submitted$,
} from 'data/signup/selectors'

const mapStateToProps = (state, ownProps) => ({
  firstname: firstname$(state),
  lastname: lastname$(state),
  email: email$(state),
  password: password$(state),
  repeatPassword: repeatPassword$(state),
  errors: errors$(state),
  submitted: submitted$(state),
})

const mapDispatchToProps = {
  onChangeFirstName,
  onChangeLastName,
  onChangeEmail,
  onChangePassowrd,
  onChangeRepeatPassword,
  onSignup,
}

// Export
export default connect(mapStateToProps, mapDispatchToProps)
