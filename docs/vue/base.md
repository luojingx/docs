---
title: 基础
---
### vue语法 
* v-html="message"    
HTML 属性中的值应使用 v-bind 指令。
* v-bind:class="{'class1': use}"   use: false
* v-bind:id="'list-' + id"
* v-if="seen" 
seen: true
* v-bind:href="url"  url: 'http://www.runoob.com'
* v-on:click="doSomething"
* v-on:submit.prevent="onSubmit"
* v-model="message"  message: 'Runoob!'
* 过滤器 
```js
{{ message | capitalize }}  {{ message | filterA | filterB }}   
```
过滤器是 JavaScript 函数，因此可以接受参数 
```js
{{ message | filterA('arg1', arg2) }}
```
##### 缩写
```js
:href="url"   
@click="doSomething" 
```
* v-else 、v-else-if 必须跟在 v-if 或者 v-else-if之后。
* v-show="ok"
* v-for="site in sites"  
```js
v-for="(value, key) in object" 
v-for="n in 10" 
```
* computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter 
* vm.$watch
* v-bind:style="styleObject"
* props: ['todo'],v-bind:todo="item"   
子组件 props 属性声明时，使用小驼峰或者中划线写法都可以,子组件的模板使用从父组件传来的变量时，需要使用对应的小驼峰写法
* $on(eventName) 监听事件
* $emit(eventName) 触发事件  
父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件

##### 指令的钩子函数
* bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
* inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
* update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
* componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
* unbind: 只调用一次， 指令与元素解绑时调用。

##### vue-router
```js
const routes = [{ path: '/foo', component: Foo },]
const router = new VueRouter({router})
new Vue({router})
<router-link to="home">Home</router-link>
<router-link :to="'home'">Home</router-link>
<router-link :to="{ path: 'home' }">Home</router-link>
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
replace  append  tag  active-class   exact-active-class  event
```
##### 过渡 & 动画
```js
<transition name = "nameoftransition">
   <div></div>
</transition>
```
##### 混入 (mixins)定义了一部分可复用的方法或者计算属性
##### Vue全局API
* Vue.extend()  
* Vue.nextTick（）
* vue.set
* vue.delete
* Vue.directive
* Vue.filter
* vue.mixin
* propsData
* watch
* parent

Vue.extend使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。   
extend用于创建vue实例   
mixins可以混入多个mixin，extends只能继承一个   
mixins类似于面向切面的编程（AOP），extends类似于面向对象的编程   
优先级Vue.extend>extends>mixins   
AST  抽象语法树   
使用UglifyJS来压缩代码，bable对代码进行转换，ts类型检查，语法高亮等，实际这背后就是在对JavaScript的抽象语法树进行操作   

