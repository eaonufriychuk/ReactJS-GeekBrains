export default (state = [], {
  type,
  payload
}) => {
  switch (type) {
    case 'ADD_TODO':
      return [...state, payload];
    case 'REMOVE_TODO':
      return state.filter(comment => comment.id !== payload);
    default:
      return state;
  }
}