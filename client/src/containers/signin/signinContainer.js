import { connect } from 'react-redux'

// actions
import {
  onChangeEmail,
  onChangePassowrd,
  onSignin,
} from 'data/signin/actions'

// selectors
import {
  credentials$,
  isFetching$,
  errors$,
  submitted$,
} from 'data/signin/selectors'

import {
  authError$,
} from 'data/auth/selectors'

const mapStateToProps = (state, ownProps) => ({
  credentials: credentials$(state),
  isFetching: isFetching$(state),
  authError: authError$(state),
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
