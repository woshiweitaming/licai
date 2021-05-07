<template>
	<view class="overview">
		<view class="card">
			<view class="title">
				<image src="../../static/images/team/icon.png" class="icon" mode="widthFix"></image>
				<text class="txt">{{getLang('my_team_p3')}}</text>
			</view>
			<view class="table">
				<view class="thead">
					<view class="th" v-for="(curItem, index) in thead" :key="index">{{getLang(curItem)}}</view>
				</view>
				<view class="tbody">
					<view class="tr" v-if="myTeamInfo.leve1 && myTeamInfo.leve1.count > -1">
						<view class="td">1</view>
						<view class="td">{{myTeamInfo.leve1.count}}</view>
						<view class="td" style="color: #f33d3d;">{{myTeamInfo.leve1.Recharge}}</view>
						<view class="td" style="color: #68ac43;">{{myTeamInfo.leve1.Withdraw}}</view>
					</view>
					<view class="tr" v-if="myTeamInfo.leve2 && myTeamInfo.leve2.count > -1">
						<view class="td">2</view>
						<view class="td">{{myTeamInfo.leve2.count}}</view>
						<view class="td" style="color: #f33d3d;">{{myTeamInfo.leve2.Recharge}}</view>
						<view class="td" style="color: #68ac43;">{{myTeamInfo.leve2.Withdraw}}</view>
					</view>
					<view class="tr" v-if="myTeamInfo.leve3 && myTeamInfo.leve3.count > -1">
						<view class="td">3</view>
						<view class="td">{{myTeamInfo.leve3.count}}</view>
						<view class="td" style="color: #f33d3d;">{{myTeamInfo.leve3.Recharge}}</view>
						<view class="td" style="color: #68ac43;">{{myTeamInfo.leve3.Withdraw}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Overview',
		mixins: [langMixins],
		props: ['myTeamInfo'],
		data(){
			return {
				thead: ['my_team_p4', 'my_team_p5', 'my_team_p6', 'my_team_p7']
			}
		},
		methods: {
		},
	}
</script>

<style scoped>
	.overview{
		padding: 20upx;
		position: relative;
		z-index: 2;
	}
	.card{
		background-image: -moz-linear-gradient( 90deg, rgb(255,255,255) 0%, rgb(235,241,255) 100%);
		background-image: -webkit-linear-gradient( 90deg, rgb(255,255,255) 0%, rgb(235,241,255) 100%);
		background-image: -ms-linear-gradient( 90deg, rgb(255,255,255) 0%, rgb(235,241,255) 100%);
		padding: 20upx;
		border-radius: 20upx;
	}
	.title{
		margin-bottom: 20upx;
		font-size: 28upx;
		line-height: 60upx;
		position: relative;
		padding-left: 60upx;
	}
	.title .txt{
		vertical-align: top;
		margin-left: 20upx;
	}
	.icon{
		width: 50upx;
		position: absolute;
		top: 0;
		left: 0;
	}
	.table{
		background: #fff;
	}
	.thead{
		display: flex;
		background: #f8f8f8;
	}
	.thead .th,
	.tbody .tr .td{
		width: 25%;
		text-align: center;
		line-height: 80upx;
		font-size: 26upx
	}
	.tbody .tr{
		display: flex;
		color: #666;
	}
	.tbody .tr:nth-child(even){
		background: #f8f8f8;
	}
</style>
