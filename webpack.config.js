const path = require('path')

const webpack = require('webpack')//启动热更新第2步

const htmlWebpackPlugin = require('html-webpack-plugin')//导入生成内存中html 的插件

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry:path.join(__dirname,'./src/index.js'),//需要打包的文件
    output:{
        path:path.join(__dirname,'./dist'),//打包好的文件存放地址
        filename:'build.js' //打包好的文件名
    },
    devServer:{//dev-server 命令参数第二种形式，相对来说，这种方式麻烦一些
        open:true,//自动打开浏览器
        port:3000,//端口号
        contentBase: path.join(__dirname, "src"),//项目运行目录
        hot:true//启动热更新第1步
        
    },
    plugins:[//配置插件的节点
        new webpack.HotModuleReplacementPlugin(), //new 一个热更新 模块对象  启动热更新第3步  
        new htmlWebpackPlugin({//创建一个 生成内存中html页面的 插件
            template:path.join(__dirname,'./src/index.html'),//指定模板页面 生成路径
            filename:'index.html'//指定生成页面的名称
        }), 
        new VueLoaderPlugin()
    ] ,
    module:{ //这个节点用于配置所有第三方模块 加载器
        rules:[ //所有第三方模块匹配规则  从右到左调用loader
            {  test:/\.css$/,use:['style-loader','css-loader'] }, //配置处理 .css文件的第三方模块规则
            {  test:/\.less$/,use:['style-loader','css-loader','less-loader'] },
            {  test:/\.scss$/,use:['style-loader','css-loader','sass-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader?limit=16110&name=[hash:8]-[name].[ext]" },//limit给的值大于图片 单位byte，会进行base64编码 bytes
            {  test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},// 处理 字体文件的 loader规则
            { test:/\.js$/, use: "babel-loader", exclude:/node_modules/ }, // 编译高级js语法loader  排除node_modules目录中的js
            {test:/\.vue$/,use:"vue-loader"}
        ]
    },
    resolve:{
        alias:{//修改 vue 包被导入时候的路径
            'vue$':'vue/dist/vue.js'
        }
    }
    

   
}