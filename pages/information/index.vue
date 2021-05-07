<template>
	<view class="information">
		<view class="labels" v-for="(curItem, index) in mockList" v-if="dataList.length === 0" :key="`ids${index}`">
			<view class="preview">
				<view class="image_placeholder"></view>
			</view>
			<view class="content">
				<text class="txt txt_placeholder"></text>
				<view class="bottom">
					<view class="views views_placeholder"></view>
					<view class="dates dates_placeholder"></view>
				</view>
			</view>
		</view>
		<view class="list" v-else></view>
		<view class="labels" @click="toPage(curItem.aid)" v-for="(curItem, index) in dataList" :key="index">
			<view class="preview">
				<image v-if="curItem.logo" :src="curItem.logo" class="preview_img"></image>
			</view>
			<view class="content">
				<text class="txt">{{curItem.title}}</text>
				<view class="bottom">
					<view class="views"><u-icon name="eye"></u-icon>{{curItem.vp}}</view>
					<view class="dates">{{curItem.create_time}}</view>
				</view>
			</view>
		</view>
		<u-divider v-if="page > 1" :height="80" bg-color="#f8fbfd" color="#999">{{getLang('common_p4')}}</u-divider>
	</view>
</template>

<script>
	import { getNewsList } from '@/apis/publics.js'
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Transfer',
		mixins: [langMixins],
		data(){
			return {
				dataList: [],
				mockList: [{v: 1},{v:2},{v: 3},{v:4}],
				page: 1,
				loading: true
			}
		},
		methods: {
			async getNewsListHandler(num){
				const res = await getNewsList({num})
				// this.loading = false
				uni.stopPullDownRefresh()
				res.data.forEach((curItem, index) => {
					this.dataList.push(curItem)
				})
			},
			toPage(aid){
				uni.navigateTo({
					url: '/pages/information_detail/index?aid='+aid
				})
			}
		},
		onLoad() {
			this.getNewsListHandler(this.page)
			uni.setNavigationBarTitle({
				title: this.getLang('information_p1')
			})
		},
		onReachBottom() {
			this.page++
			this.getNewsListHandler(this.page)
		},
		onPullDownRefresh() {
			this.page = 1
			this.dataList = []
			this.getNewsListHandler(this.page)
		}
	}
</script>

<style scoped>
	.information .labels{
		padding: 20upx;
		border-top: 1px solid #eee;
		background: #fff;
		display: flex;
	}
	.information .labels .preview{
		width: 30%;
	}
	.information .labels .content{
		width: 70%;
		padding-left: 20upx;
	}
	.information .preview_img{
		width: 100%;
		height: 100%;
	}
	.information .txt{
		overflow: hidden;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		height: 80upx;
	}
	.information .bottom{
		padding-top: 20upx;
		display: flex;
	}
	.information .bottom .views,
	.information .bottom .dates{
		width: 50%;
		font-size: 24upx;
		color: #aaa;
	}
	.information .bottom .dates{
		text-align: right;
	}
	.image_placeholder{
		width: 100%;
		height: 150upx;
		background: #eee;
		border-radius: 20upx;
	}
	.txt_placeholder,
	.views_placeholder,
	.dates_placeholder{
		background: #eee;
	}
	
</style>
