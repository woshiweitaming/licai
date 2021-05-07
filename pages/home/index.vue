<template>
	<view class="wrap">
		<TitleView />
		<view class="wrap_main">
			<TopBar :level="level" @openDialog="openDialog" />
			<Shortcut />
			<Product :recommondList="recommondList" :productList="productList" />
			<Dialog @closeCallback="closeCallback" :showStatus="showStatus" :bounds="bounds" />
		</view>
		<!-- <Opinion /> -->
		<!-- <Footer /> -->
	</view>
</template>

<script>
	import TopBar from '@/layouts/home/topbar.vue'
	import TitleView from '@/layouts/home/title_view.vue'
	import Product from '@/layouts/home/product.vue'
	import Shortcut from '@/layouts/home/shortcut.vue'
	import Dialog from '@/layouts/home/dialog.vue'
	import { signin, getUserInfo } from '@/apis/users.js'
	import { getRecommend, getIndexProject, getLevelDescribe } from '@/apis/publics.js'
	export default {
		name: 'Index',
		components: {
			TopBar,
			TitleView,
			Product,
			Shortcut,
			Dialog
		},
		data(){
			return {
				userInfo: {},
				showStatus: false,
				bounds: 0,
				recommondList: [
				],
				productList: [
				],
				level: ''
			}
		},
		methods: {
			async signinHandler(){
				const res = await signin()
				this.bounds = res.bounds
				this.showStatus = true
			},
			openDialog(){
				this.signinHandler()
			},
			closeCallback(){
				this.showStatus = false
			},
			async getRecommendHandler(){
				const res = await getRecommend()
				this.recommondList = res.data
			},
			async getIndexProjectHandler(){
				const res = await getIndexProject()
				this.productList = res.data
			},
			async getLevelDescribeHandler(){
				const res = await getLevelDescribe()
				this.level = res.data.level
			}
		},
		onShow(){
			this.getIndexProjectHandler()
			this.getRecommendHandler()
			this.getLevelDescribeHandler()
		}
	}
</script>

<style scoped>
</style>
