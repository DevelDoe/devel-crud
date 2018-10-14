/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-18T21:21:50+01:00
 * @Email:  andreeray@live.com
 * @Filename: router.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-01-18T21:26:42+01:00
 */

import Home         from '../components/site/Home.vue'
import Dashboard    from '../components/admin/Dashboard.vue'
import Todo    from '../components/admin/Todo.vue'

import store from '../store/store'

function authenticate( to, from, next ) {
    // We can se if a user is refreshing a page when there is no page he is navigating from
    if( !from.name ) {
        store.dispatch( 'setLocation', to.name )
    }

    if( store.getters.isLogged ) {
        next()
    } else {
        next('/')
    }
}

export default [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/admin/dashboard',
        component: Dashboard,
        name: 'dashboard',
        beforeEnter: authenticate
    },
    {
        path: '/admin/todo',
        component: Todo,
        name: 'todo',
        beforeEnter: authenticate
    }
]
