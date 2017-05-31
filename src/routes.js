
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = resolve => {
  require.ensure(['./views/Home.vue'], () => {
    resolve(require('./views/Home.vue'))
  })
}

const leaseRight = resolve => {
  require.ensure(['./views/leaseRight.vue'], () => {
    resolve(require('./views/leaseRight.vue'))
  })
}
const login = resolve => {
  require.ensure(['./views/login.vue'], () => {
    resolve(require('./views/login.vue'))
  })
}
const user = resolve => {
  require.ensure(['./views/system/user/user.vue'], () => {
    resolve(require('./views/system/user/user.vue'))
  })
}
const orgnazition = resolve => {
  require.ensure(['./views/system/orgnazition.vue'], () => {
    resolve(require('./views/system/orgnazition.vue'))
  })
}
const role = resolve => {
  require.ensure(['./views/system/role.vue'], () => {
    resolve(require('./views/system/role.vue'))
  })
}
const permission = resolve => {
  require.ensure(['./views/system/permission.vue'], () => {
    resolve(require('./views/system/permission.vue'))
  })
}
const asd = resolve => {
  require.ensure(['./views/asd.vue'], () => {
    resolve(require('./views/asd.vue'))
  })
}




export default new VueRouter({
    routes : [
        {
            path : '/',
            redirect : '/login'
        },
        {
            path : '/bsp',
            component : Home,
            children : [
                {
                    path : '/',
                    component : asd
                },
                {
                    path : '/user',
                    component : user
                },
                {
                    path : '/leaseRight',
                    component : leaseRight
                },
                {
                    path : '/orgnazition',
                    component : orgnazition
                },
                {
                    path : '/role',
                    component : role
                },
                {
                    path : '/permission',
                    component : permission
                }
            ]
        },
        {
            path : '/login',
            component : login
        }
    ]
})