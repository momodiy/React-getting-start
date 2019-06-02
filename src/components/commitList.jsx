
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
      <h1>这是评论列表组件</h1>
      {this.state.commonList.map(v => <CommitItem key={v.id} {...v}></CommitItem>)}
    </div>
  }
}
