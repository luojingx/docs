---
title: 源码
---
### package.json
   web-full-dev
### scirpts/config.js
### src/platforms/web/entry-runtime-with-compiler.js
   cached  闭包用来缓存函数结果,只计算一次    
   template->options.render = render, options.staticRenderFns = staticRenderFns->mount.call(this, el, hydrating)
### src/platforms/web/runtime/index
   Vue.prototype.__patch__ =patch   
   Vue.prototype.$mount->mountComponent(this, el, hydrating)
### src/core/index
   initGlobalAPI(Vue),挂载了几个变量,$isServer,__VERSION__,$ssrContext,FunctionalRenderContext
### src/core/instance/index
   声明Vue,执行this._init(options),原型对象挂载各种方法init,state,events,lifecycle,render,   
   先执行init,在执行mountComponent
### src/core/instance/init  
   initGlobalAPI>/global-api/index>声明Vue.options, 
```js
   vm.$options = mergeOptions(
   mergeOptions
   resolveConstructorOptions)
```
   构造子类的时候,Vue.extend方法会为Ctor添加一个super属性，指向其父类构造器 
##### 构造函数上的options来源 
   * ./runtime/index中   
   Vue.options.directives添加model,show属性  
   Vue.options.components添加Transition,TransitionGroup属性 
   */global-api/index 中   
   创建Vue.options以及给components中增加KeepAlive,给options增加filters,_base属性   
    如果父类的options改变,则把自身的superOptions替换为最新的,   
    如果自身的options改变,则把新添加的options属性添加到Ctor.extendOptions属性上,并调用mergeOptions   
    合并superOptions和extendOptions,最后返回合并的options   
#####  mergeOptions合并策略
   * normalizeProps  props转化为对象
   * normalizeInject  inject属性转化为对象
   * normalizeDirectives  自定义指令转化为对象的形式  
   mergeoptions方法是要合并构造函数options和传入的options这两个对象   
   当传入的options里有mixin或者extends属性时，调用mergeOptions方法合并mixins和extends里的内容到实例的构造函数options   
#####   钩子函数的策略
   1. child options上不存在该属性，parent options上存在,则返回parent上的属性。
   2. child和parent都存在该属性，则返回concat之后的属性
   3. child上存在该属性，parent不存在，且child上的该属性是Array，则直接返回child上的该属性,不是Array，则把该属性先转换成Array,再返回。
#####   props/methods/inject/computed的策略
  1. 如果parent options上没有该属性，则直接返回child options上的该属性
  2. 如果parent options和child options都有，则合并parent options和child options并生成一个新的对象。(如果parent和child上有同名属性，合并后的以child options上的为准)
#####   components/directives/filters的合并策略
   和上一种情况的类似  
#####   data和provide的策略
   第一种情况，当前调用mergeOptions操作的是vm实例（调用new新建vue实例触发mergeOptions方法）,如果新建实例时传入的options上有data属性，  
   则调用mergeData方法合并实例上的data属性和其构造函数options上的data属性  
   第二种情况，当前调用mergeOptions操作的不是vm实例（即通过Vue.extend/Vue.component调用了mergeOptions方法）    
   如果当前实例options或者构造函数options上有一个没有data属性，则返回另一个的data属性，如果两者都有，则同样调用   mergeData方法处理合并。  
   mergeData的逻辑是,如果child上没有,把parent中的添加到child上,如果都是对象,递归调用mergeData  



