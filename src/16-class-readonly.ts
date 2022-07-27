// 类的只读属性
export {}; // 确保跟其他示例没有成员冲突

class Person {
  public name: string = "init name";
  // readonly 只读属性，属性一旦设置就不能被修改 （只读属性 是写在 属性修饰符后面的）
  protected readonly gender: boolean;
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
