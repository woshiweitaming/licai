<template>
	<view class="notice">
		<u-empty v-if="dataList.length === 0" :text="getLang('common_p5')" mode="list"></u-empty>
		<view class="labels" v-else v-for="(curItem, index) in dataList" :key="index">
			<view class="date"><text class="dot"></text>{{curItem.create_time}}</view>
			<view class="title" @click="toggle(index)">{{curItem.title}} <u-icon class="icon" name="arrow-down"></u-icon></view>
			<view class="content" v-if="curItem.status">
				<rich-text :nodes="curItem.content"></rich-text>
			</view>
		</view>
		<u-divider v-if="page > 1" :height="80" bg-color="#f8fbfd" color="#999">{{getLang('common_p4')}}</u-divider>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { getNoticeList } from '@/apis/publics.js'
	export default {
		name: 'Notice',
		mixins: [langMixins],
		data(){
			return {
				dataList: [],
				page: 1
			}
		},
		methods: {
			async getNoticeListHandler(num){
				const res = await getNoticeList({num: num})
				uni.stopPullDownRefresh()
				res.data.forEach((curItem, index) => {
					curItem.status = false
					curItem.content = curItem.content.replace(/<p([\s\w"=\/\.:;]+)((?:(style="[^"]+")))/ig, '<p')
                .replace(/<p>/ig, '<p style="font-size: 13px; line-height: 25px;">')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(height="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(width="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(style="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(alt="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)/ig, '<img style="width: 100%;" $1');
					this.dataList.push(curItem)
				})
			},
			toggle(index){
				this.dataList[index].status = !this.dataList[index].status
			}
		},
		onShow() {
			this.getNoticeListHandler(1)
		},
		onReachBottom(data){
			this.page++
			this.getNoticeListHandler(this.page)
		},
		onPullDownRefresh() {
			this.page = 1
			this.dataList = []
			this.getNoticeListHandler(this.page)
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('notice_p1')
			})
		}
	}
</script>

<style scoped>
	.notice{
		padding: 100upx 20upx 0 20upx;
		overflow-x: hidden;
		box-sizing: border-box;
	}
	.labels{
		box-shadow: 0 10upx 20upx 0 rgba(0,0,0,.05);
		background: #fff;
		position: relative;
		margin-bottom: 100upx;
	}
	.labels .title{
		line-height: 80upx;
		font-size: 28upx;
		font-weight: bold;
		border-bottom: 1px solid #f9f9f9;
		padding: 0 20upx;
		position: relative;
	}
	.labels .title .icon{
		position: absolute;
		right: 20upx;
		top: 30upx;
		color: #aaa;
	}
	.labels .content{
		padding: 20upx;
		color: #999;
	}
	.labels .date{
		padding: 10upx;
		border-radius: 10upx;
		position: absolute;
		left: 0;
		top: -70upx;
		font-size: 24upx;
		font-weight: bold;
		background: #fff;
		box-shadow: 0 10upx 20upx 0 rgba(0,0,0,.05);
		border-radius: 40upx;
		color: #aaa;
	}
	.dot{
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background: #0077FF;
		display: inline-block;
		margin-right: 10upx;
	}
</style>
