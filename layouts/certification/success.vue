<template>
	<view class="success">
		<image class="icon" src="/static/images/icon/pay_success.png" mode="widthFix"></image>
		<view class="tips">{{getLang('fund_p32')}}</view>
		<view class="btns">
			<u-button type="primary" @click="back">{{getLang('fund_p33')}}</u-button>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Success',
		mixins: [langMixins],
		methods: {
			back(){
				uni.switchTab({
					url: '/pages/fund/index'
				})
			}
		}
	}
</script>

<style scoped>
	.icon{
		width: 20%;
		margin: 80upx auto 0 auto;
		display: flex;
	}
	.tips{
		text-align: center;
		line-height: 80upx;
		font-weight: bold;
	}
	.btns{
		text-align: center;
		width: 50%;
		margin: 20upx auto;
	}
</style>
