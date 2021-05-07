<template>
	<view class="custom_header">
		<view class="custom_header_main">
			<image src="../../static/images/logo/asset-logo-head.png" class="logo" mode="widthFix"></image>
			<view class="mail">
				<view class="mail_wrap">
					<view class="badge" v-if="badgeShow">0</view>
					<image src="../../static/images/mail_fill.png" mode="widthFix" class="mail_icon"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HomeTitleView',
		data(){
			return {
				badgeShow: false
			}
		}
	}
</script>

<style scoped>
	.custom_header{
		background: #fff;
	}
	.custom_header .logo{
		width: 200upx;
		margin: 10upx 30upx;
	}
	.custom_header .mail{
		position: absolute;
		right: 20upx;
		top: 15upx;
		width: 60upx;
	}
	.custom_header .mail_wrap{
		width: 100%;
		position: relative;
	}
	.custom_header .mail_wrap .mail_icon{
		width: 100%;
	}
	.custom_header .mail_wrap .badge{
		width: 30upx;
		height: 30upx;
		position: absolute;
		right: -5upx;
		top: -5upx;
		background: #FA3534;
		text-align: center;
		line-height: 30upx;
		color: #fff;
		z-index: 1;
		border-radius: 50%;
	}
</style>
