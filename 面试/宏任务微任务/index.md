1. 两种任务

- 宏任务： 整体代码、setTimeout、 setInterval、I/O 操作
- 微任务： new Promise().then()

2. 为什么要引入微任务概念，之后宏任务可以吗？

- 宏任务 ，先进先出原则

3. 你了解 node 中的事件循环嘛？
   - node 中的事件循环和浏览器有什么区别？
     - 宏任务的执行顺序
     1. timer 定时器： 执行 setTimeout、 setInterval 的回调函数
     2. pending callback: 执行延时到下一个循环迭代的 I/O 操作
     3.
