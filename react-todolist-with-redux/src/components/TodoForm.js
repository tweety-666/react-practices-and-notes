import React, { Component } from 'react'
import { connect } from 'react-redux' // connect是用來將redux store跟react component連接 會返回一個已經和store連結的component
import { createTodo } from '../actions/index'

class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
        this.createTodo = this.createTodo.bind(this)
    }
    // 可使用箭頭函式取得this若不使用則onClick就要使用箭頭函式
    // createTodo = () => {
    //     if (!this.state.text) return
    //     this.props.createTodo(this.state.text)
    //     this.setState({
    //         text: '',
    //     })
    // }
    createTodo = () => {
        if (!this.state.text) return
        this.props.createTodo(this.state.text)
        this.setState({
            text: '',
        })
    }

    onInputChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleKeyDown(e) {
        if (e.target.value && e.keyCode === 13) this.createTodo()
        // e.target.value && e.keyCode === 13 && this.createTodo()
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    onChange={e => this.onInputChange(e)}
                    value={this.state.text}
                    onKeyDown={e => this.handleKeyDown(e)}
                />
                <button
                    // onClick={() => this.createTodo} // 可使用箭頭函式取得this若不使用則onClick就要使用箭頭函式
                    onClick={this.createTodo}
                >
                    新增
                </button>
            </div>
        )
    }
}

//mapDispatchToProps等於把store內的action 提供給組件dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: text => {
            dispatch(createTodo(text))
        }
    }
}
// connect在輸出時調用
export default connect(null, mapDispatchToProps)(TodoForm)