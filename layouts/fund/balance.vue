<template>
	<view class="balance">
		<view class="topbar">
			<view class="labels">
				<image class="icon" src="/static/images/user/usercenter.png" mode="widthFix"></image>
				<view class="label">
					<text class="uname">{{userInfo.nick_name}}</text>
					<text class="uid">uid:{{userInfo.uid}}</text>
				</view>
			</view>
			<view class="labels setting">
				<image class="icon" @click="toPage('/pages/my/index')" src="/static/images/icon/settings.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="total_balance">
			<view class="name">{{getLang('fund_p1')}}({{getLang('fund_p2')}})</view>
			<view class="value">{{userInfo.alltotal || 0}}</view>
		</view>
		<view class="profit">
			<view class="labels">
				<view class="name">{{getLang('fund_p3')}}</view>
				<view class="value">{{userInfo.yesterday || 0}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('fund_p4')}}</view>
				<view class="value">{{userInfo.total || 0}}</view>
			</view>
		</view>
		<view class="bottom_bar">
			<view class="labels" @click="toPage(curItem.path)" v-for="(curItem, index) in dataList" :key="index">
				<image :src="curItem.icon" mode="widthFix" class="icon"></image>
				<view class="name">{{getLang(curItem.name)}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Balance',
		mixins: [langMixins],
		props: ['userInfo'],
		data(){
			return {
				dataList: [
					{
						name: 'fund_p5',
						icon: '/static/images/icon/f3.png',
						path: '/pages/recharge/index'
					},
					{
						name: 'fund_p6',
						icon: '/static/images/icon/f2.png',
						path: '/pages/withdraw/index'
					},
					{
						name: 'fund_p7',
						icon: '/static/images/icon/f1.png',
						path: '/pages/my_profit/index'
					},
					{
						name: 'fund_p8',
						icon: '/static/images/icon/f4.png',
						path: '/pages/trade_record/index'
					}
				]
			}
		},
		methods: {
			toPage(path){
				uni.navigateTo({
					url: path
				})
			}
		}
	}
</script>

<style scoped>
	.balance{
		height: calc(500upx + var(--status-bar-height));
		background: url(../../static/images/bg/userbg.png);
		position: relative;
		padding-top: calc(20upx + var(--status-bar-height));
		background-size: 100% 100%;
	}
	.total_balance{
		text-align: center;
		color: #fff;
	}
	.total_balance .value{
		font-size: 60upx;
		font-weight: bold;
	}
	.profit{
		display: flex;
		margin-top: 40upx;
	}
	.profit .labels{
		width: 50%;
		text-align: center;
		font-size: 24upx;
		color: #fff;
	}
	.profit .labels .value{
		font-weight: bold;
		font-size: 32upx
	}
	.bottom_bar{
		margin-top: 40upx;
		display: flex;
	}
	.bottom_bar .labels{
		width: 25%;
		text-align: center;
		font-size: 24upx;
		color: #fff;
	}
	.bottom_bar .labels .icon{
		width: 60upx;
	}
	.topbar{
		display: flex;
		justify-content: space-around;
	}
	.topbar .icon{
		width: 50upx;
		display: inline-block;
	}
	.topbar .labels{
		width: 50%;
	}
	.topbar .labels:first-child{
		padding-left: 20upx;
		display: flex;
	}
	.topbar .labels:last-child{
		text-align: right;
		padding-right: 20upx;
	}
	.topbar .label{
		display: flex;
		flex-direction: column;
		color: #fff;
		font-size: 26upx;
		padding-left: 20upx;
	}
	.topbar .label .uname,
	.topbar .label .uid{
		line-height: 28upx;
	}
</style>
