import React from 'React'
import commitItem from '@/css/commitItem.scss'

console.log(commitItem);

export default function CommitItem(props) {
  return <div className={commitItem.box}>
    <h1 className={commitItem.title}>评论人：{props.user}</h1>
    <p className={commitItem.content}>评论内容：{props.content}</p>
  </div>
}

