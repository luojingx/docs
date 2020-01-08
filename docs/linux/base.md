---
title: shell
---
### linux基本语法
* #! /bin/bash  约定是linux shell文件  
* ./test.sh  执行文件  
* 变量  大小写字母下换线开头,包含大小写字母数字下划线   
* 定义变量 a='123' 使用变量 $a  
* 字符串  string="abcd" 长度 ${#string}    
子字符串 ${string:1:4}

* 传参 $1, $2    
./test.sh 1 2 3
* 数组  array_name=(value1 ... valuen)    
valuen=${array_name[n]}  lengthn=${#array_name[n]}
* 基本运算  expr 是一款表达式计算工具 用expr来计算  
```sh
`expr 2 + 2` 
```
 +  - * / % = == !=
```sh
if [ $a == $b ]
then
   echo "a 等于 b"
```
* 关系运算符  
-eq相等  -ne不相等 -gt大于 -lt小于  -ge大于等于 -le小于等于
* 布尔运算符  
!非运算  -o或运算  -a与运算
* 逻辑运算符  
&&逻辑的 AND ||逻辑的 OR
* 字符串运算符  
=  !=  -z  -n  $
* 文件测试运算符 

* echo 指令用于字符串的输出
* printf 命令模仿 C  printf() 程序。
* test 命令用于检查某个条件是否成立  
```sh
if test $[num1] -eq $[num2]
```
```sh
if condition
then
    command1 
    command2
    ...
    commandN 
```
fi  末尾if倒过来 
if else 
if else-if else 
* for 循环   
```sh
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done
``` 
* while 语句  
```sh
while condition
do
    command
done
```
* case  
```sh
case 值 in
模式1)
    command1
    command2
    ...
    commandN
    ;;
模式2）
    command1
    command2
    ...
    commandN
    ;;
esac
```
跳出循环break 
跳出当前循环continue 

* 函数  
```sh
demoFun(){
    echo "这是我的第一个 shell 函数!"
}
echo "-----函数开始执行-----"
demoFun
echo "-----函数执行完毕-----"
```
return语句

* 函数参数  
funWithParam 1 2 3 4 5 6 7 8 9 34 73

* 输出重定向  
command1 > file1  将输出重定向到 file。
* 输入重定向  
command1 < file1  从file中输入
* 文件包含  import  
#使用 . 号来引用test1.sh 文件 
. ./test1.sh