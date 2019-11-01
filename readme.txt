git流程
1.git config --global --list
git add .  ->刚开始提交是有很多文件，提交所有新文件和被修改的文件，不包括被删除文件
git add -A  ->提交所有改变

git commit -m '提交说明注释'  -》提交到本地仓库

git status  ->查看工作区是否被改动



master ->分支

git log ->查看本地提交的历史记录
git reflog ->查看简易的提交历史记录

HEAD ->最后一次提交


git reset --hard 版本号  ->回退到当前文档

git diff 文件名  ->查看该文件修改内容 (未提交的内容)


设置远程仓库地址   将本地与远程链接  全局设置
git remote add origin https://github.com/hcylyjk/gitlear.git


fetch ->更新的的地址

push ->将代码推送到

git remote -v ->查看fetch,push到的地址

git push -u origin master  


第一次要强推
git push -u -f origin master 


把远程的代码更新到本地
git pull


第一次开始的流程
git add .
git commit -m ''
git remote add origin  https://github.com/hcylyjk/gitlear.git
git push -u -f origin master




第二次开始的流程
git pull  先更新
git add .   暂存区 
git commit -m '注释'
git push  推送到远程


git clone https://github.com/hcylyjk/gitlear.git  克隆项目直接版本仓库
克隆之后正常操作，但要进入master才行





