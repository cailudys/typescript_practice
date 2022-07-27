// 类的访问修饰符
export {}; // 确保跟其他示例没有成员冲突

class Person {
  // 1.public 修饰符 （不加修饰符默认就是public）
  public name: string = "init name";
  // 2.protected 修饰的属性，能在当前类的内部进行访问，允许在子类中访问此属性，不能用实例对象去访问。
  protected gender: boolean;
  // 3.private 修饰的属性，只能在当前类的内部进行访问，不能在子类中访问，更不能用实例对象进行访问。
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = true;
  }

  sayHi(msg: string) {
    console.log(`I am ${this.name},${msg}`);
  }
}

const tom = new Person("tom", 18);
// 会报错
// tom.age;
// // 会报错
// tom.gender;

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    // 这里会报错
    // console.log(this.age);
    // 这里不会报错
    console.log(this.gender);
  }
}

// 总结：修饰符就是控制类中的属性的可访问性的： public > protected > private
