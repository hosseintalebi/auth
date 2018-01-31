import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { password_change, username_change, sign_in } from 'data/signin/actions'

// selectors
import username$ from 'data/signin/selectors/signinUsername'
import password$ from 'data/signin/selectors/signinPassword'

// Local

const mapStateToProps = (state, ownProps) => ({
  username: username$(state),
  password: password$(state),
})

const mapDispatchToProps = {
  onChangeUsername: username_change,
  onChangePassowrd: password_change,
  signin: sign_in,
}

// Export
export default connect(mapStateToProps, mapDispatchToProps)
