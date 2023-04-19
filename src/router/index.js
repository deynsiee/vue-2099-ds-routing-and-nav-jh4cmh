import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Blog from '@/components/Blog';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery,
    },
  ],
});
