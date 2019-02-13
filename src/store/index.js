import Vue from 'vue'
import Vuex from 'vuex'
import sxios from 'axios'
import Axios from 'axios';
Vue.use(Vuex)
var MY_HIDE = "hideMaizuoTabber";
const store = new Vuex.Store({
	state: {
		isShow: true,
		datalist: [],
		comingsoonTotal: 1,
		comingsoonCount: 1,
		loading: false
	},

	actions: {
		getComingsoon(store) {
			console.log('index.js 数据请求');
			Axios({
				url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.state.comingsoonCount}&pageSize=10&type=2&k=2687395`,
				method: "get",
				headers: {
					'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"15457072974629974745508"}',
					'X-Host': 'mall.film-ticket.film.list'
				},
			}).then(res => {
				console.log(res.data.data, 'index.js');
				store.commit("setDatalist", res.data.data);
			})
		}
	},

	mutations:{
		[MY_HIDE](state, payload){
			state.isShow = false;
			console.log(payload)
		},
		// hideMaizuoTabber(state, payload) {
		// 	state.isShow = false;
		// 	console.log(payload, 'index.js')
		// },
		showMaizuoTabber(state, payload) {
			state.isShow = true;
			console.log(state)
		},
		setDatalist(state, payload) {
			state.datalist = [...state.datalist, ...payload.films];
			state.comingsoonTotal = payload.total;
			state.comingsoonCount++;
		}
	}
})

export default store;