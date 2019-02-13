<template>
  <div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="false"
      infinite-scroll-distance="10"
    >
      <li v-for="data in datalist" @click="handleClick(data.filmId)" :key="data.filmId">
        <img :src="data.poster">
        <h2>{{data.name}}</h2>
        <p v-if="isCreate">
          观众评分
          <span class="fen">{{data.grade}}</span>
        </p>
        <p>主演:<span v-for="item in data.actors">&nbsp;{{item.name}}</span></p>
        <p>
          <span>{{data.nation}}</span>丨
          <span>{{data.runtime}}分钟</span>
        </p>
        <!-- {{data}} -->
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      datalist: [],
      filmName: "aaa",
      isCreate: true,
      count: 1,
      total: 0,
      loading: false
    };
  },
  methods: {
    handleClick(id) {
      // console.log(id);
      this.$router.push(`/detail/${id}`);
    },
    loadMore() {
      console.log("axios");
      console.log(this.total);
      if (this.total === this.datalist.length) {
        this.loading = true;
        return;
      }
      this.count++;
      axios({
        url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${
          this.count
        }&pageSize=10&type=1&k=8226983`,
        method: "get",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457072974629974745508"}',
          "X-Host": "mall.film-ticket.film.list"
        }
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films];
      });
    }
  },
  mounted() {
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8226983",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457072974629974745508"}',
        "X-Host": " mall.film-ticket.film.list"
      }
    }).then(res => {
      console.log(res.data, "nowplaying.vue");
      this.datalist = res.data.data.films;
      this.total = res.data.data.total;
      // this.filmName = res.data.data.name;
    });
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
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
  }
  span.fen {
    color: #ffb232;
  }
}
</style>
