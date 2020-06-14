import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import themePluginConfig from './themePluginConfig';
// import proxy from './proxy';
import webpackPlugin from './plugin.config';

const { pwa } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION, REACT_APP_ENV } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins = [
  ['umi-plugin-antd-icon-config', {}],
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'zh-CN',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];

if (isAntDesignProPreview) {
  // 针对 preview.pro.ant.design 的 GA 统计代码
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push([
    'umi-plugin-pro',
    {
      serverUrl: 'https://ant-design-pro.netlify.com',
    },
  ]);
  plugins.push(['umi-plugin-antd-theme', themePluginConfig]);
}

export default {
  plugins,
  hash: true,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
            },
            {
              name: 'xiuXing',
              icon: 'table',
              routes: [
                { name: 'xiuXingRiZhi', path: '/xiuXingRiZhiList', component: './xiuXingRiZhiList/XiuXingRiZhi' },
                { name: 'cangKu', path: '/cangKuList', component: './cangKuList/CangKu' },
                { name: 'sheDing', path: '/sheDingList', component: './sheDingList/SheDing' },
                { name: 'fuLu', path: '/fuLuList', component: './fuLuList/FuLu' },
                // { name: 'renWu', path: '/renWuList', component: './renWuList/RenWu' },
                { name: 'renWu', path: '/renWu', component: './renWu/RenWu' },
                { name: 'diMing', path: '/diMingList', component: './diMingList/DiMing' },
                { name: 'zongMen', path: '/zongMenList', component: './zongMenList/ZongMen' },
                { name: 'jiGou', path: '/jiGouList', component: './jiGouList/JiGou' },
                // { name: 'faShu', path: '/faShuList', component: './faShuList/FaShu' },
                { name: 'faShu', path: '/faShuList', component: './faShu/FaShu' },
                // { name: 'gongFa', path: '/gongFaList', component: './gongFaList/GongFa' },
                { name: 'gongFa', path: '/gongFaList', component: './gongFa/GongFa' },
                // { name: 'kuiLei', path: '/kuiLeiList', component: './kuiLeiList/KuiLei' },
                { name: 'kuiLei', path: '/kuiLeiList', component: './kuiLei/KuiLei' },
                // { name: 'lingCai', path: '/lingCaiList', component: './lingCaiList/LingCai' },
                { name: 'lingCai', path: '/lingCaiList', component: './lingCai/LingCai' },
                // { name: 'lingDan', path: '/lingDanList', component: './lingDanList/LingDan' },
                { name: 'lingDan', path: '/lingDanList', component: './lingDan/LingDan' },
                // { name: 'lingQi', path: '/lingQiList', component: './lingQiList/LingQi' },
                { name: 'lingQi', path: '/lingQiList', component: './lingQi/LingQi' },
                // { name: 'yaoShou', path: '/yaoShouList', component: './yaoShouList/YaoShou' },
                { name: 'yaoShou', path: '/yaoShouList', component: './yaoShou/YaoShou' },
                // { name: 'zhenFa', path: '/zhenFaList', component: './zhenFaList/ZhenFa' },
                { name: 'zhenFa', path: '/zhenFaList', component: './zhenFa/ZhenFa' },
                // { name: 'qiTaLingWu', path: '/qiTaLingWuList', component: './qiTaLingWuList/QiTaLingWu' },
                { name: 'qiTaLingWu', path: '/qiTaLingWuList', component: './qiTaLingWu/QiTaLingWu' },
                // { name: 'jingJie', path: '/jingJieList', component: './jingJieList/JingJie' },
                { name: 'jingJie', path: '/jingJieList', component: './jingJie/JingJie' },
                // { name: 'pinJi', path: '/pinJiList', component: './pinJiList/PinJi' },
                { name: 'pinJi', path: '/pinJiList', component: './pinJi/PinJi' },
                // { name: 'xiaoShuo', path: '/xiaoShuoList', component: './xiaoShuoList/XiaoShuo' },
                { name: 'xiaoShuo', path: '/xiaoShuoList', component: './xiaoShuo/XiaoShuo' },
                // { name: 'baiJiaXing', path: '/baiJiaXingList', component: './baiJiaXingList/BaiJiaXing' },
                { name: 'baiJiaXing', path: '/baiJiaXingList', component: './baiJiaXing/BaiJiaXing' },
                // { name: 'ziDian', path: '/ziDianList', component: './ziDianList/ZiDian' },
                { name: 'ziDian', path: '/ziDianList', component: './ziDian/ZiDian' },
              ],
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
                {
                  path: '/admin/sub-page',
                  name: 'sub-page',
                  icon: 'smile',
                  component: './Welcome',
                  authority: ['admin'],
                },
              ],
            },
            // {
            //   name: 'list.table-list',
            //   icon: 'table',
            //   path: '/list',
            //   component: './ListTableList',
            // },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  proxy: {
    '/xiuXing': {
      target: 'http://localhost:8888/xiuXing',
      changeOrigin: true,
      pathRewrite: {
        '^/xiuXing': '',
      },
    },
  },
  chainWebpack: webpackPlugin,
};
