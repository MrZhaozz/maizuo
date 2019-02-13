<template>
  <div v-if="filminfo">
    <div>
      <img :src="filminfo.poster">
      <h2>{{filminfo.name}}</h2>
    </div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in filminfo.photos">
          <img :src="item" class="photos">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
	<ul>
				<li>aaa</li>
				<li>aaa</li>
				<li>aaa</li>
				<li>aaa</li>
				<li>aaa</li>
			</ul>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      filminfo: null
    };
  },

  beforeMount() {
    this.$store.commit("hideMaizuoTabber", 'detail.vue传过来的值');
  },

  mounted() {
    console.log(this.$route.params,this.$route.path, 'detail.vue');

    axios({
      url: `https://m.maizuo.com/gateway?filmId=${
        this.$route.params.dynamic
      }&k=7692759`,
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457072974629974745508"}',
        "X-Host": "mall.film-ticket.film.info"
      }
    }).then(res => {
      console.log(res.data.data, "detail.vue详情");
      this.filminfo = res.data.data.film;
      // this.datalist = res.data.data.films;
      // this.filmName = res.data.data.name;
      this.$nextTick(() => {
        console.log("nextTick");
        var swiper = new Swiper(".swiper-container", {
          slidesPerView: 2.5,
          spaceBetween: 30,
          freeMode: true,
        });
      });
    });
  },

  beforeDestroy() {
    this.$store.commit("showMaizuoTabber", '111');
  }
  // updated() {
  // 	var swiper = new Swiper('.swiper-container', {
  // 		slidesPerView: 3,
  // 		spaceBetween: 30,
  // 		freeMode: true,
  // 		pagination: {
  // 		el: '.swiper-pagination',
  // 		clickable: true,
  // 		}
  // 	});
  // }
};
</script>

<style>
img {
  width: 100%;
}
/* img.photos {
	width:150px;
} */
</style>