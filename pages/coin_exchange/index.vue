<template>
	<view class="coin_exchange">
		<Card :info="info" />
		<Goods :info="info" :dataList="dataList"/>
		<u-divider v-if="page > 1" :height="80" bg-color="#ffffff" color="#999">{{getLang('common_p4')}}</u-divider>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import Card from '@/layouts/coin_exchange/card.vue'
	import Goods from '@/layouts/coin_exchange/goods.vue'
	import { getShoppingList } from '@/apis/publics.js'
	export default {
		name: 'CoinExchange',
		mixins: [langMixins],
		components: {
			Card,
			Goods
		},
		data(){
			return {
				page: 1,
				dataList: [],
				info: {
					total: 0,
					jifen: 0
				}
			}
		},
		methods: {
			async getShoppingListHandler(page){
				const res = await getShoppingList({num: page})
				uni.stopPullDownRefresh()
				this.info = res.data.info
				res.data.list.forEach((curItem, index) => {
					this.dataList.push(curItem)
				})
			}
		},
		onLoad(){
			this.getShoppingListHandler(this.page)
			uni.setNavigationBarTitle({
				title: this.getLang('shop_p1')
			})
		},
		onPullDownRefresh() {
			this.page = 1
			this.dataList = []
		    this.getShoppingListHandler(this.page)
		},
		onReachBottom(data){
			this.page++
			this.getShoppingListHandler(this.page)
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '/pages/coin_exchange_record/index'
			})
		}
	}
</script>

<style scoped>
	page,
	.coin_exchange{
		height: 100%;
	}
</style>
