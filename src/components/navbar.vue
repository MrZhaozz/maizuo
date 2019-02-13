<template>
	<div>
		navbar --- {{ myname }} --- 文件 ---{{ title }} 
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'navbar.vue中定义的title'
		}
	},

	props: ['myname']
}
</script>

<style scoped>
	div {
		background: blue;
	}
</style>