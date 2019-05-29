/*
* Created by Steven Lee
* Date: 2019/5/29
* Time: 18:04
* Project: React-getting-start
* */

const Person = function (name, age) {
  this.name = name // 实例属性，可以通过对象.属性访问的属性叫实例属性
  this.age = age
}

// 静态属性，挂载在构造函数
Person.info = 'nice'

// 实例方法，挂载在原型链，生成的对象可直接点方法的方式调用
Person.prototype.say = function () {
  console.log('实例方法');
}

// 静态方法
Person.show = function () {
  console.log('静态方法');
}


const p1 = new Person('steven', 20)
console.log(p1.name) // 实例属性获取方式
p1.say() // 实例方法调用方式
console.log(Person.info + '-----') // 静态属性调用方式
Person.show() // 静态方法调用方式

class Animal {
  // 类构造器 默认为空
  // 构造器的作用：每当new一个类，会优先执行构造器中代码
  constructor(name, age) {
    // 实例属性
    this.name = name
    this.age = age
  }

  // 静态属性
  static info = 'es6 静态方法'

  // 挂载原型对象上的实例方法
  jump() {
    console.log('es6 实例方法');
  }

  static runaway() {
    console.log('es6 静态方法');
  }
}

const a1 = new Animal('大黄', 4)
console.log(a1.name); // 实例属性调用
console.log(Animal.info); // 静态方法
a1.jump() // 实例方法调用
Animal.runaway() // 静态方法调用


// 实例属性，可以通过对象.属性访问的属性叫实例属性
// 静态属性，通过构造函数直接访问到的属性，叫静态属性
