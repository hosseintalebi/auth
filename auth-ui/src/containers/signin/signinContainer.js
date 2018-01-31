import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import {
  onChangeUsername,
  onChangePassowrd,
  onSignin,
} from 'data/signin/actions'

// selectors
import username$ from 'data/signin/selectors/signinUsername'
import password$ from 'data/signin/selectors/signinPassword'

const mapStateToProps = (state, ownProps) => ({
  username: username$(state),
  password: password$(state),
})

const mapDispatchToProps = {
  onChangeUsername,
  onChangePassowrd,
  onSignin,
}

// Export
export default connect(mapStateToProps, mapDispatchToProps)
