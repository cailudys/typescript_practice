// 泛型
export {}; // 确保跟其他示例没有成员冲突

function createNumberArray(length: number, value: number): number[] {
  // Array对象默认创建的是any类型的数组
  // 我们使用<number>把返回值约束为了number类型，如果检查到实际结果不是返回number类型，会直接爆出语法层面的错误。
  const arr = Array<number>(length).fill(value);
  return arr;
}

function createStringArray(length: number, value: String): String[] {
  // Array对象默认创建的是any类型的数组
  const arr = Array<String>(length).fill(value);
  return arr;
}

// 上面两个函数明显有冗余的地方。
// 也很明显，我只需要把类型变成一个变量，然后让Array返回值的变量类型和value的变量类型保持一致就行。
// 用法：要在函数名称后面加<T>,其中T就是类型变量。至于其他有哪些地方需要用到这个变量得自己判断然后使用
function createArray<T>(length: number, value: T): T[] {
  // Array对象默认创建的是any类型的数组
  const arr = Array<T>(length).fill(value);
  return arr;
}

// 泛型的使用
const res = createArray<string>(3, "foo");
const res2 = createArray<number>(3, 10);

// 总结：我们使用泛型的目的，是为了在使用时确定 函数中某些变量的类型
