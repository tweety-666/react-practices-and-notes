
export const createTodo = (text) => {
  return {
    type: 'CREATE_TODO',
    payload: {
      text: text,
    }
  }
}


export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: {
      id,
    }
  }
}