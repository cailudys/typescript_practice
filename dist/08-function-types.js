"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ===========对函数声明进行类型限制==============================
// 1.对函数声明 进行类型注解(这样的函数调用时必须传2个参数且参数类型都是number)
function fun1(a, b) {
    return "fun1";
}
// 2.1定义一个可选参数 【2种方法】（这样的函数调用时必须传2个或3个参数，第三个参数可选）
function fun2(a, b, c) {
    return "fun1";
}
// 2.2给c形参一个默认值，这样调用函数的时候可以不传第三个参数
function fun3(a, b, c) {
    if (c === void 0) { c = 10; }
    return "fun1";
}
// ===========对函数表达式进行类型限制==============================
var fun4 = function (a, b) {
    return "func2";
};
//# sourceMappingURL=08-function-types.js.map