* HTML4基于SGML(更古老), 要写DTD  
HTML5不基于SGML, 不需要写DTD, 到时要用Doctype来约束浏览器的行为  
* @import是css语法, link是HTML标签,  
@import在页面加载完成加载,  
link没有兼容性问题, @import css2.1+  
link引入的样式权重大鱼@import  
*FOOC 文档样式短暂失效  
原因: 样式加载在html加载之后  
解决: 把样式放在head中  
清楚浮动  
clear:both-> 增加无意义的标签  
overflow: hidden-> 隐藏超出部分  
:after->推荐使用  
父元素设置高度  
overflow:auto->浏览器会自动设置高度,必须定义width,不能定义height, 会产生滚动条
##### css3  
text-shadow, 渐变, border-radius, box-shadow, box-sizing, transition ,  
animation, @viewport 媒体查询, tansform, 2D, 3D转换 
* 标签盒子  宽高=内容区  
IE盒子  宽高 = 内容+border+内边距   
box-sizing: 宽高 = 内边距+border+内容  
* important >内敛> id > class > 元素 = 伪元素  
* display:inline-block  不显示间隙  
1. 子元素写在一行
2. 父元素的font-size设置为0  
* ::before  这种写法是css3为了区分为元素和伪类设置  
:hover 伪类  

* 用偶数字体多  
ie6会把13px字体渲染成14px  
 ##### 选择器权重  
 important  10000  
 内敛  1000  
 id 100  
 类  10  伪类  属性  
 元素  1  
 通用*  0  

* flex  
```css
flex-direction
flex-wrap 换行
flex-flow
justify-content
align-items  交叉轴对齐
align-content 多根轴线对齐
```
```css
flex-grow  放大
flex-shrink  缩小
flex-basis: 350px
flex: auto none  默认0 1 auto
align-self  可覆盖aligin-items
```
*grid  
grid-template-rows  grid-template-columns  
值是每一列/行的的宽
* 页面布局  三栏布局  
float  flex  absolute table-cell  grid  

