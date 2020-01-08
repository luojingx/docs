处理分发需求,毁掉,事件,订阅发布比较合适  
处理流程性质的需求promise和generator比较合适  
rxjs结合了两种模式  
我们可以把一切的输入当做流来处理  
* 用户操作  
* 网络响应  
* 定时器  
* worker  
Rxjs 提供了各种api来创建数据流  
* 单值: of, empty, never  
* 多值: from  
* 定时: interval,timer  
* 从事件创建:fromEvent  
* 从promise创建:fromPromise  
* 自定义创建: create  
创建出来的数据流是一种可观察的序列,可以被订阅,可以做一些转换操作  
* 改变数据的形态: map, mapTo, pluck  
* 过滤一些值:filter,skip, first, lost, take  
* 时间轴上的操作: delay, timeout, throttle, debounce,  audit, bufferTime  
* 累加: reduce, scan  
* 异常处理: throw, catch, retry, finally  
* 条件执行: takeUntil, delayWhen, retryWhen, subscribeOn, observeOn  
* 转接: switch  
也可以对若干个数据流进行组合  
* concat: 保持原来的序列顺序连接两个数据流  
* merge: 合并序列  
* race: 预设条件为其中一个数据流完成  
* forkJoin: 预设条件为所有数据流完成  
* zip: 取个来源数据最后一个值合并为对象  
* combinelatest: 取个来源数据最后一个值合并为数组  
observable: 可观察序列,只出不进  
Observer:观察者,只进不出  
Subject: 可进可出可观察序列,可作为观察者  
Subscribtion: 订阅关系,取消订阅  
