* 常用命令  
git config --global core.autocrlf false   保持原来的换行  
git checkout -b test  创建并切换新分支  
git checkout test  切换分支  
git push -u origin test 加-u后,可用git push代替git push origin  
git branch --set-upstream-to=origin/test  建立本地到远程的连接  
git add .
git commit -m 'xxx'  
git push origin test  
git push origin test1:test2  
git reset --hard a580  
git status  
git log  
git clone -b dev  xxx.git  
git pull --rebase origin xxx  
git branch -a  查看远程分支  
git push origin :test  //删除远程分支  
git branch  查看本地  
git branch -D test  删除本地分支  
* gitignore配置  
'/' 表示目录  
'*' 匹配多个字符  
'?' 匹配单个字符  
'[]' 单个字符的匹配列表  
'!' 表示不会略匹配到的文件或目标  
由上到下匹配,前面的规则大后面就不匹配  
在rebase过程中,有时会有conflict,这是git会停止rebase让用户解决冲突,  
解决完后,用git add更新, 继续用git rebase --continue  
