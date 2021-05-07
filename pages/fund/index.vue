<template>
	<view class="fund">
		<Balance :userInfo="userInfo" />
		<List :type="userInfo.type || 0" />
	</view>
</template>

<script>
	import Balance from '@/layouts/fund/balance.vue'
	import List from '@/layouts/fund/list.vue'
	import { getUserInfo } from '@/apis/users.js'
	export default {
		name: 'Fund',
		data(){
			return {
				userInfo: {}
			}
		},
		components: {
			Balance,
			List
		},
		methods: {  
			async getUserInfoHandler(){
				uni.stopPullDownRefresh();
				const res = await getUserInfo()
				this.userInfo = res.data
			}
		},
		onShow(){
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
		    this.getUserInfoHandler()
		},
	}
</script>

<style scoped>
</style>
