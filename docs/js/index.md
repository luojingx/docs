---
title: js
---
* apply 需要遍历数组,再调用call
* __proto__ 对象的属性  
  prototype 函数的属性  
  函数也是对象  
```js
  function A() {}
  var a=new A()
  A.prototype === a.__proto__
  A.__proto__ === Function.prototype
  Function.prototype.__proto__ === Object.prototype
  Object.prototype.__proto__ === null
```
  原型链  
  __proto__属性组成的链条  
  prototype是对象
 * http转态码  
100 continue,服务器将发送信息
200 成功  
202 接收请求,还未处理  
301  网页移到新位置  
302  临时重定向  
304  网页未修改过,使用缓存  
400 服务器无法理解请求格式,参数错误  
401 请求未授权, 服务器用户权限问题  
403 禁止访问  
500 服务器错误,通常是代码错误  
503 服务器暂时无法处理请求,可能在维护  
* 通用事件函数,兼容ie
 attachEvent 添加  
 detachEvent 删除  
 cancelBubble  阻止冒泡  
 event.returnValue = false 阻止默认事件  
 event.srcElement   event.target  
 window.event  event  
 * setInterval最先间隔 按照显示器刷新事件1s 60hz 1/16*1000=16.7ms
* 内存泄漏  
闭包  
意外的局部变量->(使用严格模式可解决)  
setInterval, setTimeout->清除定时任务  
mounted, created钩子中使用$on, 在beforeDestroy中使用$off解绑  
DOM对象属性引用对象, 设置为null  
DOM对象和js对象互相引用  
从内到外执行appendChild  
* 协议,域名, 端口相同  
##### 元素位置属性  
offsetTop 距页面顶部  
offsetLeft  距左边  
offsetWidth  元素宽度  width+padding+border  
offsetHeifht 元素高度  
scrollWidth  元素宽度  width+padding+溢出的尺寸(子元素溢出)  
scrillHeifht 元素高度  
clientWidth 元素宽度  width+padding 不含滚动条
clientHeifht  元素高度  
clientTop  元素边框+top  
clientLeft  
##### 常见的兼容性问题  
1. 浏览器默认样式不同(使用统一样式, reset.css)  
2. ie8不支持opacity, 用filter:alpha(opacity=60)  
3. ie8  background-size:cover  不支持, 使用filter:DXImage.....  
4. ie低版本不支持css3, 用ie-css3.htc  
5. addEventList attachEvent  removeEventListener  detachEvent  
6. ie event对象有x,y, 没有pageX, pageY  
7. ie6双边距bug, 浮动元素的间距加displa: inline  
##### jquery源码写的好的地方  
封装在自执行函数中, 防止全局污染  
传入window和undefined, 缩短查找  
jquery实现了链式调用  
jquery将一些原型属性封装在jqeruy.prototype赋值给jquery.fn  
* 内置对象  
Object, Array, String, Number, Boolean, Math, Date, RegExp, Error,  
Funtion, Arguments  
* 厷任务: 整体的js代码, setInterval, setTimeout  
微任务: promise, process.nextTick  
##### 严格模式 use strict
IE6,7,8,9不支持严格模式  
变量先声明后使用  
函数不能有同名参数  
不能使用with  
不能对只读属性赋值  
不能使用前缀0的八进制  
不能用delete删除变量  
禁止this指向windwo,this=undefined
#####  css的百分比属性  
基于父元素宽度: margin, padding, width, max-width, min-width, left, right, text-intent  
基于父元素高度: top, bottom , height, max-height,min-height  
基于当前字体大小计算: line-height  
基于line-height计算: vertical-align  
基于元素本身的宽高: background-position  
基于元素本身宽度: background-size  
##### http 无状态连接 
http协议建立在tcp基础上, 浏览器发送一个http请求, http通过tcp建立  
到服务器的连接通道, 当请求完毕,http会将tcp连接断开, 浏览器每次向  
服务器发送请求都会建立一个新的连接,请求结束,连接关闭,相应的的内容  
就释放了, 所以记不住任何状态是无状态连接,http不用关心tcp怎么发送  
消息, 这些都有tcp完成  
* 常见的http头部字段  
1. 通用字段  
Date  日期   
connection:keep-alive (http1.1新增)  
cache-control: 缓存  
2. 请求头  
Host 所在服务器  
Accept  
Accept0encoding: gzip  
Accept-language: zh-cn  
Content-type:Application/json; text/html  
3. 响应头  
content-encoding: gzip  
content-type  
Expires  
Etag  
##### SVG  
line: x1,y1, x2,y2,stroke, stroke-width  
rect: width, height, fill  
cicle: cx,cy,r  
ellipse: cx,cy,rx,ry  
polygon: points="0,0,1,1,2,2"  
polyline: points="0,0,1,1,2,2"  
path: d="M150 0 L75 200 L225 200 Z"  
text: x,y,fill  
##### canvas
ctx.drawImage(img,10,10)  
ctx.font, ctx.strokeText, ctx.fillText('hello',10,20)  
ctx.moveTo(0,0)  ctx.lineTo(200, 100)  ctx.stroke()  
ctx.fillStyle="#f00"  
ctx.fillRect(0,0,100,75)  
ctx=domcanvas.getContext("2d")  
* 正则  
前瞻: exp1(?=exp2) 查找exp2前的exp1  
负前瞻: exp1(?!exp2) 查找后面不是exp2的exp1  
后顾: (?<=exp2)exp1 查找exp2后面的exp1  
负后顾: (?<!exp2)exp1 查找前面不是exp2的exp1  
注:js没有后顾  
() 表示捕获分组  
(?:) 表示非捕获分组  
默认贪婪模式  
非贪婪模式: (*,+,?,{n}, {n,},{n,m})后面加?  
* 跨域  
1. jsonp  只支持get  
2. hash  window.onhashchange   页面A通过iframe嵌入要跨域的页面B  
3. postMessage  
B  window.postMessage(data, )  
A  window.addEventListener('message', )  
4. websocket   
ws.onopen  ws.onmessage  ws.onclose  
5. CORS  Access-Control-Allow-Origin  
*  AJAX  
XMLHttpRequest对象   
xhr.open  
xhr.send   
xhr.setRequestHeader    
xhr.onreadystatechange  
xhr.status  
xhr.responseText   
xhr.responesXML  
 0: 请求未初始化   
 1: 服务器连接已建立   
 2:请求接受   
 3: 请求处理中   
 * 事件  
 windwo->document->html->body  
 (html: document.documentElenet)  
 自定义事件: new Event('')
##### 隐式转换  
|value  | toNumber  |  toString  |  toBollean|
|-----  |-----      |-----       |  -----    |
|NaN    |NaN        |"NaN"       |false      |
|Infinity|Infinity|"Infinity"    |true       |
|[]     | 0         | ""         |true       |
|[1]    |1          |"1"         |true       |
|null   |0         |"null"       |false     |
|undefined|NaN     |"undefined"  |false     |  
|{}     |NaN       |"[Object Object]"|true   |
|function(){}|NaN   |"function(){}"  | true      |
==  转化为number, 是Object转化为原始值  
* async 加载完执行  
defer heml解析完执行  
* 优先级  
圆括号  ()  
成员访问  .  
需计算的成员访问  []  
new  带参数  new..()  
函数调用  ()  
new  无参数   new...  
从上到下依次减小  
*  创建对象  
1. var o={}  
2. var o=new Object()  
3. 构造函数  
4. var 0 = Object.create()
##### 隐式转换
加+ 号  
1. 判断是否是原始值, 是string执行字符串拼接,其他转化为number  
2. 不是原始类型转化为string  
3. 原始值没有string, 转为number
x==y 号
1. x,y为null, undefined,  返回true  
2. x或y为NaN 返回false  
3. x,y为string,numer,bollean 都转化为Number  
4. 结果只是原始值,抛出type error  
转化原始值  
1. 为原始值直接返回  
2. 不是原始值, 调用valueOf()
3. 调用valueOf()不是原始值, 调用toString()  
4. 结果不是原始值, 抛出type error  
原始类型  undefined, null, bollean, number, string, symbol  
对象值 Object  
基本包装类型  String, Number Bollean  
当调用string方法时, 先创建一个string对象, 然后销毁该对象,  
valueOf()  Date返回毫秒数, 其他返回自身  
* innerHtml,outerHtml  获取的时候相同, 设置的时候不同  
interText, outerText 获取的时候相同, 设置的时候不同  
##### 模块规范  
commonJS -- nodejs使用  
Amd -- requireJs  依赖前置  
Cmd -- seaJs 依赖就近  
Umd -- commonJs+requireJs 对平台进行判断使用  
##### javascript语言精粹  
保留字  
abstract boolean break byte case catch char class const continue  
debugger default  delete do double else enum export extends  false  
final  finally float for funtion goto if implements inport in   
instanceof int interface long natice new null package private  
protected public return short static super switch synchronized this  
throws trabsient true try typeof var volatile void while with  
* 糟粕  
eval 避免使用  
siwtch穿越,用break  
位运算符  性能低  
new Boolean() new Number()等,没什么用  
void 没什么用  

 

 
 
  