// 这种方式被称为array泛型，约束的是纯数字组成的数组。不限定成员个数
const arr1: Array<number> = [1, 2, 3];

const arr2: number[] = [1, 2, 3];

// 这样写代码，我们调用此函数的时候可以传递任意多个参数，代码中拿到的都是一个args数组对象。
function sum(...args: number[]) {
  // 如果不使用ts，我们就得加入一些判断，是否每一项都为数字
  return args.reduce((prev, current) => prev + current, 0);
}

sum(1, 2, 3);
