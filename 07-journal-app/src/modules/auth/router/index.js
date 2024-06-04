export default {
    name: 'auth',
    component: () =>  import(/* webpackChunckName: "authLayout" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import(/* webpackChunckName: "login" */ '@/modules/auth/views/LoginView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunckName: "register" */ '@/modules/auth/views/RegisterView.vue'),
        }
    ]
}