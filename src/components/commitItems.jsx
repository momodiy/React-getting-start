import React from 'React'

export default function CommitItem(props) {
  return <div style={{border: '1px solid #ccc', padding: '10px', margin: '10px', borderShadow: '0 0 10px #ccc'}}>
    <h2 style={{fontSize: '14px'}}>评论人：{props.user}</h2>
    <p style={{fontSize:'12px'}}>评论内容：{props.content}</p>
      </div>
    }

