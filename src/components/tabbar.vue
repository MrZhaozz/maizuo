<template>
	<footer>
		<ul>
			<router-link tag="li" to="/film" activeClass="zzzactive">
				<i class="iconfont">&#xeabe;</i>
				film
			</router-link>
			<router-link tag="li" to="/cinema" activeClass="zzzactive">
				<i class="iconfont">&#xe607;</i>
				cinema
			</router-link>
			<router-link tag="li" to="/center" activeClass="zzzactive">
				<i class="iconfont">&#xe621;</i>
				center
			</router-link>
		</ul>
	</footer>
</template>

<script>
export default {
	
}
</script>

<style scope lang="scss">
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		ul {
			display: flex;
			li {
				flex: 1;
				background: #14c145;
				line-height: 25px;
				i {
					display: inline-block;
					width: 100%;
				}
			}
		}
	}
	
</style>