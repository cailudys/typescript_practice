// 使用typeScript 对函数进行类型限制
export {}; // 确保跟其他示例没有成员冲突

// ===========对函数声明进行类型限制==============================
// 1.对函数声明 进行类型注解(这样的函数调用时必须传2个参数且参数类型都是number)
function fun1(a: number, b: number): string {
  return "fun1";
}

// 2.1定义一个可选参数 【2种方法】（这样的函数调用时必须传2个或3个参数，第三个参数可选）
function fun2(a: number, b: number, c?: number): string {
  return "fun1";
}
// 2.2给c形参一个默认值，这样调用函数的时候可以不传第三个参数
function fun3(a: number, b: number, c: number = 10): string {
  return "fun1";
}

// ===========对函数表达式进行类型限制==============================
const fun4: (a: number, b: number) => string = function (a, b) {
  return "func2";
};
