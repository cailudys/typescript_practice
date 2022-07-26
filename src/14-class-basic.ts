// 类
export {}; // 确保跟其他示例没有成员冲突

// 1. 类在ts中基本的使用：
class Person {
  // 2.在ts中必须需要明确声明类中拥有的属性。
  // 3.在类当中声明属性的方式如下：
  name: string = "init name";
  // 4.要注意的是类的属性必须在 赋予初始值和在构造器中赋值 两者选其一，不然会有语法报错。
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 5.添加方法的方式和es6语法完全一样。
  sayHi(msg: string) {
    // 在方法中可以使用this访问到当前的实例对象（也就是可以使用当前实例对象的属性）
    console.log(`I am ${this.name},${msg}`);
  }
}
