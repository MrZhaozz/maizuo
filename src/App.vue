<template>
  <div>
    <!-- <ul>
      <li><a href="/#/film">film</a></li>
      <li><a href="/#/cinema">cinema</a></li>
      <li><a href="/#/center">center</a></li>
    </ul> -->
    
    <tabbar v-show="$store.state.isShow"></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// import navbar from './components/navbar';
// import sidebar from './components/sidebar';
import tabbar from './components/tabbar';

  export default {
    data() {
      return {
        title: 'App.vue',
        isShow: true,
      }
    },

    components: {
      // navbar,
      // sidebar,
      tabbar,
      
    },

    methods: {
      change() {
        if(this.title === '111') {
          this.title = '222'
        } else {
          this.title = '111'
        }
        this.isShow = !this.isShow;
      }
    }


  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  html,body {
    height: 100%;
  }

  .zzzactive {
    color: blue;
  }
  ul,li {
    list-style: none;
  }
section {
  margin-bottom: 50px;
}
</style>
