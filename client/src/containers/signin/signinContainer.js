import { connect } from 'react-redux'

// actions
import {
  onChangeEmail,
  onChangePassowrd,
  onSignin,
} from 'data/signin/actions'

// selectors
import {
  email$,
  password$,
  errors$,
  submitted$,
} from 'data/signin/selectors'

const mapStateToProps = (state, ownProps) => ({
  email: email$(state),
  password: password$(state),
  errors: errors$(state),
  submitted: submitted$(state),
})

const mapDispatchToProps = {
  onChangeEmail,
  onChangePassowrd,
  onSignin,
}

// Export
export default connect(mapStateToProps, mapDispatchToProps)
