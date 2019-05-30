/*
* Created by Steven Lee
* Date: 2019/5/30
* Time: 22:53
* Project: React-getting-start
* */

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log('你好啊');
  }
}

// class类中可以使用extends关键字继承父类
class American extends Person {
  constructor(...prams) {
    // 子类通过extends关键字继承了父类，在子类constructor构造函数中必须优先调用super()
    // super是个函数，是父类中constructor构造器的引用
    // super可以通过函数参数的形式传递值
    super(...prams);

  }

  sayHello() {
    console.log('Fuck American');
  }
}

const a1 = new American('Jack', 28)
console.log(a1);
a1.sayHello()

class Chinese extends Person {

}

const c1 = new Chinese('张三', 22)
console.log(c1);
c1.sayHello()
