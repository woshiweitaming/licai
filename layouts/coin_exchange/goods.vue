<template>
	<view class="goods">
		<u-empty :text="getLang('common_p5')" mode="list" v-if="dataList.length === 0"></u-empty>
		<view class="goods_list"  v-else >
			<view class="goods_labels" v-for="(curItem, index) in dataList" :key="index">
				<view class="goods_items" @click="toPage(curItem)">
					<image class="img" :src="curItem.logo"></image>
					<view class="name">{{curItem.name}}</view>
					<view class="coin">{{curItem.jifen}}{{getLang('shop_p7')}}</view>
					<view class="left_nums">{{getLang('shop_p8')}}{{curItem.surplus}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Goods',
		mixins: [langMixins],
		props: ['dataList', 'info'],
		methods: {
			toPage(data){
				uni.navigateTo({
					url: '/pages/goods/index?id='+data.id+'&logo='+data.logo+'&jifen='+this.info.jifen+'&name='+data.name
				})
			}
		},

	}
</script>

<style scoped>
	.goods{
		padding: 20upx;
		background: #fff;
	}
	.title{
		line-height: 80upx;
		font-size: 32upx;
		font-weight: bold;
	}
	.goods_list{
		display: flex;
		flex-wrap: wrap;
	}
	.goods_labels{
		width: 50%;
		padding: 10upx;
		margin-bottom: 10upx;
		text-align: center;
	}
	.goods_items{
		border: 1px solid #f9f9f9;
		border-radius: 20upx;
		box-shadow: 0 0 20upx 0 rgba(0,0,0,.05);
		position: relative;
	}
	.img{
		width: 100%;
		height: 300upx;
	}
	.name{
		font-weight: bold;
		padding-bottom: 10upx;
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow:hidden;
		display: block;
		padding: 0 5px;
	}
	.coin{
		font-weight: bold;
		color: #F0AD4E;
		padding-bottom: 20upx;
		font-size: 26upx
	}
	.left_nums{
		position: absolute;
		right: 0;
		top: 0;
		border-radius: 0 20upx 0 0;
		padding: 8upx;
		background: rgba(0,0,0,.2);
		color: #fff;
		font-size: 24upx
	}
</style>
