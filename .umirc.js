
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/home',
          component: '../pages/home/index'
        },
        {
          path: '/userList',
          component: '../pages/userList/index'
        },
        {
          path: '/shopList',
          component: '../pages/addShop/index'
        },
        {
          path: '/orderList',
          component: '../pages/orderList/index'
        },
        {
          path: '/addShop',
          component: '../pages/addShop/index'
        },
        {
          path: '/addGoods',
          component: '../pages/addGoods/index'
        },
        {
          path: '/vistor',
          component: '../pages/vistor/index'
        },
        {
          path: '/edit',
          component: '../pages/edit/index'
        },
        {
          path: '/login', 
          component: '../pages/login/index'
        }
      ]
    },
   
  ],
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'myud-admin',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ]
}
