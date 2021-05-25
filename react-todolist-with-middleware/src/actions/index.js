import actionTypes from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => {
	return {
		type: actionTypes.addTodo,
		payload: {
			id: nextTodoId++,
			text
		}
	};
};

export const removeTodo = id => {
	return {
		type: actionTypes.removeTodo,
		payload: { id }
	};
};

export const beginFetchTodoList = () => {
	return {
		type: actionTypes.beginFetchTodoList,
		payload: { isFetchingTodoList: true }
	};
};

export const finishFetchTodoList = error => {
	return {
		type: actionTypes.finishFetchTodoList,
		payload: { isFetchingTodoList: false, error }
	};
};

export const recvFetchTodoListResult = todos => {
	return { type: actionTypes.recvFetchTodoListResult, payload: { todos } };
};

export const fetchTodosFromServer = page => {
	// 回傳函式，使redux-thunk middleware可以處理
	return (dispatch, getState) => {
		// 通知使用者應用程式正在擷取後端資料，呈現載入中狀態
		// 這邊直接呼叫寫好的同步action creator建立action
		// 非同步Action從這邊開始逐一拆解成同步Action
		dispatch(beginFetchTodoList());

		if (!page) page = 1;

		const API_URL = `http://598071fd5b25f700119caaf6.mockapi.io/api/v2/todo?page=${page}&limit=10`

		fetch(API_URL, { mode: 'cors' })
			.then(response => {
				console.log('response', response.status);
				if (response.ok !== true) {
					switch (response.status) {
						case 401:
							return dispatch(finishFetchTodoList(401));
						case 404:
							return dispatch(finishFetchTodoList(404));
						case 500:
							return dispatch(finishFetchTodoList(500));
						default:
							return alert(response.status);
					}
				} else {
					response.json().then(todos => {
						dispatch(recvFetchTodoListResult(todos));
						dispatch(finishFetchTodoList(200));
						console.log('todos---', todos);
					});
				}
			})
			.catch(error => {
				console.log('error', error);
				dispatch(finishFetchTodoList(error));
			});
	};
};
