<template>
	<view class="my_team">
		<view class="custom_header" :style="getColor">
			<view class="custom_header_main"><u-icon @click="toBack" class="left_icon" name="arrow-left"></u-icon>{{getLang('my_team_p1')}}</view>
		</view>
		<TeamInfo :profit="myTeamInfo.profit" />
		<u-gap height="20" bg-color="#f5f5f5"></u-gap>
		<Overview :myTeamInfo="myTeamInfo" />
		<u-gap height="20" bg-color="#f5f5f5"></u-gap>
		<Under />
		<view class="bg"></view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import TeamInfo from '@/layouts/my_team/team_info.vue'
	import Overview from '@/layouts/my_team/overview.vue'
	import Under from '@/layouts/my_team/under.vue'
	import { getMyTeam } from '@/apis/users.js'
	export default {
		name: 'MyTeam',
		mixins: [langMixins],
		data(){
			return {
				scrollTop: 0,
				myTeamInfo: {}
			}
		},
		components: {
			TeamInfo,
			Overview,
			Under
		},
		methods: {
			toBack(){
				uni.navigateBack()
			},
			async getMyTeamHandler(){
				const res = await getMyTeam()
				this.myTeamInfo = res.data
			}
		},
		computed: {
			getColor(){
				const style = {background: `rgba(255,255,255, ${this.scrollTop / 100}`}
				return style
			}
		},
		onLoad() {
			this.getMyTeamHandler()
		},
		onPageScroll(e){
			this.scrollTop = e.scrollTop
		},
	}
</script>

<style scoped>
	.my_team{
		padding-top:  calc(88upx + var(--status-bar-height));
	}
	.custom_header{
		background: none;
		text-align: center;
	}
	.custom_header .custom_header_main{
		line-height: 88upx;
		font-size: 30upx;
	}
	.left_icon{
		position: absolute;
		left: 20upx;
		font-size: 36upx;
		top: 25upx;
	}
	.bg{
		width: 100%;
		height: calc(500upx + var(--status-bar-height));
		background: url(../../static/images/team/bg.jpg);
		background-size: cover;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 0;
	}
</style>
