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