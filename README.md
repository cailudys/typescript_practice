# 1、TS和JS的核心区别

![image-20221025084525608](C:\Users\cailu\Desktop\typescript_practice\public\image-20221025084525608.png)

TS是针对数据类型的，是用来定义数据类型和操作数据类型的。使用TS是为了减少代码错误，和写出更加便于管理的，更加健壮的代码。

JS是针对数据的，是用来定义数据和操作数据的。

2、区分TS普通类型和工具类型

把TS普通类型传入工具类型中

# 2、 如何创建一个 既有string又有number的数组？

```
// 书写格式如下，不要少括号，否则用作类型注解时，赋值给变量会报错
type T = (string|number)[]
```

# 3、TS内置的工具类型

```
Uppercase、Lowercase、Capitalize、Uncapitalize、pick、Omit、Exclude
```

###### ①Pick 工具类型

作用是选取对象中，被选中的属性，从而形成一个新的类型

![image-20221025104940478](C:\Users\cailu\Desktop\typescript_practice\public\image-20221025104940478.png)

###### ②Omit工具类型

作用是过滤掉对象中不需要的属性，从而形成一个新的类型

![image-20221025105158167](C:\Users\cailu\AppData\Roaming\Typora\typora-user-images\image-20221025105158167.png)

Omit类型的另一个应用场景：结合接口继承，来实现修改对象中的已知属性，从而形成新的类型

![image-20221025105518508](C:\Users\cailu\Desktop\typescript_practice\public\image-20221025105518508.png)

Omit工具类型的实现方式：使用到了TS内置的Exclude 和 Pick工具类型

![image-20221025105650697](C:\Users\cailu\Desktop\typescript_practice\public\image-20221025105650697.png)

 

# 1、泛型 （generics）

![image-20221024101954534](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024101954534.png)

泛型就是指：在定义 函数，接口或者类的时候，我们使用泛型变量，不去指定具体的类型。等到我们`使用的时候再去指定具体类型的约束方式`。

# 2、联合类型

联合类型操作符 （|）,   联合类型指的是由两种或者多种类类型组合成的新的类型，用来约束值是这些类型中的一种。

# 3、交叉类型

![image-20221024102936092](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024102936092.png)

交叉类型操作JavaScript，实现的效果，不同属性放到一起，有相同属性的就取其交集。

![image-20221024103150596](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024103150596.png)

交叉类型操作函数，实现的效果类似于函数重载。

![image-20221024104313593](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024104313593.png)



# 4、any类型和unknow类型

![image-20221024104944816](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024104944816.png)

# 5、TS中的object类型

`object` 类型他表示非原始对象，`number`，`string`，`boolean`，`symbol`，`null`或`undefined`在JavaScript中为原始类型

# 6、 索引签名 和 Record 工具类型

当定义的对象的属性个数不确定时，就可以使用索引签名 和 Record工具类型

以下是索引签名的语法：

![image-20221024114124135](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024114124135.png)

![image-20221024114216757](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024114216757.png)

下面是模板字面量类型的写法

![image-20221024114313389](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024114313389.png)

下面是Record类型的写法：

![image-20221024114748717](C:\Users\cailu\AppData\Roaming\Typora\typora-user-images\image-20221024114748717.png)



# 7、declare

![image-20221024132712117](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024132712117.png)

![image-20221024133321444](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024133321444.png)

报这样的错误的原因是，TS不认识wx这样的全局变量。（TS自己内置声明了许多全局变量，所以类似JSON这样的全局变量可以直接使用）

```
//解决办法就是 使用declare关键字声明 wx 全局变量，如下：
declare var wx ： any；
```

可以使用 https://www.typescriptlang.org/dt/search 这个网址，查找对应的已经写好的声明文件，导入到项目中使用。

# 8、泛型的 工具类型（pick）

pick的作用就是从一个对象中选取出几个指定的类型，组成一个新的类型。用法如下：

![image-20221024134047746](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024134047746.png)

# 9、TS中 类型别名 type 和 接口 interface的区别

interface只能用于定义对象类型，可以同时声明对象上的属性和方法。



##### ①类型别名和接口都可以用来描述对象和函数

![image-20221021181647777](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021181647777.png)

##### ②类型别名和接口都支持拓展，类型别名通过 交叉运算符来拓展，接口通过extends 来拓展。

![image-20221021181939265](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021181939265.png)

![image-20221021181842910](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021181842910.png)

##### ③类型别名可以为基本类型、联合类型或者元组类型定义别名，而接口不可以！

##### ④同名接口会自动合并，而同名类型别名则会报错。

![image-20221021182253234](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021182253234.png)



# 10、函数和类中的重载

函数重载

![image-20221024134448454](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024134448454.png)

类方法重载

![image-20221024134530982](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024134530982.png)



# 11、TS中keyof操作符的应用（用来操作类型注解（类型））

 用于获取类型中的所有键，其返回类型是一个联合类型

##### ①直接操作类型，返回一个由操作类型的键的名称 组成的联合类型

![image-20221021163355180](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021163355180.png)

##### ② 用类型包裹住 上面得到的联合类型，就可以获得由类型每个键的类型组合成的联合类型

![image-20221021163931158](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021163931158.png)

③ keyof用在 类和枚举类型上

![image-20221021180505016](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021180505016.png)

# 12、映射类型

![image-20221024134806174](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024134806174.png)

![image-20221024135250577](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024135250577.png)

 新的语法 as子句，对键值对的键进行重新映射。

![image-20221024144824977](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024144824977.png)

![image-20221024145607057](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024145607057.png)

![image-20221024145741801](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024145741801.png)



# 13、TS中 typeof 操作符的应用（用来操作 js普通对象、函数对象、class类）

##### ①ts中可以使用 `typeof` 操作符，从普通JavaScript对象中提取类型注解。

![image-20221021155036102](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021155036102.png)

##### ②ts中可以使用` keyof typeof `操作符组合，从枚举类型中提取类型注解。（提取到所以属性名）

![image-20221021160748515](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021160748515.png)

#####  ③可以使用`typeof `操作符 ，来获取函数对象的类型注解。

​		有了函数对象的类型注解，还可以使用TS内置的ReturnType和Parameters工具来获取函数的返回值类型和参数类型的注解

![image-20221021161318093](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021161318093.png)

④可以使用typeof操作符出来class，来获取到class中的构造函数对应的类型注解。

![image-20221021162026880](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021162026880.png)

⑤ typeof还可以结合const断言，来提取更加精确的（缩小范围）类型注解。

![image-20221021162213951](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021162213951.png)

# 14、定义工具类型 -- 使用条件类型

你知道 Exclude、Extract、NonNullable、Parameters、ReturnType等这些工具类型吗？

下图展示了TS中的工具类型是怎么定义的，工具类型返回的也是类型

![image-20221024155207797](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024155207797.png)

![image-20221024155306805](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024155306805.png)

上面这句话的理解是：当类型T可以赋值给类型U时，返回类型X，否则返回类型Y。

下图的条件链怎么理解？

![image-20221024162558535](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024162558535.png)

​     条件链工具类型处理联合类型的情况如下图

![image-20221024165703910](C:\Users\cailu\Desktop\typescript_practice\public\image-20221024165703910.png)



# 15、infer

infer用于声明变量，用来存储 在模式匹配中所捕获到的类型 （所捕获到的类型不是确定的，根据每次模式匹配的类型来确定）

infer 声明的变量和普通变量的区别是：普通变量需要我们主动赋值，而infer变量是每次模式匹配中自动赋值的。

##### 如何获取一个数组的类型？

```tsx
// 1.自己创建一个工具类型(UnpackedArray),用于获取一个数组的返回值类型
type UnpackedArray<T> = T extends (infer U)[] ? U : T

//2. 使用UnpackedArray，来获取 TO 数组类型的类型。
type TO = (string | number)[]
type UO = UnpackedArray<TO>     
```

infer 使用的几个限制：

![image-20221025080912020](C:\Users\cailu\Desktop\typescript_practice\public\image-20221025080912020.png)

```
（1）infer声明只能在 extends之后使用，不能再extends之前或者其他地方使用.
（2）infer声明的类型变量只在True分支中可用。
（3）infer声明的类型变量，会在匹配过程中，根据extends前面的类型推导图同样的类型。
```

##### 如何获取一个函数的返回值类型？

```tsx
// 1.自己创建一个工具类型(UnpackedArray),用于获取一个函数的返回值类型
type UnpackedFn<T> = T extends (...args:any[])=> infer U ? U : T
```



# 16、infer 新特性

![image-20221025083045330](C:\Users\cailu\Desktop\typescript_practice\public\image-20221025083045330.png)

为infer type添加可选的 extends 子句，当infer types extends子句不成立是，表达式也同样为false

# 17、模板字面量类型

使用模板字面量类型来减少项目中的typescript重复代码

![image-20221025083543041](C:\Users\cailu\Desktop\typescript_practice\public\image-20221025083543041.png)

![image-20221025083636160](C:\Users\cailu\Desktop\typescript_practice\public\image-20221025083636160.png)

隐藏的叉积组合

![image-20221025083916689](C:\Users\cailu\Desktop\typescript_practice\public\image-20221025083916689.png)



# 20、TS中的extends（有多种含义，不要搞混）

##### ① 两个接口用extends来继承

![image-20221021173409512](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021173409512.png)

##### ② 在泛型当中用extends来做约束

![image-20221021174816451](C:\Users\cailu\Desktop\typescript_practice\public\image-20221021174816451.png)





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

# 隐式类型推断（inference）

在TypeScritp中如果我们没有通过明确的注解去标记一个变量的类型，那么typescript会根据这个变量的使用情况去推断这个变量的使用类型，这样的一种特性就叫做，隐式类型推断。

```js
let num = 18; // num变量的类型会被推断为number

let foo; // foo变量会被推断为任意类型
```

建议给每一个变量加上明确的类型

# 类型断言 （assertion）

有些特殊的情况下typescript无法推断出具体的类型，而我们作为开发者以及明确知道这个变量到底是什么类型的。

```js
// 假定这个 nums 来自一个明确的接口,且明确知道必定有一个大于0的数字。
const nums = [500, 600, 700];

// ts 只是根据变量的数据类型，推断出所有可能的结果。范围比较大
// 作为开发者，明确知道一个更小的范围，所以可以使用断言，来缩小约束范围。
const res = nums.find((i) => i > 0);

// 举个例子，ts推断出一个变量可能是数字类型也可能是undefind；那么这个时候你需要用这个变量相乘，肯定语法上会提示错误。
const square = res * res; // 会提示错误

// 那么这个时候我们就需要使用断言来标记这个变量为数字
// 断言有两种写法
const num1 = res as number; // 推荐使用
```

# TypeScript中接口 （interfaces）

接口的作用：显示的要求我们写出正确的对象传递给函数或者其他地方。（没有显示地要求的话，容易写错，写错了也没提示要运行时才能发现）

可以用来约定对象的结构，我们使用一个接口就必须遵循这个接口全部的约定。接口可以约定一个对象中，应该有哪些成员和这些成员的类型又是什么样的。

```JS
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
printPost({});

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
```

# TypeScript中的类

类是用来 描述一类具体对象的抽象成员；

ES6以前JavaScript都是使用 `函数` 配合 `原型` 来模拟实现 `类的功能` （也就是描述一类具体对象）

(那么为什么之前的JavaScript要模拟实现类呢？因为类在其他语言中用处很大，在js中也希望有这样强大的东西使用。)

从ES6开始JavaScript中就有了专门的class 来创建类 （实质是一个语法糖）

TypeScript 不仅可以使用class，还增强了class （增加了访问修饰符，抽象类等）

###### 类在ts中基本的使用如下：

```js
class Person {
  // 2.在ts中必须需要明确声明类中拥有的属性。
  // 3.在类当中声明属性的方式如下：
  name: string = "init name";
  // 4.要注意的是类的属性必须在 赋予初始值和在构造器中赋值 两者选其一，不然会有语法报错。
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 5.添加方法的方式和es6语法完全一样。
  sayHi(msg: string) {
    // 在方法中可以使用this访问到当前的实例对象（也就是可以使用当前实例对象的属性）
    console.log(`I am ${this.name},${msg}`);
  }
}
```

###### 类的访问修饰符

> 总结：修饰符就是控制类中的属性的可访问性的： public > protected > private

```js
class Person {
  // 1.public 修饰符 （不加修饰符默认就是public）
  public name: string = "init name";
  // 2.protected 修饰的属性，能在当前类的内部进行访问，允许在子类中访问此属性，不能用实例对象去访问。
  protected gender: boolean;
  // 3.private 修饰的属性，只能在当前类的内部进行访问，不能在子类中访问，更不能用实例对象进行访问。
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = true;
  }

  sayHi(msg: string) {
    console.log(`I am ${this.name},${msg}`);
  }
}

const tom = new Person("tom", 18);
// 会报错
tom.age;
// 会报错
tom.gender;

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    // 这里会报错
    console.log(this.age);
    // 这里不会报错
    console.log(this.gender);
  }
}
```

###### 类中的只读属性

```js
class Person {
  public name: string = "init name";
  // readonly 只读属性，属性一旦设置就不能被修改 （只读属性 是写在 属性修饰符后面的）
  protected readonly gender: boolean;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = true;
  }

  sayHi(msg: string) {
    console.log(`I am ${this.name},${msg}`);
  }
}
```

###### 用接口去抽象出类与类之间相同的特性

类与类之间也会有一些共同的特征，对于这些公共的特征，我们一般会用接口去抽象。

```js
class Person {
  eat(food: string): void {
    console.log(`优雅的进餐：${food}`);
  }
  run(distance: number) {
    console.log(`直立行走：${distance}`);
  }
}

class Animal {
  eat(food: string): void {
    console.log(`呼噜呼噜的吃：${food}`);
  }
  run(distance: number) {
    console.log(`爬行：${distance}`);
  }
}

// 上面两个ts类，有相同的特性，但又不完全一样。所以应该不能定义公共的父类。
// 这个时候应该用接口来约束他俩之间公共的能力。
```

###### 用接口去约束两个类之间功能的能力，做到了之约束能力，没有约束实现,可以有很多不同的实现。

```js
// 用接口去约束两个类之间功能的能力，做到了之约束能力，没有约束实现,可以有很多不同的实现。
interface EatAndRun {
  eat(food: string): void;
  run(distance: number): void;
}
```

 使用 implements 来实现接口

```js
// 使用 implements 来实现接口
// 换句话说，实现某个接口的类，需要实现接口里定义的所有内容，否则会有语法层面的报错。(可以有效防止漏写)
// 优点也是在于会有语法层面的报错，可以提示开发者，有时还可以使用快捷处理完成错误处理。
class Person implements EatAndRun {
  eat(food: string): void {
    throw new Error("Method not implemented.");
  }
  run(distance: number): void {
    throw new Error("Method not implemented.");
  }
}
```

###### 类---定义接口和使用接口的最佳实践

```js
// 更合理的是，一个接口只约束一个能力。实现接口是可以同时实现需要的接口。
interface Eat {
  eat(food: string): void;
}

interface Run {
  run(distance: number): void;
}

// 实现接口的时候用逗号的方式，同时实现多个接口
class Person implements Eat, Run {
  eat(food: string): void {
    throw new Error("Method not implemented.");
  }
  run(distance: number): void {
    throw new Error("Method not implemented.");
  }
}
```

# 抽象类（abstract）

抽象类 和 接口有点类似，它也是用来约束子类当中要有某些成员。不同的是抽象类中可以包含一些成员的实现；而接口只能包含成员的抽象，而不包含具体实现。

```js
// 1.定义抽象类的方法：在class前面加abstract关键字。
// 2.当一个类被定义为抽象类后，它只能够被继承，不能够再使用new的方式去创建对象了。
abstract class Animal {
  // 3.定义具体实现的方法
  eat(food: string): void {
    console.log(`呼噜呼噜的吃: ${food}`);
  }
  // 5.定义抽象方法(要求继承这个抽象类必须实现的方法 )
  abstract run(distance: number): void;
}

// 4.所以我们必须定义子类继承抽象类
class Dog extends Animal {
  // 6.用vscode自动实现抽象类中的抽象方法
  run(distance: number): void {
    throw new Error("Method not implemented.");
  }
}

// 这样当我们使用Dog创建的实例就同时拥有了父类里实现的方法和子类里实现的方法。
const xiaohuang = new Dog();
xiaohuang.eat("狗粮");
xiaohuang.run(100);
```

# 第三方模块的 类型声明

在项目的实际开发中，我们难免会用到第三方的npm模块。而这些模块不一定是通过ts编写的。所以说它所提供的成员就不会有强类型的体验。

> 总结：
>
> 1.在typescript中应用第三方模块，如果这个模块中不包含对于的类型声明文件，那么我们就得尝试去安装对应的类型声明文件模块。
>
> 2.如果没有对应的类型声明文件可以之间安装，那么我们就需要使用declare去手动声明对应的模块类型。

```js
// 1. 发现报错，提示找不到类型声明的文件。
import { camelCase } from "lodash";

// 进行类型声明（声明函数的类型）
// 就是一个函数在定义的时候由于没写原因没有进行类型声明，那么我们在使用的时候可以先对它进行类型声明
// 这种用法存在的原因就是为了兼容一些使用js写出来的模块。
// declare function camelCase(input: string): string;

const res = camelCase("hello typed");

// 大多数npm模块已经写好了对于的声明文件的模块，我们只需把鼠标移到代码中的模块上，就会自动提示对于的安装声明文件的方法。

// 很多npm模块已经在内部集成了声明文件，我们只需要安装那个应用模块就行，不需要再安装类型声明模块。（比如 query-string模块）
```



#### 

① 在ts中我们可以用` type` 和` interface`来定义对象的类型

②有了定义的好的对象类型，我们可以使用 一些关键字来操作这些定义好的类型。从而满足不同的业务需求。

