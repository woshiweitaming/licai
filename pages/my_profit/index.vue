<template>
	<view class="record">
		<u-empty style="height: 300upx;" v-if="dataList.length === 0" :text="getLang('common_p5')" mode="list"></u-empty>
		<view class="list" v-else>
			<view class="labels" v-for="(curItem, index) in dataList" :key="index">
				<view class="typename">{{curItem.typename}}</view>
				<view :class="['amount', curItem.amount > 0 ? 'amount0' : 'amount1']">{{curItem.amount > 0 ? `+${curItem.amount}` : curItem.amount}}</view>
				<view class="date">{{curItem.oddtime}}</view>
			</view>
			<u-divider v-if="page > 1" :height="80" bg-color="#f8fbfd" color="#999">{{getLang('common_p4')}}</u-divider>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { myIncome } from '@/apis/users.js'
	export default {
		name: 'TradeRecord',
		mixins: [langMixins],
		data(){
			return {
				dataList: [],
				page: 1,
				type: ''
			}
		},
		methods: {
			change(type){
				this.type = type
				this.page = 1
				uni.startPullDownRefresh()
			},
			async getMyIncomeHandler(){
				const res = await myIncome({num: this.page})
				uni.stopPullDownRefresh()
				res.data.forEach((curItem, index) => {
					this.dataList.push(curItem)
				})
			}
		},
		onReachBottom(){
			this.page++
			this.getMyIncomeHandler()
		},
		onPullDownRefresh() {
			this.page = 1
			this.dataList = []
			this.getMyIncomeHandler()
		},
		onLoad() {
			this.getMyIncomeHandler()
			uni.setNavigationBarTitle({
				title: this.getLang('my_profit_p1')
			})
		}
	}
</script>

<style scoped>
	page,
	.record{
		height: 100%;
	}
	.menu{
		height: 60upx;
		background: #fff;
		display: flex;
		border-bottom: 1px solid #eee;
	}
	.menu .labels{
		text-align: center;
		width: 16.6666%;
		line-height: 59upx;
		font-size: 26upx
	}
	.menu .labels.on{
		border-bottom: 2px solid #0077FF;
		color: #0077FF;
	}
	.list{
		height: calc(100% - 60upx);
	}
	.list .labels{
		padding: 20upx;
		border-bottom: 1px solid #eee;
		display: flex;
		flex-wrap: wrap;
		background: #fff;
	}
	.list .labels .typename,
	.list .labels .date{
		width: 50%;
		line-height: 60upx;
		font-size: 24upx;
	}
	.list .labels .date{
		color: #aaa;
	}
	.list .labels .amount{
		width: 50%;
		text-align: right;
		font-weight: bold;
		font-size: 36upx
	}
	.list .labels .amount0{
		color: #FA3534;
	}
	.list .labels .amount1{
		color: #1FAA93
	}
</style>
