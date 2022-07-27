// 抽象类
export {}; // 确保跟其他示例没有成员冲突

// 1.定义抽象类的方法：在class前面加abstract关键字。
// 2.当一个类被定义为抽象类后，它只能够被继承，不能够再使用new的方式去创建对象了。
abstract class Animal {
  // 3.定义具体实现的方法
  eat(food: string): void {
    console.log(`呼噜呼噜的吃: ${food}`);
  }
  // 5.定义抽象方法(要求继承这个抽象类必须实现的方法 )
  abstract run(distance: number): void;
}

// 4.所以我们必须定义子类继承抽象类
class Dog extends Animal {
  // 6.用vscode自动实现抽象类中的抽象方法
  run(distance: number): void {
    throw new Error("Method not implemented.");
  }
}

// 这样当我们使用Dog创建的实例就同时拥有了父类里实现的方法和子类里实现的方法。
const xiaohuang = new Dog();
xiaohuang.eat("狗粮");
xiaohuang.run(100);
