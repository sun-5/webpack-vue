//在webpack构建的项目中 使用vue进行开发

/*
1.使用script 引入vue包
2.在index.html页面创建一个id为app 的div
3.通过new Vue 得到一个 vm 实例

在webpack中使用vue
cnpm i vue -S
*/
//import Vue from 'Vue' //不是最全的vue包  网页中导入的vue.js是最全的
//import默认导入的包为vue.runtime.common.js  阉割版 不全面
// 想用全面的
import Vue from 'Vue/dist/vue' 
//回顾 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性
//"main": "dist/vue.runtime.common.js",修改为dist/vue.js--最简单的方式【main属性指定了这个包在被加载时候，的入口文件】

// var login ={
//     template:'<h1>这是login组件，是使用html网页中形式创建出的组件</h1>'
// }
//1.导入login组件  
import login from './login.vue'
//默认webpack 不识别.vue 需要安装loader
//cnpm i vue-loader vue-template-compiler -D
//在配置文件中新增loader配置项{test:/\.vue$/,use:"vue-loader"}

var vm = new Vue({
    el: '#app',
    data: {
        msg: "123"
    },
    methods: {},
    // components:{//组件注册  不会覆盖div app可以放多个
    //     login
    // }
    render:c=> c(login) //完全覆盖div app其他内容
       
});

/*
总结：webpack 中如何使用vue：
1.安装vue包：cnpm i vue -S
2.由于在默认webpack 不识别.vue 需要安装loader
    cnpm i vue-loader vue-template-compiler -D
    在配置文件中新增loader配置项{test:/\.vue$/,use:"vue-loader"}
3.在入口文件 js中，导入vue模块， import Vue from 'vue'
4.定义一个 .vue的组件
5.使用import导入组件
6.入口文件js中创建vm实例  render:c=> c(login) render渲染组件
7.页面中创建一个id为app 的div 作为vm实例控制区域
*/

import a1,{title as b,aaa} from "./text"
console.log(a1,b,aaa)
