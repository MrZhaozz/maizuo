<template>
  <div>
    <p v-if="isCreate">电影</p>
    <swipe class="my-swipe">
      <swipe-item v-for="data in looplist" :key="data.bannerId">
        <img :src="data.imgUrl">
      </swipe-item>
    </swipe>
    <ul :class="isCreate? 'handfixed': ''">
      <router-link to="/film/nowplaying" tag="li" activeClass="zzzactive">正在热映</router-link>
      <router-link to="/film/comingsoon" tag="li" activeClass="zzzactive">即将上映</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
import axios from "axios";
export default {
  mounted() {
    //卖座

    axios({
      url: "https://m.maizuo.com/gateway?type=2&k=2793250",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457072974629974745508"}',
        "X-Host": "mall.cfg.common-banner"
      }
    }).then(res => {
      console.log(res.data, "film.vue");
      this.looplist = res.data.data;
    });

    //饿了吗 --- 反向代理
    // axios.get('/restapi/shopping/v3/restaurants?latitude=31.230416&longitude=121.473701&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5').then(res => {
    // 	console.log(res)
    // }).catch(error => {
    // 	console.log(error)
	// })
	window.onscroll = this.handleScroll;
  },

  methods: {
	  handleScroll() {
		  console.log(document.documentElement.scrollTop);
		  var lunbo = document.querySelector('.my-swipe');
		  if(document.documentElement.scrollTop >= lunbo.offsetHeight) {
			  this.isCreate = true;
		  } else {
			  this.isCreate = false;
		  }
	  }
  },
  destroyed() {
	  window.onscroll = null;
  },

  components: {
    Swipe,
    SwipeItem
  },

  data() {
    return {
      looplist: ["1111", "2222", "3333"],
      isCreate: false
    };
  }
};
</script>

<style scoped lang="scss">
.my-swipe {
  height: 200px;
  color: #000;
  font-size: 30px;
  text-align: center;
  img {
    width: 100%;
  }
}

p {
  top: 0;
  left: 0;
  position: fixed;
  height: 40px;
  width: 100%;
  line-height: 40px;
  background: #fff;
  text-align: center;
  z-index: 1;
}
ul {
  display: flex;
  width: 100%;
  li {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #fff;
  }
}

.handfixed {
	position: fixed;
	top: 40px;
	left: 0;
}



/* .slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
} */
</style>