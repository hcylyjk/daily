git流程
1.git config --global --list
如果没有配置，
git config --global user.name
git config --global user.email

git init 初始化仓库，创建.git版本库


git add .  ->刚开始提交是有很多文件，提交所有新文件和被修改的文件，不包括被删除文件
git add -A  ->提交所有改变

git commit -m '提交说明注释'  -》提交到本地仓库

git status  ->查看工作区是否被改动



master ->分支

git log ->查看本地提交的历史记录
git reflog ->查看简易的提交历史记录

HEAD ->最后一次提交

git reset --hard HEAD^ 退回上一个版本
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


在github上要是修改不了有可能是浏览器兼容问题




git branch 查看分支

分支相当于独立的文件，复制出独立的

如将原来的分离出，即创建一个分支，独立出来再去开发，尽量不要在原来的去修改


创建分支  git branch  分支名

切换分支  git checkout  分支名

解决合并冲突，找有关修改的伙伴商量

将创建的分支推到远程
git push origin 分支名


创建+切换分支



拉取远程的分支
git pull origin 分支名  会合并到当前的分支，不会拉取到新的分支，会有被当下来的分支
git pull 相当于从远程获最新的版本merge到本地
git fetch 从远程获取最新到本地，不会自动merge
git fecth origin 分支名  功能与git fetch


删除分支
git branch -d 分支名


忽略文件
.gitignore


npm i ->下载node_module