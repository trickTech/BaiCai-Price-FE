#! /bin/bash

echo "开始打包"
npm run build

echo "开始上传"
scp -r dist/* root@115.159.122.89:/home/wwwroot/vegetable.zhangmengke.cn/
