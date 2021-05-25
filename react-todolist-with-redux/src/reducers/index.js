const initState = {
  todos: [
    { id: 0, text: '吃飯' },
    { id: 1, text: '上學' },
    { id: 2, text: '睡覺' },
  ],
  todoId: 2
}

const todoReducer = (state = initState, action) => {
  const payload = action.payload
  switch (action.type) {
    case 'CREATE_TODO':
      const id = state.todoId + 1
      // 避免改動到原有mutable object
      return Object.assign({}, state, {
        todos: [
          ...state.todos, {
            text: payload.text,
            id: id
          }
        ],
        todoId: id
      })
    case 'REMOVE_TODO':
      return Object.assign({}, state, {
        // filter回傳新陣列 不動到原本mutable array
        todos: state.todos.filter((todo) => {
          return todo.id !== payload.id
        })
      })

    default:
      break;
  }
  return state
}

export default todoReducer