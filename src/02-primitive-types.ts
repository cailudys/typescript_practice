/**
 * 原始数据类型
 */

const a: string = "foobar";

const b: number = 100; // NaN Infinity

const c: boolean = true; // false

// TypeScript中，在关闭严格模式的情况下， string，number，boolean这三种原始数据类型允许值为 null 和 undefined。
const d: string = null;

// 在严格模式下void类型的值只能是 undefined
const e: void = undefined; // null

const f: null = null; // 只有这一种情况

const g: undefined = undefined; // 只有这一种情况

// symbol类型比较特殊，直接如下写回标红报错?但我这没有报错
const h: symbol = Symbol();
