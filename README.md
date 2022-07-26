# 从安全角度把语言分为强类型与弱类型

1. 从类型安全角度可以把编程语言区分为：强类型（比较安全） 和 弱类型（不太安全）。

2. 首先要明白强弱类型的区分不是权威机构的定义，是一个边界模糊的概念。

3. 强类型`在语言层面`要求函数执行时`传入的实参类型`要和定义函数时`添加的形参类型`完全相同，使用 TypeScript 目的之一就是约束数据类型，`尽可能减少代码中的隐式类型转换`，增强代码的健壮性。
4. 不应该用变量类型是否可以改变这个标准，来判断一个语言是否是强弱类型。（Python 是强类型语言，但变量类型也是可以变的）

> TypeScript 里的强类型，指的是从语法层面进行的约束，写代码的时候写错类型就会有标红报错。JavaScript 是弱类型的，虽然有时也会报出数据类型不对的提升，但那是函数运行后，错误处理抛出的提示，并不是语法层面的约束

# 从类型检查的角度把语言分为静态类型与动态类型

和强弱类型语言的区分不同；静态类型与动态类型语言的区分是非常明确的：

1. 静态类型语言：一个变量申明时它的类型就是明确的，且之后变量类型就不允许再修改。
2. 动态类型语言：在运行阶段，才能确定一个变量的类型，而且变量的类型随时可以改变。（或者换种说法就是变量时没有类型的而变量中的值是有类型的。）

# 强弱类型和动静态类型的注意点

要注意的是：千万不能混淆两种角度的概念；更加不能错误的以为：强类型就是静态类型，弱类型就是动态类型。

# JavaScript 类型系统的特征

JavaScript 是一种 弱类型 也是 动态类型的语言。（这样也就丢失了类型系统的可靠性）

这样设计的原因是：

1. JavaScript 起初开发出来是做非常简单的功能的，要写的代码量非常少。
2. JavaScript 是脚本语言（没有编译环节），通常的静态类型语言都是在编译阶段做静态类型检查的。

所以 JavaScript 类型系统的设计，在早期的时候其实是优点。只是后来随着 JavaScript 的发展和大规模的应用，这种【优势】就变成劣势了。

# 弱类型的问题

1. 类型异常得要等到运行时才能发现。（写代码的时候没有报错提示）（强类型语言，调用对象上不存在的方法语法上就会报错。根本不用等到运行代码）

   2. 类型不明确啃导致函数功能发生改变。（比如说一个求两个数的和的函数；当我们传参时传入了数字字符串，那么结果就不是预期结果，而是会返回字符串。且整个过程时不会报错的，只是结果与预期不同。）

# 强类型的优势

1. 错误可以更早的暴露。
2. 代码智能提示更全面和准确。 （JavaScript 中很多时候需要自己凭借记忆自己去写，很可能会拼写错误，且不会有语法错误提示）（强类型 时时刻刻知道每一个变量是什么类型，以及拥有哪些属性；所以提示更加全面和精准。）
3. 重构更牢靠 （当我们改了某个对象里方法的名称，之前引用的地方就会有语法错误提示，有些插件可以自动修改所有用到这个方法的地方）
4. 减少程序中，变量类型的判断。

# TypeScript 介绍

![TypeScript 介绍](public/TypeScript%E7%A4%BA%E6%84%8F%E5%9B%BE.png)
TypeScript 是是 JavaScript 的超集。（最终执行的时候TypeScript 代码还是会被转化成标准的JavaScript代码)

1. TypeScript弥补了 JavaScript 语言中类型系统的不足之处（也有其他方案来弥补这个不足，TypeScript 是其中最优解)。使用 TypeScript 可以大大提高代码的可靠程度。
2. 使用TypeScript可以直接使用ES6+新特性，因为TypeScript会把新特性，转化为标准的JavaScript代码执行。（不使用typescript的话，老环境的代码，继续添加功能可能还是用不了新特性）

任何一种JavaScript环境下的运行程序，都可以使用TypeScript去开发。对比Flow，TypeScript功能更强大，生态也更健全、更完善。

# TypeScript 的基本使用

1、 建一个项目文件夹，在这个项目中，使用 `yarn init --yes` 命令，初始化一个`package.json`文件来管理项目依赖。

2、然后使用`yarn add typescript --dev`命令 ，安装typescript开发依赖。

​		安装之后在 `node_modules` 目录下 的 `bin` 文件夹中多了一个`tsc`命令；`tsc`命令作用就是帮助我们去编译typescript代码的。

###### 使用tsc执行ts代码

执行 `tsc 01-getting-started.ts`命令，发现会在根目录下生成一个同名js文件。（js文件就是ts文件编译过来的）

###### 编译过程

TypeScript会检查代码中的类型异常，输出到终端。并且会把ts代码编译成标准的JavaScript (ES3)代码，支持所有ES6+的新特性，在这个编译过程中与类型约束相关的拓展代码会被完全移除掉。

# TypeScript 的配置文件

通过 `yarn tsc --init` 命令，初始化一个ts的配置文件。具体的配置详情，直接在配置文件中查阅。

> 当我们 tsc 某个文件时 配置文件 是没被使用的，只有编译整个项目的时候，tsc配置文件才会自动生效

# TypeScript 原始数据类型注解（primitive）

```js
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
const h: symbol = Symbol()
```

# TypeScript 作用域问题

 也就是不同文件中使用相同的变量会标红报错的问题

工作中js文件一般都是以模块的形式工作的，所有一般不会遇到这个问题。我们可以在最后面加上 export { } 来规避这个问题。

# TypeScript中的object类型注解

1. TypeScript中的object类型 不单指普通的对象类型， 而是泛指所有的非原始类型

   `const foo: object = function () {}; // [] || {}`

2. 如果只要约束为普通对象类型，那么虽然可以用对象字面量来约束，但更专业的是使用接口来约束。

   `const obj: { foo: number } = { foo: 1 }`

# TypeScript中的array类型注解

TypeScript中两种定义数组类型的方式：

// 这种方式被称为array泛型，约束的是纯数字组成的数组。不限定成员个数

`const arr1: Array<number> = [1, 2, 3];`

`const arr2: number[] = [1, 2, 3];`

# TypeScript中的元组类型注解

元组 指的 就是明确元素数量，以及每个元素类型的数组

`const tuple: [number, string] = [18, "xiaohong"];`

# TypeScript中的枚举类型注解

  枚举类型可以给一组数值取上一个更好的名字；一个枚举中只会存在几个固定的值，不存在超出范围的可能性。

```js
//枚举的特性：枚举可以通过键去获取值，也可以通过值去获取键

// 假设一个东西有三个状态，我们可以使用 0，1，2来表示这种状态。
// 但是直接使用0，1，2来表示会有问题：比如时间长了会搞不清楚这3个值代表什么意思，也可能引入其他值
// 所以在JavaScript中我们常用的方法就是定义一个对象来管理这3个值，这样就不容易出错，也方便阅读。如下所示
const PostStateus = {
  Draft: 0,
  Unpublished: 1,
  Published: 2,
};

// 在TypeScript中有专门的数据类型： 枚举 来处理这个场景。如下所示
// 如果不指定值，会从0开始累加；如果给第一个属性指定一个数字，则会在这个数字基础上进行累加。
enum PostStateus2 {
  Draft,
  Unpublished,
  Published,
}

// 如果值为字符串（则无法自动赋值），那就得手动为每个属性都赋值。【不常见】
enum PostStateus3 {
  Draft = "aaa",
  Unpublished = "bbb",
  Published = "ccc",
}

// 1.枚举的创建
// 建议使用常量枚举，这样不会侵入js代码。（不使用常量枚举会侵入js代码）
const enum PostStateus4 {
  Draft,
  Unpublished,
  Published,
}

// 2.使用创建好的枚举类型
const post = {
  title: "",
  status: PostStateus4.Draft,
};
```

# TypeScript中的函数类型注解

有两种方式：1.是注解函数类型的变量 2.是对函数的入参和返回值进行注解

TypeScript中对函数的类型约束，`(a: number, b: number) => string`  就是函数类型，约束了入参和返回值的数据类型。

```js
const fun4: `(a: number, b: number) => string` = function (a: number, b: number ): string {
  return "func2";
};
```

```js
// ===========对函数声明进行类型限制==============================
// 1.对函数声明 进行类型注解(这样的函数调用时必须传2个参数且参数类型都是number)
function fun1(a: number, b: number): string {
  return "fun1";
}

// 2.1定义一个可选参数 【2种方法】（这样的函数调用时必须传2个或3个参数，第三个参数可选）
function fun2(a: number, b: number, c?: number): string {
  return "fun1";
}
// 2.2给c形参一个默认值，这样调用函数的时候可以不传第三个参数
function fun3(a: number, b: number, c: number = 10): string {
  return "fun1";
}

// ===========对函数表达式进行类型限制==============================
const fun4: `(a: number, b: number) => string` = function (a: number, b: number ): string {
  return "func2";
};
```

# TypeScript中的任意类型注解

```js
function stringigy(value: any): string {
  return JSON.stringify(value);
}

// 注解成any类型，ts就不会对这个变量进行任何的类型检查，所以any 类型时不安全的。
```

# 隐式类型推断

在TypeScritp中如果我们没有通过明确的注解去标记一个变量的类型，那么typescript会根据这个变量的使用情况去推断这个变量的使用类型，这样的一种特性就叫做，隐式类型推断。

```js
let num = 18; // num变量的类型会被推断为number

let foo; // foo变量会被推断为任意类型
```

建议给每一个变量加上明确的类型

# 类型断言
