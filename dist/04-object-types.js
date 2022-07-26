"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript中的Object类型 不单指普通的对象类型， 而是泛指所有的非原始类型
// 注意object是小写
var foo = function () { }; // [] || {}
// 如果要单指普通的对象类型，写法如下
// 如果字面量对象里还有类型约束；那么赋值的对象结构要和定义的对象结构完全一致，不能多也不能少。
var obj = { foo: 1 };
// 如果字面量对象是个空对象；那么赋值的对象结构任意就行。
var obj2 = { foo: 1, c: "erqer" };
//# sourceMappingURL=04-object-types.js.map