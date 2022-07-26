"use strict";
/**
 * 原始数据类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
var a = "foobar";
var b = 100; // NaN Infinity
var c = true; // false
// TypeScript中，在关闭严格模式的情况下， string，number，boolean这三种原始数据类型允许值为 null 和 undefined。
var d = null;
// 在严格模式下void类型的值只能是 undefined
var e = undefined; // null
var f = null; // 只有这一种情况
var g = undefined; // 只有这一种情况
// symbol类型比较特殊，直接如下写回标红报错?但我这没有报错
var h = Symbol();
//# sourceMappingURL=02-primitive-types.js.map