"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//枚举的特性：枚举可以通过键去获取值，也可以通过值去获取键
// 假设一个东西有三个状态，我们可以使用 0，1，2来表示这种状态。
// 但是直接使用0，1，2来表示会有问题：比如时间长了会搞不清楚这3个值代表什么意思，也可能引入其他值
// 所以在JavaScript中我们常用的方法就是定义一个对象来管理这3个值，这样就不容易出错，也方便阅读。如下所示
var PostStateus = {
    Draft: 0,
    Unpublished: 1,
    Published: 2,
};
// 在TypeScript中有专门的数据类型： 枚举 来处理这个场景。如下所示
// 如果不指定值，会从0开始累加；如果给第一个属性指定一个数字，则会在这个数字基础上进行累加。
var PostStateus2;
(function (PostStateus2) {
    PostStateus2[PostStateus2["Draft"] = 0] = "Draft";
    PostStateus2[PostStateus2["Unpublished"] = 1] = "Unpublished";
    PostStateus2[PostStateus2["Published"] = 2] = "Published";
})(PostStateus2 || (PostStateus2 = {}));
// 如果值为字符串（则无法自动赋值），那就得手动为每个属性都赋值。【不常见】
var PostStateus3;
(function (PostStateus3) {
    PostStateus3["Draft"] = "aaa";
    PostStateus3["Unpublished"] = "bbb";
    PostStateus3["Published"] = "ccc";
})(PostStateus3 || (PostStateus3 = {}));
// 2.使用创建好的枚举类型
var post = {
    title: "",
    status: 0 /* PostStateus4.Draft */,
};
//# sourceMappingURL=07-enum-types.js.map