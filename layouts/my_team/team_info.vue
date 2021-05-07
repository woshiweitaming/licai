<template>
	<view class="team_info">
		<image src="../../static/images/team/slogan.png" class="slogan" mode="widthFix"></image>
		<view class="card">
			<view class="name">{{getLang('my_team_p2')}}</view>
			<view class="value">¥ {{profit || 0}}</view>
			<image src="../../static/images/team/people.png" class="people" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'MyTeamInfo',
		mixins: [langMixins],
		props: ['profit']
	}
</script>

<style scoped>
	.team_info{
		padding: 40upx;
		position: relative;
		z-index: 2;
	}
	.slogan{
		width: 50%;
		margin-bottom: 40upx;
	}
	.card{
		background: url(../../static/images/team/card.png);
		background-size: 100% 100%;
		width: 100%;
		height: 200upx;
		position: relative;
		padding-top: 40upx;
		padding-left: 40upx;
	}
	.people{
		width: 50%;
		position: absolute;
		right: 0;
		bottom: 20upx;
	}
	.name{
		color: #fff;
		font-size: 32upx
	}
	.value{
		font-weight: bold;
		color: #fff;
		font-size: 50upx
	}
</style>
