<template>
  <div>
    {{zzz}}
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="10"
    >
      <li v-for="data in datalist" :key="data.filmId" @click="todetail(data.filmId)">
        <!-- {{data.poster}} -->
        <img :src="data.poster">
        <h2>{{data.name}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    console.log("comingsoon.vue");
    if (
      this.$store.state.datalist.length != this.$store.state.comingsoonTotal
    ) {
      this.$store.dispatch("getComingsoon");
    } else {
      console.log("复用store中的数据，不用请求");
      console.log(
        this.$store.state.datalist.length,
        this.$store.state.comingsoonTotal
      );
    }
  },
  //   computed: {
  // 	  mydatalist() {
  // 		  return this.$store.state.datalist;
  // 	  }
  //   }
  // computed:mapState(["datalist"])
  computed: {
    ...mapState(["datalist"]),
    zzz() {
      return "zzza";
    }
  },
  methods: {
    loadMore() {
      if (
        this.$store.state.datalist.length === this.$store.state.comingsoonTotal
      ) {
        this.$store.state.loading = true;
        return;
      }
      console.log("axios");
      console.log(
        this.$store.state.comingsoonTotal,
        this.$store.state.datalist.length
      );
      this.$store.dispatch("getComingsoon");
    },
    todetail(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>

<style scoped lang="scss">
li {
  overflow: hidden;
  img {
    width: 66px;
    float: left;
    margin: 15px;
  }
  h2 {
    font-weight: 100;
    font-size: 16px;
    margin-top: 20px;
  }
}
</style>