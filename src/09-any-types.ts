// 使用typeScript中的任意类型
export {}; // 确保跟其他示例没有成员冲突

function stringigy(value: any): string {
  return JSON.stringify(value);
}

// 注解成any类型，ts就不会对这个变量进行任何的类型检查，所以any 类型时不安全的。
