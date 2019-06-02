// 定义父组件使用class关键字
import React from 'react'
import CommitItem from '@/components/commitItems'

export default class CommitList extends React.Component {
  constructor() {
    super()
    this.state = {
      commonList: [ // 评论列表数据
        {id: 1, user: 'steven', content: '哈哈'},
        {id: 2, user: 'Joy', content: '呵呵'},
        {id: 3, user: 'Dorothy', content: '嘿嘿'},
        {id: 4, user: 'Howard', content: '嘎嘎'},
        {id: 5, user: 'Tom', content: '啪啪'}
      ]
    }
  }

  render() {
    return <div>
      {/* 设置标签样式，格式应该为  style={{color:'red',fontSize: size}}  其中size为变量*/}

      <h1 style={{color: 'red', fontSize: '25px', zIndex: 3, fontWeight: 200,textAlign: 'center'}}>这是评论列表组件</h1>
      {this.state.commonList.map(v => <CommitItem key={v.id} {...v}></CommitItem>)}
    </div>
  }
}
