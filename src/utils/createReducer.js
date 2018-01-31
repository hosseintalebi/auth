export default function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]

    if (reducer) {
      return reducer(state, action.payload, action)
    }

    return state
  }
}
