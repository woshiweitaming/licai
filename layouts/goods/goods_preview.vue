<template>
	<view class="goods_preview">
		<!-- <swiper class="swiper" :style="{height: getHeight}" :autoplay="autoplay" :indicator-dots="indicatorDots">
		    <swiper-item v-for="(curItem, index) in dataList" :key="index">
		        <view class="swiper-item">{{curItem.name}}</view>
		    </swiper-item>
		</swiper> -->
		<image :src="logo" :style="{height: getHeight}" class="logo" mode="widthFix"></image>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'GoodsPreview',
		mixins: [langMixins],
		props: ['logo'],
		data(){
			return {
				dataList: [
				],
				autoplay: true,
				indicatorDots: true
			}
		},
		computed: {
			getHeight(){
				const { screenWidth } = uni.getSystemInfoSync()
				return screenWidth / 2 + 'px'
			}
		}
	}
</script>

<style scoped>
	.goods_preview{
		padding: 10upx;
		background: #fff;
		margin-bottom: 20upx;
	}
	.logo{
		width: 100%;
	}
</style>
