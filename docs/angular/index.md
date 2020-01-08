* 路由不适用# 报错  
解决: 在app.modules中添加provider, locationStrategy  
### 架构  
模块  
根模块  AppModule  
declarations: 组件指令管道  
exports:可用于其他模块的组件,declarations的子集  
providers: 服务  
bootstrap: 启动  
组件, 模板, 元数据, 数据绑定, 指令, 服务, 依赖注入, 动画, 表单,  
事件, http, 生命周期钩子, 管道, 路由器, 测试  
### 路由  
ng new router --routing 生成带路由的项目  
Routes配置  
RouterOutlet  占位  
Router  路由对象  
RouterLink 链接  
ActivateRoute 当前激活的路由,保存url中的参数  
this.router.navigate()  
通配符** , 404, 放在路由最后面  
#### 查询参数中传递的数据  
```html
<a [routerlink]="['/abc']" [queryParams]="{id:1}"></a>
```
```js
routerInfo:ActivaterRoute
this.routerInfo.snapshot.params
```
路由路径中传递数据  
```html
<a [routerlink]="['/abc', 1]"></a>
```
参数订阅,自身路由到自身时使用  
this.ourterInfo.params.subscribe((params:Params)=>{})  
路由配置中的data参数  
this.outerInfo.snapshot.data[0]['a']  
重定向路由  
路由配置中写{path: 'xx', redirectTo: '/home', pathMatch: ''}  
pathMatch: full: 必须为'xx', prefix: 以xx开头的都可以  
子路由: children  
[routerLink]="./"  ./表示当前路由下  
辅助路由:  
```html
<router-outlet name="aux"></router-outlet>
{path: 'xxx', component: xxx, outlet: 'aux'}
[routerLink]="[{outlets: {aux: 'consult'}}]"
[routerLink]="[{outlets: {aux: 'null'}}]"
```
primary属性指定主路由  
* 路由守卫  
canActive: 处理路由导航到某路由的情况, 如鉴权  
canDeaActivate: 处理从当前路由离开的情况  
Resolve: 路由激活前获取路由数据  
* 依赖注入  
对象A依赖对象B, 对象A不需要去实例化对象B, 只需要声明自己需要B  
控制反转: 实现了控制反转的框架叫做ioc容器  
吧依赖的控制权从代码的内部转移到外部  
控制反转是实现依赖注入的手段  
只有声明了@injectable装饰器才能注入其他服务  
@Component等都是@Injectable的子类  
* 提供器  uesProvider  useFactory useValue  
* 观察者模式  
对象间一对多的依赖关系, 当一个对象的状态发生改变的时候,所有的依赖他的对象都会得到通知  
Observable: 一组值或事件的集合  
Observer: 一个毁掉函数的集合  
Subscription 用于取消订阅  
operaters: 操作符,纯粹的函数   

* 模板本地变量  
* 输入属性
子组件属性@Input,在子组件的选择器上加加[attr]=  
* 输出属性  
子组件中@Output  
searchResult:EventEmitter<泛型>=new EventEmitter();  
this.searchResult.emit(attr)  
在父组件中  
(searchResult)="searchHandler($event)"  
在父组件的class中  
searchHandler(attr) {}  
* 中间人模式  
父组件作为中间人在子组件传递消息  
##### 钩子函数胡  
组件初始化调用的钩子  
1. constructor  
2. ngOnchanges: 只有有输入属性才会调用, 父组件初始化自组件的输入竖向,变量改变才会触发,引用度意向改变不会触发 
3. ngOnInit: 初始化路基有输入属性,就写在ngOnInit中  
4. ngDoCheck  
5. ngAfterContentInit 投影内容初始化  
6. ngAfterContentChecked  投影内容变更检测 
7. ngAfterVirewInit 视图初始化  
8. ngAfterViewChecked 视图变更检测  
组件变更检测,只要有任何变化,check都会调用  
ngOnChanges  
ngDocheck  
ngAfterContentChecked  
ngAfterViewChecked   
变更检测,任何组件发生改变,整个组件树都会检查  
ngDoCheck  
鼠标点击:键盘事件,属性改变都会触发  
* @ViewChild('child1')  
child1:Child1Component  
子组件的模板变量  
* view钩子  
子组件初始化->子组件变更检测->父组件初始化->父组件变更检测  
初始化只会调用一次,之后都是变更检测  
angular禁止组件组装好后再更新视图, 不能再viewInit中改变视图, 要改变可以加一个setTimeOut,  
viewchecked一样  
* 投影  
ng-content指令,再运行时动态的改变组件的内容  
<ng-content></ng-content>  
多个投影,用一个class作为标志  
##### 模板式表单和响应式表单  
FornsModule  ngForm  ngModel  ngModelGroup  
ReactiveFormsModule
##### 数据绑定
插值表达式{{}}  
属性绑定 []  
事件绑定 ()  
[class.spacial]  
[attr.colspan]  
[style.color]  
[(ng-model)]  
*ngIf  
[ngSwitch]  
*ngFor  
* moduleId 用于解析样式表和模板的对应路径,只能在commonJs中使用,设置后从当前的component的ts文件开始查找styleUrls  
* transform(array,field,keyword)  
* html属性和dom属性  
html属性值指定初始值, dom value property是当前值  

