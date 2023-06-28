#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 放置 .nojekyll 以绕过 Jekyll 的处理。
echo > .nojekyll

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -B master
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://jocelynleeyr.github.io
# git push -f git@github.com:jocelynleeyr/jocelynleeyr.github.io.git master

# 如果你要部署在 https://jocelynleeyr.github.io/training-talent
git push -f https://github.com/jocelynleeyr/training-talent.git master:gh-pages

cd -