<template>
	<view class="question">
		<image src="/static/images/product/5.png" class="title_icon" mode="widthFix"></image>
		<view class="question_list">
			<view class="labels" @click="toggle(index)" v-for="(curItem, index) in getDataList" :key="index">
				<view class="tag">{{getLang('question_p18')}}</view>
				<view class="name">{{getLang(curItem.title)}}<image src="/static/images/insurancePages/icon/down1.png" mode="widthFix" class="icon"></image></view>
				<view class="content" v-if="curItem.show">
					<view class="tag">{{getLang('question_p19')}}</view>
				   {{curItem.isTranslate ? getLang(curItem.content) : curItem.content}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Question',
		mixins: [langMixins],
		props: ['pname', 'period'],
		data(){
			return {
				dataList: [
					{
						title: 'question_p2',
						content: '',
						show: true,
						isTranslate: false
					},
					{
						title: 'question_p4',
						content: 'question_p5',
						show: false,
						isTranslate: true
					},
					{
						title: 'question_p6',
						content: 'question_p7',
						show: false,
						isTranslate: true
					},
				]
			}
		},
		methods: {
			toggle(index){
				this.dataList[index].show = !this.dataList[index].show
			}
		},
		computed:{
			getDataList(){
				console.log(this.dataList)
				return this.dataList
			}
		},
		watch: {
			pname: {
				handler(val){
					this.dataList[0].content = this.getLang('question_p3') + this.pname + this.getLang('question_p8') + this.period + this.getLang('question_p9')
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style scoped>
	.question{
		padding: 20upx;
	}
	.question .title{
		text-align: left;
		margin-bottom: 20upx;
		font-size: 30upx;
		font-weight: bold;
	}
	.question .labels{
		margin-bottom: 20upx;
		padding-left: 60upx;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	.question .name{
		padding: 20upx 10upx;
		position: relative;
		font-weight: bold;
	}
	.question .content{
		top: -10upx;
		padding: 20upx 20upx 40upx 10upx;
		font-size: 24upx;
		position: relative;
	}
	.question .tag{
		padding: 5upx;
		text-align: center;
		position: absolute;
		left: 20upx;
		top: 20upx;
		background: #feead1;
		font-size: 24upx;
		border-radius: 5upx;
		color: #c0795d;
	}
	.question .content .tag{
		left: -40upx;
		background: #ebf1fd;
		color: #007AFF;
	}
	.icon{
		width: 20upx;
		position: absolute;
		right: 20upx;
		top: 30upx;
	}
	.title_icon{
		width: 200upx;
	}
</style>
