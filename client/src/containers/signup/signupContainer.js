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
  credentials$,
  errors$,
  submitted$,
} from 'data/signup/selectors'

const mapStateToProps = (state, ownProps) => ({
  credentials: credentials$(state),
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
