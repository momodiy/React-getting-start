import React from 'react'


export default class bindEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      day: 'happy'
    }
  }

  render() {
    return <div>BindEvent
      <br/>
      {/* click 只接受function */}
      {/* 箭头函数内部this指向函数外部this */}
      <button onClick={() => this.handleClick()}>按钮
      </button>

      <span>{this.state.day}</span>

      {/* 当指绑定value到state，没有onChange，文本框会成为只读 */}

      {/* react中是默认数据流动，需手动监听onchange获取最新的文本框的值，使用setState更新state */}
      {/* 获取文本框的值。 1.通过事件参数e  e.target.value*/}
      {/* 2.使用ref引用 this.refs.{属性名}.value*/}
      <input type="text" style={{width: '100%'}} value={this.state.day} onChange={() => this.textChange()} ref="txt"/>
    </div>
  }

  handleClick() {
    console.log(this);
    this.state.day = '牛逼'

    /**
     * react中修改state，需使用setState(对应状态会被更新，其余不会有变化)
     * 参数一：要修改的state的值
     * 参数二：值修改之后的回调函数
     * */
    this.setState({day: 'wonderful!'}, () => {
      console.log(this.state.day);
    })
  }

  textChange = () => {
    this.setState({day: this.refs.txt.value})
  }
}
