# 来源： [2021大厂前端核心面试题详解](https://live.vhall.com/room/watch/732519004)

## 算法准备


## 事件循环


## 事件的捕获和冒泡机制你了解多少？

### 基本概念
- 捕获： 自顶向下
- 冒泡： 自底向上

### window.addEventListener 监听的是什么阶段的事件？

```ts
    // 冒泡阶段
    window.addEventListener('click', (evt) => {

    });

    // 传递第三个参数为true，则监听捕获阶段的事件
    window.addEventListener('click', (evt) => {

    }, true)
```

### 什么场景用到了捕获机制？


### 捕获和冒泡的执行顺序
> 先捕获后冒泡


## 工作中的防抖和节流


### 分别适合用在什么场景？

- 节流： resize scroll
- 防抖： input

### 手写一个节流函数


## 你了解Promise吗？平时用的多吗？


### 利用装饰器写一个 Promise 缓存（知识点：JS中的装饰器怎么写，缓存要注意时效）

## 算法：
接雨水

leetcode Hot 100
剑指Offer 60多道算法



## 如何监听dom 节点的变化
使用 MutationObserver 可以实现

## call, apply, bind 的区别，应用场景？
- call, apply 是用于改变函数的上下文，在被调用时就会执行函数
- bind 返回一个改变了上下文之后的函数

### call 和 apply 的区别？
主要是传参方式不同，call是传递多个参数， apply 则是第二个参数传递一个数组

### 手写 call
```js
Function.prototype.myCall = function(context) {
    if (typeof this !== 'Function') {
        thrown new TypeError('Error');
    }
    context = context || window;
    context.fn = this;
    const args = [...arguments].slice(1);
    const rs = context.fn(...args);
    delete context.fn;
    return rs;
}
```

### 手写 apply
```js
Function.prototype.myApply = function(context) {
    if (typeof this !== 'Function') {
        throw new TypeError('Error');
    }
    context = context || window;
    context.fn = this;
    let rs = null;
    if (arguments[1]) {
        rs = context.fn(...arguments[1]);
    } else {
        rs = context.fn();
    }
    delete context.fn;
    return rs;
}
```

### 手写bind
```js
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```

## XSS 攻击 和 CSRF 攻击

- XSS 攻击是指攻击者在网站中插入可执行代码，防范方法是对脚本标签进行识别过滤

- CSRF攻击是指跨站请请求伪造，目前防御 CSRF 攻击主要有三种策略：验证 HTTP Referer 字段；在请求地址中添加 token 并验证；在 HTTP 头中自定义属性并验证。


## 按位与、按位或、按位异或
- 8 & 7
- 8 | 7
- 8 ^ 7

### 不用四则运算求和
```js
 function sum(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    let newA = a ^ b;
    let newB = (a & b) << 1;
    return sum(newA, newB);
 }
```

### Typescript 中的 typeof 和 keyof


### Typescript 的 , , , , ，并集

- Omit<> 省略
- Pick<> 子集
- Partial<> 可选
- Required<> 必填
- ReadOnly<> 只读
- 交叉类型 T & K
- 联合类型 T | K

### HTTPS 的缓存（强缓存、协议缓存）