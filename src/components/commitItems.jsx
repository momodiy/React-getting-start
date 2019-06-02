import React from 'React'


// 第一层封装
// const itemStyle = {border: '1px solid #ccc', padding: '10px', margin: '10px', borderShadow: '0 0 10px #ccc'}
// const userStyle = {fontSize: '14px'}
// const contentStyle = {fontSize: '12px'}

// 第二层封装
// const styles = {
//   item: {border: '1px solid #ccc', padding: '10px', margin: '10px', borderShadow: '0 0 10px #ccc'},
//   user: {fontSize: '14px'},
//   content: {fontSize: '12px'}
// }

// 抽离为单独的样式表
import styles from '@/components/styles'

export default function CommitItem(props) {
  return <div style={styles.item}>
    <h2 style={styles.user}>评论人：{props.user}</h2>
    <p style={styles.content}>评论内容：{props.content}</p>
  </div>
}

