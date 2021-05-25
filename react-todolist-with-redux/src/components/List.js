import React, { Component } from 'react'
// connect是用來將redux store跟react component連接 會返回一個已經和store連結的component
import { connect } from 'react-redux'
import { removeTodo } from '../actions/index'

class List extends Component {
    render() {
        // 已經從store中取得props
        // const {
        //     todos
        // } = this.props
        return (
            <ol>
                {/* 現在的 this.props.todos 已經不再是由父層透過props傳遞的資料 而是直接從 store 中取得的 */}
                {this.props.todos.map((todo, idx) => {
                    return (
                        <li
                            key={todo.id}
                            // 這裡的 removeTodo 則是底下 mapDispatchToProps 中屬性名為 removeTodo 的 method
                            onClick={() => this.props.removeTodo(todo.id)}
                        >
                            {todo.text}
                        </li>
                    )
                })
                }
            </ol>
        )
    }
}

// mapStateToProps等於把store內的state 提供給組件當作props
const mapStateToProps = (state) => {
    return { todos: state.todos }
}
//mapDispatchToProps等於把store內的action 提供給組件dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: id => {
            dispatch(removeTodo(id))
        }
    }
}
// connect在輸出時調用
export default connect(mapStateToProps, mapDispatchToProps)(List)