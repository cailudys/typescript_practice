// 接口
export {}; // 确保跟其他示例没有成员冲突

// // 1.假设我们要传入一个文章对象，在方法中会打印post过来的文章的title和content。
// // 2.其实post有隐性的要求，要有title属性，还要有content属性。否则可能会出错。
// function printPost(post) {
//   console.log(post.title);
//   console.log(post.content);
// }

// 3.接口可以帮助我们约束传入函数的对象的结构以及其属性的数据类型。
// 4. 定义一个接口(接口首字母大写)
interface Post {
  title: string;
  content: string;
}

// 5.这样就显示地要求我们调用函数的时候按约定传参了。
function printPost(post: Post) {
  console.log(post.title);
  console.log(post.content);
}

// 这样调用就会直接报错
// printPost({});

// 接口可选成员 和只读成员
interface Post2 {
  title: string;
  content: string;
  subtitle?: string;
  readonly summary: string;
}

// 动态成员
interface Cache {
  [prop: string]: string;
}

const cache: Cache = {
  foo: "value1",
  bar: "value2",
};
