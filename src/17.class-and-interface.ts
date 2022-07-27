// 使用接口抽象出类与类中相同的特性
export {}; // 确保跟其他示例没有成员冲突

// class Person {
//   eat(food: string): void {
//     console.log(`优雅的进餐：${food}`);
//   }
//   run(distance: number) {
//     console.log(`直立行走：${distance}`);
//   }
// }

// class Animal {
//   eat(food: string): void {
//     console.log(`呼噜呼噜的吃：${food}`);
//   }
//   run(distance: number) {
//     console.log(`爬行：${distance}`);
//   }
// }

// // 上面两个ts类，有相同的特性，但又不完全一样。所以应该不能定义公共的父类。
// // 这个时候应该用接口来约束他俩之间公共的能力。如下所示

// // 用接口去约束两个类之间功能的能力，做到了之约束能力，没有约束实现,可以有很多不同的实现。
// interface EatAndRun {
//   eat(food: string): void;
//   run(distance: number): void;
// }

// // 使用 implements 来实现接口
// // 换句话说，实现某个接口的类，需要实现接口里定义的所有内容，否则会有语法层面的报错。
// // 优点也是在于会有语法层面的报错，可以提示开发者，有时还可以使用快捷处理完成错误处理。
// class Person implements EatAndRun {
//   eat(food: string): void {
//     throw new Error("Method not implemented.");
//   }
//   run(distance: number): void {
//     throw new Error("Method not implemented.");
//   }
// }

// 更合理的是，一个接口只约束一个能力。实现接口是可以同时实现需要的接口。
interface Eat {
  eat(food: string): void;
}

interface Run {
  run(distance: number): void;
}

// 实现接口的时候用逗号的方式，同时实现多个接口
class Person implements Eat, Run {
  eat(food: string): void {
    throw new Error("Method not implemented.");
  }
  run(distance: number): void {
    throw new Error("Method not implemented.");
  }
}
