---
title: api
---
### 数组所有api  
Array.of(8, 5) //[8,5] 参数转化为数组  
Array.from  //把类数组对象转化为数组  
Array.isArray  
* Es5之前判断数组的方法  
```js
var a=[]  
a instance Array  
a.contructor===Array  
Array.prototype.isPrototypeOf(a)  
Object.getPrototypeOf(a)===Array.prototype  
Object.prototype.toString.apply(a)==="[Object Array]"  
var a = {
	__proto__:Array.prototype
}
//用前4中方法判断a是否是数组都是true
Array.isArray(a)=false
```
* 改变数组自身值得9中方法   
pop, push, reverse, shift, unshift, sort, splice, copywithin, fill  
* 不改变自身值得9种方法  
concat, join, slice, toString, toLocaleString, indexOf, lastIndexOf, includes  
* 遍历方法12个  
forEach, every, some, filter, map, reduce, reduceRight从右向左, entries,  
find/findIndex, keys, values, Symbol.iterator  
### 字符串所有api  
##### String构造器的方法  
String.fromCharCode(65,66,67)  //"ABC"  
"口".codePointAt()  //119558  
String.fromCodePoint(119558)  //"口"  
String.raw()  //模板字符串标签函数  
```js
let name = 'louis'
String.raw("Hello \n {name}")  //"Hello \n louis"
String.raw({raw: 'abcd'},1,2,3) //"a1b2c3d"
```
##### String.prototype  
字符串方法都不会改变原字符串  
str.charAt(index)  //返回指定位置的字符串  
str.charCodeAt(index)  //返回指定位置的字符unicode  
str.concat(str1, str2, ...)  //"A".concat("B", "c") //"ABC"  
indexOf, lastIndexOf   
str.localeCompare  //比较字符串, 指定字符串在原字符串前面返回-1,相同 0, 后面 1  
str.match //返回结果数组  
str.search(reg)  //会将字符串参数转化为正则  
slice(start, end)  
split(sep, limit) //limit限定返回的数组长度  
substr(start, length)  
substring(index1, index2)  //两个索引之间的字符串  
toLocaleLowerCase  
toLocaleUpperCase  
toLowerCase  
toUpperCase  
toString  
valueOf 返回字符串本身  
trim()  去除首尾空白  
includes  (es6)  
includes(substr, [position])  
endswitch  //以什么结尾  
normalize()  按照指定的unicode将字符串规则化  
repeat(n)  返回新字符串, 将原字符串重复n次  
startsWith   
Html有关的方法  
anchor 创建一个锚标签  
link: 创建一个a标签  

### 对象的所有API
Object.prototype.constructor===Object  //true  
Object.prototype.toString()  
Object.prototype.toLocaleString()  
valueOf()  //返回基本类型表示的this值,无法用基本数据类型表示返回this  
hasOwnProperty(prop)  //继承而来的返回false  
isPrototypeOf(obj)  
propertyIsEnumerable(prop)  //属性是否可以被for..in遍历  
value  
writable  
enumerable  
configurable  
set()    
get()  
Object.defineProperty(obj, prop, desctriptor)  
Object.defineProperties(obj, props)  
Object.getPrototypeOf(obj)  
Object.create(obj, desc)  //创建新对象  
Object.getOwnPropertyDescriptor(obj, prop)  
object.getOwnPropertyDescriptors(obj)  
Object.getOwnPropertyNames(obj)  
//返回所有的key, 不论是否可枚举  
//object.keys()返回可枚举的  
Object.preventExtensions(obj)  (es5)  //禁止扩展对象  
Object.isExtensible(obj)  
Object.seal(obj)  //不可配置  
Object.isSeal(obj)  
Object.freeze(obj)  //永远不能修改  
Object.isFrozon(obj)  
Object.keys(obj)  //返回可枚举的  
* es6中的object  
Object.is(value1, value2)  
//相当于===, +0不等于-0, NaN等于NaN  
Object.assign(target, ...sources)  
Object.getOwnPropertySymbols(obj)  
Object.setPrototypeOf(obj, prototype)  
