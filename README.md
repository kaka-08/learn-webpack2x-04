webpack-dev-server + DevServer学习 01
=====================================
不用另外配置express
-------------------------------------------


#1 npm install webpack-dev-server --save-dev<br />
#2 配置 devServer：{}<br />
#3 webpack-dev-server --open <br />
此时会发现会自动打开浏览器，并且修改代码时候，页面及时刷新，不需要手动刷新页面<br />
#4 在package里面如此配置  "scripts": { "start": "webpack-dev-server" }  执行npm start命令   <br />
同3的唯一区别是 不会自动打开浏览器
