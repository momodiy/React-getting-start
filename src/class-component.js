/*
* Created by Steven Lee
* Date: 2019/5/30
* Time: 23:27
* Project: React-getting-start
* */

// import React from 'react'
import React, {Component} from 'react'  // 按需导出语法

class Entry extends React.Component {
  // 组件内部必须有render函数
  // render函数中必须返回合法的JSX虚拟DOM结构
  // class关键字中要想使用外部传输过来的 props 参数，无需接收，直接使用this.props.属性
  // this 表示当前实例对象
  render() {
    return <div>这是一首简单的{this.props.name}  <br/>---作者：{this.props.author}</div>
  }
}

export default Entry
