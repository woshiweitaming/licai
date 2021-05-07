<template>
	<view class="goods_info">
		<view class="labels">
			<view class="box">
				<text class="price">{{data.jifen}}</text>
				<text class="unit">{{getLang('goods_p2')}}</text>
				<text class="market_price">{{getLang('goods_p3')}}:{{data.price}}{{getLang('goods_p7')}}</text>
			</view>
			<view class="box">
				<text class="buy">{{getLang('goods_p4') +data.num+ getLang('goods_p5')}}</text>
			</view>
		</view>
		<view class="labels">
			<u-tag :text="data.jifen + getLang('goods_p6') + 0 + getLang('goods_p7')" type="warning" size="mini" />
		</view>
		<view class="labels">
			<view class="goods_name">{{name}}</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'GoodsInfo',
		mixins: [langMixins],
		props: ['data','name']
	}
</script>

<style scoped>
	.goods_info{
		padding: 20upx;
		background: #fff;
	}
	.goods_info .labels{
		margin-bottom: 20upx;
		display: flex;
	}
	.goods_info .labels .box{
		position: relative;
		width: 50%;
	}
	.goods_info .labels .box:last-child{
		text-align: right;
		color: #666;
		font-size: 24upx;
		line-height: 60upx;
	}
	.goods_info .labels .price{
		font-weight: bold;
		color: #DF5000;
		font-size: 40upx;
		padding-right: 10upx;
	}
	.goods_info .labels .unit{
		color: #DF5000;
		font-weight: bold;
		font-size: 24upx;
	}
	.goods_info .labels .market_price{
		color: #666;
		font-size: 24upx;
		padding-left: 40upx;
		text-decoration: line-through;
	}
	.goods_info .goods_name{
		font-weight: bold;
		color: #111322;
		font-size: 32upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
