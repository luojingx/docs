* 事件捕获  window=>div  
 事件冒泡  div>window
* viewport: 适配不同分辨率的屏幕, device-width, initial-scale
* 前端SEO  
1. meta中的title, description, keywords, 权重依次减小
2. 语义化的html标签
3. 重要内容不要用js
4. 图片加alt
5. 少用frame
6. 提高网站速度
* get, post, put, delete, head  
options: 获取当前url支持的请求方法
* 输入url到显示页面过程  
输入url-(url重定向-是否缓存读取-DNS域名解析获取服务器中的地址)->  
  创建TCP连接,三次握手->发送请求->接收请求->响应状态码->200->  
  如果DOCTYPE是html->解析html文档->构建DOM树->期间遇到img,js,css则下载文件->  
  css生成css规则树->合并dom树和css规则树为render树->  
  根据渲染树计算每个节点的信息->绘制页面->断开连接,四次挥手  
* 重绘,重排  
 repait重绘,元素外观改变,布局改变是发生  
 reflow重排,几何属性发生变化,浏览器要重新计算,如改变窗口大小,改变字体大小  
 reflow太频繁会影响性能
##### 优化网站  
1. 减少http请求  
(1) 简化页面  
(2) 合理设置缓存 
(3) 资源压缩合并  
(4) css雪碧图  
(5) base64转码  
(6) 图片懒加载  
2. js放在body底部  
3. css放在head中  
4. 减少不必要的http跳转
5. 避免重复请求  
6. lazyload JavaScript  
7. 异步执行inline脚本 
##### 代码优化  
减少重绘重排,减少作用域链查找

* 语义化: 用正确的标签做正确的事,便于浏览器/搜索引擎解析,便于代码阅读维护,  
header, footer, menu, article, nav, section  
* 浏览器内核包括  
渲染引擎,解析css, html,渲染页面到显示器  
js引擎, 解析js脚本, 实现网页动态效果  
常见内核  
trident  IE  
Gecko firefox  
webkit safari, chrome  
##### html5新增
拖放api  
语义化的标签  
音视频  
canvas  
svg  
地理定位  
本地存储 sessionStorage localStorage  
表单控件  calendar, date, time, email, url, search  
新技术  webworker, websocket  
移除元素  base, font, big, center, basefont, s, strike, tt, frame, frameset, noframes  
* WEB标准  
结构: XML1.0, XHTML 
表现: CSS  
行为: ECMAScript, DOM  
XHTML: 严格的html, 元素正确嵌套, 标签必须闭合, 标签必须小写, 必须有根元素  
 * html5离线存储  
 1. 原理: 用户没有连接因特网,正常访问站点应用  
 用户连接因特网,更新缓存文件  
 2. 原理: 新建一个.appcache文件离线缓存机制, 通过这个文件解析清单上的  
  存储资源,会像cookie一样存储,之后用户离线访问会通过离线存储数据显示  
 3. 如何使用: 在头部加menifest属性 , 在chche.menifest编码离线存储资源,  
 在离线转态操作window.applicationCache实现  
 4. 浏览器怎么加载   
 在线时, 浏览器发现头部有manifest, 会请求manifest文件, 下载相应的资源  
存储, 如果已经离线存储会直接使用离线存储加载页面, 问价没变不做任何处理, 文件  
改变, 重新下载文件存储  
* 改变页面布局的属性  
position, display, float, width, height, margin, padding,  top  
left,  right, bottom  
* 创建BFC   
float不是none  
postion不是static活relatice  
display值是inline-block, table-cell, flex, table-caption活inline-flex  
overflow不是visible  
解决的问题  
外边距重叠  
包含浮动(父元素高度问题)  
避免文字环绕  
在多列布局中使用BFC  
BFC是一个独立的布局环境, 其中的元素布局不受外界影响  
块盒盒行盒都会垂直的沿着器父元素的边距排列  
##### 常见的meta  
keywords, charset, description viewport, X-UA-Compatible,  
cache-control, expores, refresh  
预加载dns: link rel=dns-prefetch  
robots all文件被检索,链接被查询(默认)  
name 文件不被检索, 链接不被查询  
##### 表单提交文件类型  
1. form-data  
http请求中的multipart/form-data  
将表单中的数据处理为一条信息,以标签为单元,用分隔符分开  
2. x-www-form-urlencoded  
就是application/x-www-form-urlencoded   
键值对,入name=java&age=20  
3. raw  
任意格式文本 text,json,xml,html  

