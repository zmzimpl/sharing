# Promise
> - 抽象概念： JS 中进行异步编程的新方案
> - 具体表达： 
>   - 从语法上来说： Promise 是一个构造函数
>   - 从功能上说： Promise 对象是用来封装一个异步操作并可以获取其效果。

## Promise 的状态
- pending：初始状态，不是成功或失败状态
- fulfilled： 意味着操作成功完成
- rejected： 意味着操作失败

## Promise 状态的改变
- pending → fulfilled
- pending → rejected

## Promise 基本使用
```js
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            const time = Date.now();
            if (time % 2 == 0) {
                resolve('success, time=' + time);
            } else {
                reject('fail, time=' + time);
            }
        }, 0);
    });

    p.then(
        (value) => {
            console.log(value);
        },
        (reason) => {
            console.log(reason);
        }
    );

```