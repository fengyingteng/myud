
const menus = [
    {
       title: '首页',
       icon: 'plus',
       key: '/home' 
    },
    {
        title: '数据管理',
        icon: 'plus',
        key: 'dataManage',
        children: [
            {
              title: '用户列表',
              icon:'plus',
              key: '/userList'  
            },
            {
              title: '商家列表',
              icon:'plus',
              key: '/shopList'  
            },
            {
               title: '订单列表',
               icon: 'plus',
               key: '/orderList'
            }
        ]
     },
     {
        title: '添加数据',
        icon: 'plus',
        key: 'addManage',
        children: [
            {
                title: '添加商铺',
                icon:'plus',
                key: '/addShop'
            },
            {
                title: '添加商品',
                icon:'plus',
                key: '/addGoods'
            }
        ] 
     },
     {
        title: '图表',
        icon: 'plus',
        key: 'vistorManage',
        children: [
            {
                title: '用户分布',
                icon:'plus',
                key: '/vistor'
            }
        ] 
     },
     {
        title: '编辑',
        icon: 'plus',
        key: 'editManage',
        children: [
            {
                title: '文本编辑',
                icon:'plus',
                key: '/edit'
            }
        ] 
     }
]


export default menus;