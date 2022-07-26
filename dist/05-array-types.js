"use strict";
// 这种方式被称为array泛型，约束的是纯数字组成的数组。不限定成员个数
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 这样写代码，我们调用此函数的时候可以传递任意多个参数，代码中拿到的都是一个args数组对象。
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // 如果不使用ts，我们就得加入一些判断，是否每一项都为数字
    return args.reduce(function (prev, current) { return prev + current; }, 0);
}
sum(1, 2, 3);
//# sourceMappingURL=05-array-types.js.map