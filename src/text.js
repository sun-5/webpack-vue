
/*
这是Node中向外暴露成员的方式
module.exports = {}

在ES6中，通过规范的形式，规定了ES6中如何导入和导出模块
在ES6中导入模块，使用 import 模块名称 from '模块标识符'    import '表示路径'

在ES6中，使用export default 和  export 向外暴露成员：


在Node 中使用 var 名称 = require('模块标识符')
module.exports 和 export 来暴露成员

*/
export default{
    name:'zs',
    age:20
}
// export var  title='你好'
export var  title={a:'你好1'}
export var  aaa={a:'你好2'}
/*
export default 向外暴露的成员可以用任意变量来接受
在一个模块中，export default只允许向外暴露一次
在一个模块中，可同时使用 export default 和 export  向外暴露成员
注意：export可以向外暴露多个成员,同时如果某些成员，我们在import时候，不需要则不再{}定义
注意：使用export导出的成员，如果就想换个名称来接收，可以使用as来起别名
*/