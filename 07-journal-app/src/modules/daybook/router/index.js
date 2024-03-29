export default {
    name: 'dayBook',    
    component: () => import(/* webpackChunckName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',    
            component: () => import(/* webpackChunckName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelectedView.vue'),
        },
        {
            path: ':id',
            name: 'entry',    
            component: () => import(/* webpackChunckName: "daybook-entry" */ '@/modules/daybook/views/EntryView.vue'),
            props: (route) =>{ //? Se manda el id por los props para el EntryView
                return {
                    id: route.params.id
                }
            }
        },
    ]
}