<template>
	<view class="list">
		<u-cell-group>
			<!-- <u-cell-item @click="toPage('/pages/account/index')" :title="getLang('fund_p15')" >
				<image class="icon" src="/static/images/my/1.png" mode="widthFix"></image>
			</u-cell-item> -->
			<u-cell-item @click="toCertPage()" :title="getLang('fund_p16')" class="cell_item" >
				<image class="icon" src="/static/images/my/2.png" mode="widthFix"></image>
				<view class="status">{{getStatus}}</view>
			</u-cell-item>
		</u-cell-group>
		<u-gap height="20" bg-color="#f8fbfd"></u-gap>
		<u-cell-group>
			<u-cell-item v-for="(curItem, index) in dataList1" :key="index" @click="toPage(curItem.path)" :title="getLang(curItem.name)" >
				<image class="icon" :src="curItem.icon" mode="widthFix"></image>
			</u-cell-item>
		</u-cell-group>
		<u-gap height="20" bg-color="#f8fbfd"></u-gap>
		<u-cell-group>
			<u-cell-item v-for="(curItem, index) in dataList2" :key="index" @click="toPage(curItem.path)" :title="getLang(curItem.name)" >
				<image class="icon" :src="curItem.icon" mode="widthFix"></image>
			</u-cell-item>
		</u-cell-group>
		<u-gap height="20" bg-color="#f8fbfd"></u-gap>
		<u-cell-group>
			<u-cell-item v-for="(curItem, index) in dataList3" :key="index" @click="toPage(curItem.path, index)" :title="getLang(curItem.name)" >
				<image class="icon" :src="curItem.icon" mode="widthFix"></image>
			</u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'List',
		mixins: [langMixins],
		props: ['type'],
		data(){
			return {
				dataList1: [
					{
						name: 'fund_p17',
						path: '/pages/recharge_record/index',
						icon: '/static/images/my/3.png'
					},
					{
						name: 'fund_p18',
						path: '/pages/withdraw_record/index',
						icon: '/static/images/my/4.png'
					},
					{
						name: 'fund_p19',
						path: '/pages/my_investment/index',
						icon: '/static/images/my/5.png'
					},
				],
				dataList2: [
					{
						name: 'fund_p20',
						path: '/pages/invite_friend/index',
						icon: '/static/images/my/6.png'
					},
					{
						name: 'fund_p21',
						path: '/pages/my_team/index',
						icon: '/static/images/my/7.png'
					},
				],
				dataList3: [
					{
						name: 'fund_p22',
						path: '/pages/help/index',
						icon: '/static/images/my/8.png'
					},
					{
						name: 'fund_p34',
						path: '/pages/reward/index',
						icon: '/static/images/my/10.png'
					},
					{
						name: 'fund_p23',
						path: '/pages/kefu_webview/index',
						icon: '/static/images/my/9.png'
					}
				]
			}
		},
		methods:{
			toPage(path, index){
				uni.navigateTo({
					url: path
				})
			},
			toCertPage(){
				if(this.type == 3){
					return 
				}
				uni.navigateTo({
					url: '/pages/certification/index?type='+this.type
				})
			}
		},
		computed: {
			getStatus(){
				switch(this.type){
					case 0:
					  return this.getLang('fund_p25')
					case 1:
					  return this.getLang('fund_p26')
					case 2:
					  return this.getLang('fund_p27')
					case 3:
					  return this.getLang('fund_p28')
				}
			}
		}
	}
</script>

<style scoped>
	.u-cell{
		position: relative;
		padding-left: 80upx;
	}
	.icon{
		width: 40upx;
		position: absolute;
		left: 20upx;
		top: 30upx;
	}
</style>
