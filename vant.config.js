module.exports = {
  name: 'cbc-ui',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/',
    },
  },
  site: {
    title: '彩贝云前端组件库',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'cby-workbench',
            title: '工作台'
          },
          {
            path: 'cby-function-center',
            title: '功能中心'
          },
          {
            path: 'cby-profile',
            title: '个人中心'
          },
          {
            path: 'cby-change-mobile',
            title: '更改手机号'
          }
        ],
      },
      {
        title: 'UI组件',
        items: [
          {
            path: 'cby-ui-icon',
            title: 'Icon'
          }
        ]
      }
    ],
  },
};
