# http 请求相关

1. 浏览器遵循同源策略(协议、域名、端口都相同则为同源)，非同源有这样一些限制：
   - 不能读取或修改对方 DOM
   - 不能访问对方 Cookie、indexDB 和 localStorage
   - 限制 XMLHttpRequest 请求

# 跨域请求的响应一般会被浏览器所拦截，响应其实已经到达客户端了

- 跨域

1. jsonp
2. cors 设置一个 cors 头。允许 allow-origin
3. node 正向代理， ./api -> 同域的 node 服务上 -> ./api -> 前端，绕过浏览器
4. nginx 反向代理， proxy_pass
