import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home';
import Film from '../components/film';
import Cinema from '../components/cinema';
import Center from '../components/center';
import Nowplaying from '../components/nowplaying';
import Comingsoon from '../components/comingsoon';
import Detail from '../components/detail';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      // name: 'HelloWorld',
      component: Home
    },
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: 'nowplaying',
          component: Nowplaying
        },
        {
          path: 'comingsoon',
          component: Comingsoon
        },
        {
          path: '',
          redirect: '/film/nowplaying'
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/detail/:dynamic',
      component: Detail
    },
    {
      path: '*',
      redirect: '/film'
    }
  ]
})
