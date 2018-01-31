import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import {
  onChangeFirstName,
  onChangeLastName,
  onChangeUsername,
  onChangeEmail,
  onChangePassowrd,
  onChangeRepeatPassword,
  onSignup,
} from 'data/signup/actions'

// selectors
import firstname$ from 'data/signup/selectors/signupFirstname'
import lastname$ from 'data/signup/selectors/signupLastname'
import username$ from 'data/signup/selectors/signupUsername'
import email$ from 'data/signup/selectors/signupEmail'
import password$ from 'data/signup/selectors/signupPassword'
import repeatPassword$ from 'data/signup/selectors/signupRepeatPassport'

const mapStateToProps = (state, ownProps) => ({
  firstname: firstname$(state),
  lastname: lastname$(state),
  username: username$(state),
  email: email$(state),
  password: password$(state),
  repeatPassword: repeatPassword$(state),
})

const mapDispatchToProps = {
  onChangeFirstName,
  onChangeLastName,
  onChangeUsername,
  onChangeEmail,
  onChangePassowrd,
  onChangeRepeatPassword,
  onSignup,
}

// Export
export default connect(mapStateToProps, mapDispatchToProps)
