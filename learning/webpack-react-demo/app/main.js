// 你可能已经把你的根组件引入了
// 组件可能用了 react-router
var RootComponent = require('./RootComponent.jsx');
// 当你渲染它的时候，让它赋值给一个变量
var rootInstance = React.render(RootComponent(), document.body);
// 然后在文件的最底部复制粘帖
if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      // 帮助 React Hot Loader 识别出页面中的根组件
      return [rootInstance];
    }
  });
}
