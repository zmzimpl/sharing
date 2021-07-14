# 复习知识点


# 继承
- 原型链继承
```js
    function Parent() {
        this.names = ['Jim', 'Tom'];
    }
    Parent.prototype.getNames = function() {
        console.log(this.names);
    }
    function Child() {}
    Child.prototype = new Parent();

    const c1 = new Child();
    c1.names.push('Ming');
    c1.getNames();
    const c2 = new Child();
    c2.getNames();
    // 缺点，引用属性会被所有实例共享

```
- 借用构造函数继承
```js
    function Parent() {
        this.names = ['Jim', 'Tom'];
    }
    Parent.prototype.getNames = function() {
        console.log(this.names);
    }
    function Child() {
        Parent.call(this);
    }
    const c1 = new Child();
    const c2 = new Child();
    c1.names.push('Ming');
    console.log(c1.names);
    console.log(c2.names);
    c1.getNames();  // 报错

    // 缺点， 方法不能被继承
```
- 组合继承
```js
    function Parent() {
        this.names = ['Jim', 'Tom'];   
    }
    Parent.prototype.getNames = function() {
        console.log(this.names);
    }
    function Child() {
        Parent.call(this);
    }
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
    const c1 = new Child();
    const c2 = new Child();
    c1.names.push('Ming');
    c1.getNames();
    c2.names.push('anby');
    c2.getNames();

    // 缺点，父函数需要被调用两次

```
- 寄生组合继承
```js
    function Parent() {
        this.names = ['Jim', 'Tom'];   
    }
    Parent.prototype.getNames = function() {
        console.log(this.names);
    }
    function Child() {
        Parent.call(this);
    }
    function Fn() {}
    Fn.prototype = Parent.prototype;    // TODO 这里要注意
    Child.prototype = new Fn();
    Child.prototype.constructor = Child;
    const c1 = new Child();
    const c2 = new Child();
    c1.names.push('Ming');
    c1.getNames();
    c2.names.push('anby');
    c2.getNames();

```

# js 基本类型
> 函数使用typeof得到function
null使用typeof得到object

- number
- boolean
- string
- undefined
- null
- object
- symbol
- bitint


# 普通函数和箭头函数的区别
- 箭头函数没有自己的 this, this 指向外层执行环境上下文
- 箭头函数不能作为构造函数使用，没有prototype， 不能被实例化
- call, apply, bind 无法改变箭头函数的this
- 箭头函数没有自己的 arguments

# call, apply, bind 的区别
- 三者都可以用来改变函数的执行上下文， call 和 apply 在被调用的时候就会直接执行函数， bind是返回一个改变了执行上下文之后的函数
- call 和 apply 的区别， call 传递多个参数， apply 则是第二个参数传递数组
- bind 是传递多个参数

# 手写 call, apply, bind
- call
```js
    Function.prototype.myCall = function(ctx) {
        if (typeof this !== 'function') {
            throw new TypeError('Error');
        }
        ctx = ctx || window;
        ctx.fn = this;
        let rs = null;
        const args = [...arguments].slice(1);
        rs = ctx.fn(...args);
        delete ctx.fn;
        return rs;
    }
```

- apply
```js
    Function.prototype.myApply = function(ctx) {
        if (typeof this !== 'function') {
            throw new TypeError('Error');
        }
        ctx = ctx || window;
        ctx.fn = this;
        let rs = null;
        if (arguments[1]) {
            rs = ctx.fn(...arguments[1]);
        } else {
            rs = ctx.fn();
        }
        delete ctx.fn;
        return rs;
    }
```

- bind
```js
    Function.prototype.myBind = function(ctx) {
        if (typeof this !== 'function') {
            throw new TypeError('Error');
        }
        const _this = this;
        const args = [...arguments].slice(1);
        return function F() {
            const bindArgs = [...arguments];
            if (this instanceof F) {
                return new _this(...args, ...bindArgs);
            }
            return _this.apply(ctx, args.concat(bindArgs));
        }
    }
```

# 变量提升、函数提升

- 首先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。
```js
console.log(foo);

function foo(){
    console.log("foo");
}

var foo = 1;
// 输出函数
```

# 手写 节流、防抖
- 节流，第一次立即执行
```js
    function throttle(fn, ms, immediate) {
        let timeoutId;
        let startTime = (immediate ? Date.now() - ms : Date.now());
        return function() {
            const currentTime = Date.now();
            const remainning = ms - (currentTime - startTime);
            const ctx = this;
            const args = arguments;
            if (remainning <= 0) {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
                fn.apply(ctx, args);
                startTime = Date.now();
            } else if (!timeoutId) {
                timeoutId = setTimeout(function() {
                    timeoutId = null;
                    fn.apply(ctx, args);
                    startTime = Date.now();
                }, ms)
            }
        }
    }
```

- 防抖
```js
function debounce(fn, ms) {
    let timeout;

    return function () {
        const ctx = this;
        const args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            fn.apply(ctx, args)
        }, ms);
    }
}

```

# 手写深拷贝（考虑循环引用问题）
```js
    function deepClone(target, map = new Map()) {
        if (typeof target === 'object') {
            const isArray = Array.isArray(target);

            let cloneTarget = isArray ? [] : {};

            if (map.get(target)) {
                return target;
            }
            map.set(target, cloneTarget);

            for(const key in target) {
                cloneTarget[key] = deepClone(target[key], map);
            }
            return cloneTarget;
        } else {
            return target;
        }
    }
```
# JS中flat—数组扁平化

# 能不能实现数组map方法 ?
```js
    Array.prototype.myMap = function(fn) {
        const _this = this;
        for (const key in _this) {
            
        }
    }

```

# 能不能实现数组reduce方法 ?

# 手写 reserve
```js
var reverseString = function(s) {

    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        const temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        left++;
        right--;
    }

    return s;
};
```

# 千分号

# repeat 方法，每三秒调用一次，自动调用4次

# TS 高级类型

# 手写撤销、重做

# loadash 的 get 方法，按照路径获取值

# 手写发布订阅模式

# css 实现开关样式，滑块位移，一个dom实现
https://codepen.io/ashleynolan/pen/wBppKz
```css
.switch-checkbox {
  display: none;
}

.toggle--btn {
  display: block;
  margin: 0 auto;
  position: relative;
  height: 70px;
  width: 125px;
  border-radius: 70px;
  border: 5px solid #1c1c1c;
  background-color: #3c4145;
  font-size: 1.4em;
  cursor: pointer;
  transition: all 350ms ease-in;
}

.toggle--btn::before {
  background-color: #fff;
  border: 5px solid #e3e3c7;
  position: absolute;
  top: 2px;
  left: 4px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  transition: all 0.5s;
  content: "";
  display: block;
}

.switch-checkbox:checked + .toggle--btn {
  background-color: #9ee3fb;
  border: 5px solid #86c3d7;
}
.switch-checkbox:checked + .toggle--btn::before {
  left: 56px;
}
```
# 浏览器缓存的理解（强缓存、协商缓存）

- Memory Cache
- Service Worker Cache
- HTTP Cache
- Push Cache

# HTTP， HTTP2， HTTP3，队头阻塞

# HTTP Header

# Event Loop

# TCP 三次握手

# TCP 和 UDP 的区别 和应用场景

# for...in, for...of

# 最大字序和（最大连续项和）

# 网络优化

# 回流，重绘

- 回流：修改 dom 的 宽，高，隐藏元素
- 重绘： 修改dom的样式

- 避免一个属性一个属性的修改样式
- 将 dom 离线化

# XSS 和 CSRF

- XSS 跨站脚本攻击，防范方法：
    - 对脚本标签进行过滤
    - 对文本进行转义
    - 
- CSRF 跨站伪造请求攻击，防御方法：
    - 设置 Secure 和 HttpOnly 属性
    - 后台验证 Header Referer
    - 请求头中加自定义属性进行验证，如 token

# css
- 优先级
- fixed, sticky
- 清除浮动
- 水平垂直居中
- flex
- https://mp.weixin.qq.com/s/DcwU4JfUZ5qjfgydL1b9_A#at


# BFC 块级格式化上下文

# 从 url 到页面渲染的整个过程

# 快排

# 二分

# 合并两个有序数组




# instanceof 原理

# async/await的运行机制

# 不用四则运算求和

# Canvas 基本使用

# Rxjs 运算符使用

# MVC, MVVM

# 行合并处理

# localStorage 和 SessionStorage 的区别

# 首屏加载慢的优化

# 状态码

# es6 新特性

# 两个大数相加

# 隐式转换

# Promise 

# http头设置什么可以用来获取用户ip地址？

# 柯里化

# 正则基本使用
# node 模型驱动

# History API 和 Hash 

# React 声明周期，Hooks 的用法

# React 和 Angular 对比

# Angular 生命周期

# 组件封装原则

# 有什么建议吗？
