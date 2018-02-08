import { connect } from 'react-redux'

// actions
import {
  onSignout,
} from 'data/auth/actions'

// selectors
import {
  user$,
} from 'data/auth/selectors'

const mapStateToProps = (state, ownProps) => ({
  user: user$(state),
})

const mapDispatchToProps = {
  onSignout,
}

// Export
export default connect(mapStateToProps, mapDispatchToProps)
