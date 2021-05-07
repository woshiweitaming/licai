<template>
	<view class="detail">
		<view class="menu">
			<view @click="changeMenu(index)" :class="['labels', index === active ? 'on' : '']" v-for="(curItem, index) in menuList" :key="index">
				{{getLang(curItem)}}
				<view class="line"></view>
			</view>
		</view>
		<view class="list" v-if="active == 0">
			<view class="labels">
				<view class="name">{{getLang('product_p17')}}</view>
				<view class="value">{{details.period}}{{getLang('product_p6')}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('product_p18')}}</view>
				<view class="value">{{details.progress}}%</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('product_p19')}}</view>
				<view class="value">{{details.deal_rate}}%</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('product_p20')}}</view>
				<view class="value">{{getLang('product_p46')}}</view>
			</view>
			<view class="labels">
				<view class="name">{{getLang('product_p21')}}</view>
				<view class="value">{{Number(details.min_amount).toFixed(2)}}{{getLang('product_p22')}}</view>
			</view>
			<view class="labels" v-if="details.flg == 0 || details.djs == 0">
				<view class="name">{{getLang('product_p43')}}</view>
				<view class="value">
					{{details.flg == 0 ? getLang('product_p44') : ''}}
					{{details.djs == 0 ? getLang('product_p45') : ''}}
				</view>
			</view>
		</view>
		<view class="list" v-if="active == 1">
			<view class="desc">
			{{getLang('product_p37')+details.min_amount+getLang('product_p42')+getLang('product_p39')+details.deal_rate+'%'+getLang('product_p40')+details.period+getLang('product_p41')+getTotal+getLang('product_p42')}}
			</view>
		</view>
		<view class="list" v-if="active == 2">
			<view class="desc">
			{{getLang('product_p35') +getLang('product_p36')}}
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Detail',
		mixins: [langMixins],
		props: ['details'],
		data(){
			return {
				menuList: ['product_p14', 'product_p15', 'product_p16'],
				active: 0,
				djs: 0
			}
		},
		methods: {
			changeMenu(index){
				this.active = index
			},
			countTimer(){
				const that = this
				this.djs--
				this.timer = setInterval(() => {
					that.djs--
					if(that.djs <= 0){
						clearInterval(that.timer)
						that.timer = null
						that.djs = 0
					}
				}, 1000)
			}
		},
		computed: {
			getTotal(){
				return (Number(this.details.min_amount || 0) * Number(this.details.deal_rate || 0) * Number(this.details.period || 0)).toFixed(2)
			},
			getDjs(){
				return this.djs >= 0 ? '' : `${this.djs}s`
			}
		},
		watch: {
			details: {
				handler(val){
					this.djs = val.djs
					this.countTimer()
				},
				deep: true,
				immediate: true
			}
		}
	}
</script>

<style scoped>
	.menu{
		display: flex;
		padding-bottom: 10upx;
		padding-top: 10upx;
		border-bottom: 1px solid #eee;
	}
	.menu .labels{
		width: 33.333%;
		text-align: center;
		line-height: 60upx;
		color: #999;
	}
	.menu .labels.on{
		color: #007AFF;
		font-weight: bold;
	}
	.menu .labels .line{
		width: 50upx;
		height: 8upx;
		border-radius: 10upx;
		background: #007AFF;
		margin: auto;
		display: none;
	}
	.menu .labels.on .line{
		display: block;
	}
	.list{
		padding: 20upx;
	}
	.list .labels{
		display: flex;
	}
	.list .labels .name{
		width: 40%;
		line-height: 60upx;
		font-size: 26upx;
		color: #666;
	}
	.list .labels .value{
		width: 60%;
		text-align: right;
		line-height: 60upx;
	}
	.desc{
		font-size: 26upx;
	}
</style>
