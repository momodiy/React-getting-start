/*
* Created by Steven Lee
* Date: 2019/5/26
* Time: 11:56
* Project: webpack-base
* */
console.log(6668989866);
require('./jsx')
import React from 'react'  // 创建组件、虚拟dom元素，生命周期
import ReactDom from 'react-dom' // 创建好的组件和虚拟dom放在页面上展示


/**
 * 创建虚拟dom
 * 参数一 创建元素的类型，String 表示元素名称
 * 参数二 对象或null， dom元素属性
 * 参数三 子节点 （子节点、文本子节点）
 * 其他参数 其他子节点
 * */

const node1 = React.createElement('h3', {id: 'hhh', title: 'good job'}, '这是一首简单的小情歌')
//
// const nodeWrap = React.createElement('h2', null, '', node1)

/**
 * 渲染dom
 * 参数一：要渲染的虚拟dom元素
 * 参数二：放置虚拟dom的容器
 * */
const tt = <div>interesting</div>


// ReactDom.render(tt, document.getElementById('app'))


