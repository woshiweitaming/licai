<template>
	<view class="bottom">
		<view class="version">{{getLang('user_p10')}}: 1.0.0</view>
		<view class="links">
			<view class="labels" @click="toPage(6)">{{getLang('user_p11')}}</view>|
			<view class="labels" @click="toPage(7)">{{getLang('user_p12')}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'MyBottom',
		mixins: [langMixins],
		methods: {
			toPage(type){
				uni.navigateTo({
					url: '/pages/desc/index?type='+type
				})
			}
		}
	}
</script>

<style scoped>
	.bottom{
		padding: 20upx;
	}
	.version{
		font-size: 24upx;
	}
	.links{
		width: 60%;
		margin: 40upx auto;
		display: flex;
		font-size: 24upx;
	}
	.links .labels{
		width: 50%;
		text-align: center;
		color: #007AFF;
	}
</style>
