// 引入组件
import helloWorld from '../../src/hello';

// 提供 install 安装方法，供按需引入
helloWorld.install = function (Vue) {
    // 注册组件
    Vue.component(helloWorld.name, helloWorld)
}
// 暴露组件
export default helloWorld