<template>
	<view class="goods">
		<view class="goods_list">
			<GoodsPreview :logo="urlParams.logo" />
			<GoodsInfo :data="data" :name="urlParams.name" />
			<GoodsDetail :explain_text="data.explain_text" />
			<view class="bottom_bar">
				<view class="labels">
					<view class="btns btn1" @click="toKefu">{{getLang('goods_p9')}}</view>
				</view>
				<view class="labels">
					<view :class="['btns btn2',  getClickStatus]">
					    <view class="btn_text">{{getLang('goods_p10')}}</view>
						<view class="btn_text2" @click="toPage">{{(data.jifen || 0) + getLang('goods_p11')}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import GoodsPreview from '@/layouts/goods/goods_preview.vue'
	import GoodsInfo from '@/layouts/goods/goods_info.vue'
	import GoodsDetail from '@/layouts/goods/goods_detail.vue'
	import { getShoppingDetails } from '@/apis/users.js'
	export default {
		name: 'Goods',
		mixins: [langMixins],
		data(){
			return {
				sid: '',
				urlParams: {},
				data: {}
			}
		},
		components: {
			GoodsPreview,
			GoodsInfo,
			GoodsDetail
		},
		methods: {
			toPage(){
				if(Number(this.urlParams.jifen) < Number(this.data.jifen)){
					return
				}
				uni.navigateTo({
					url: '/pages/convert/index?id='+this.urlParams.id+'&jifen='+this.urlParams.jifen
				})
			},
			async getShoppingDetailsHandler(id){
				const res = await getShoppingDetails({id})
				this.data = res.data
			},
			toKefu(){
				uni.navigateTo({
					url: '/pages/kefu_webview/index'
				})
			}
		},
		computed: {
			getClickStatus(){
				return Number(this.urlParams.jifen) < Number(this.data.jifen) ? 'un' : ''
			}
		},
		onLoad(opt) {
			const id = opt.id
			this.urlParams = opt
			this.getShoppingDetailsHandler(id)
			uni.setNavigationBarTitle({
				title: this.getLang('goods_p1')
			})
		}
	}
</script>

<style scoped>
	page,
	.goods{
		height: 100%;
	}
	.goods{
		padding-bottom: calc(100upx + env(safe-area-inset-bottom));
	}
	.goods_list{
		height: 100%;
	}
	.bottom_bar{
		position: fixed;
		width: 100%;
		height: 100upx;
		display: flex;
		left: 0;
		bottom: env(safe-area-inset-bottom);
		z-index: 100;
	}
	.bottom_bar .labels{
		padding: 10upx;
		width: 50%;
	}
	.btns{
		border-radius: 60upx;
		text-align: center;
		height: 80upx;
	}
	.btn1{
		line-height: 80upx;
		background: #DF5000;
		color: #fff;
	}
	.btn2{
		background: #0077FF;
		color: #fff;
	}
	.btn_text2{
		font-size: 22upx
	}
	.un{
		background: #aaa !important;
	}
</style>
