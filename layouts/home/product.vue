<template>
	<view class="product">
		<view class="product_label" v-if="recommondList.length > 0">
			<view class="uni-padding-wrap">
			    <view class="page-section swiper">
			        <view class="page-section-spacing">
			            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			                <swiper-item v-for="(curItem, index) in recommondList" :key="index">
			                    <view class="box">
									<view class="name">{{curItem.pro_name}}</view>
									<view class="profit">{{curItem.year_income}}<text class="sub"style="color: #927c53;">{{curItem.describe_text}}</text></view>
									<view class="tag">
										<u-tag :text="el" v-for="(el, idx) in curItem.label" :type="getTagType(el)" :key="idx" />
									</view>
									<view class="btns" @click="toPage(curItem)">{{getLang('home_p30')}}</view>
								</view>
			                </swiper-item>
			            </swiper>
			         </view>
			    </view>
			</view>
		</view>
		<view class="title">{{getLang('home_p4')}}<text class="sub">{{getLang('home_p5')}}</text><text @click="switchTab" class="more">{{getLang('home_p40')}}</text></view>
		<view class="product_label" @click="toPage(curItem)" v-for="(curItem, index) in productList" :key="index">
			<view class="name name2">
			   <view class="name_labels">
				   {{curItem.pro_name}}
				   <text class="sub" v-if="curItem.describe_text.length > 0" >| {{curItem.sub}}</text>
			   </view>
			   <view class="name_labels">
				   <view class="tag">
				   	  <u-tag :text="el" v-for="(el, idx) in curItem.label" :type="getTagType(el)" :key="idx" />
				   </view>
			   </view>
			</view>
			<view class="desc">
				<view class="boxes">
					<view class="profit">{{curItem.deal_rate}}%</view>
					<text class="names">{{getLang('home_p36')}}</text>
				</view>
				<view class="boxes pt">
					<view class="value">{{(curItem.period || 0) + getLang('home_p39')}}</view>
					<text class="names">{{curItem.min_amount + getLang('home_p38')}}</text>
				</view>
				<view class="boxes">
					<view class="btns blue">{{getLang('home_p37')}}</view>
				</view>
			</view>
			<!-- <u-icon name="arrow-right" class="arrow_right" color="#999" size="28"></u-icon> -->
			<view class="progress">
				<view class="bar">
					<u-line-progress :height="15" :show-percent="false" active-color="#2979ff" :percent="Number(curItem.progress)"></u-line-progress>
				</view>
				<view class="value">{{curItem.progress}}%</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Product',
		mixins: [langMixins],
		props: ['recommondList', 'productList'],
		data(){
			return {
				background: ['color1', 'color2', 'color3'],
                indicatorDots: true,
                autoplay: true,
                interval: 2000,
                duration: 500,
			}
		},
		computed: {
			getTagType(){
				return (string) => {
					return string.length == 1 ? 'warning' : 'primary'
				}
			},
		},
		methods: {
			toPage(json){
				const urlParams = this.convertObj(json)
				uni.navigateTo({
					url: '/pages/product/index?'+urlParams
				})
			},
			convertObj(data) {
				let _result = [];
				for (let key in data) {
				  let value = data[key];
				  if (value.constructor == Array) {
				    value.forEach((_value) => {
				      _result.push(key + "=" + _value);
				    });
				  } else {
				    _result.push(key + '=' + value);
				  }
				}
				return _result.join('&');
			},
			switchTab(){
				uni.switchTab({
					url: '/pages/find/index'
				})
			}
		},
	}
</script>

<style scoped>
	.arrow_right{
		position: absolute;
		right: 20upx;
		top: 80upx;
	}
	.box{
		background: url('/static/images/home/product_bg.png');
		height: 100%;
		padding: 20upx;
		background-size: cover;
		border-radius: 20upx;
	}
	.btns{
		width: 240upx;
		margin-top: 20upx;
		background: #e5c298;
		border-radius: 60upx;
		text-align: center;
		line-height: 60upx;
		color: #fff;
	}
	.title{
		line-height: 80upx;
		font-size: 32upx;
		position: relative;
	}
	.title .sub{
		color: #aaa;
		font-size: 24upx;
		padding-left: 20upx;
	}
	.desc{
		display: flex;
	}
	.desc .boxes{
		width: 33.3333%;
		vertical-align: bottom;
	}
	.blue{
		background: #0077FF;
		width: 80%;
		display: inline-block;
	}
	.desc .boxes .names{
		color: #aaa;
		font-size: 24upx
	}
	.desc .boxes .value{
		line-height: 55upx;
		font-size: 35upx;
		font-weight: bold;
	}
	.desc .boxes:last-child{
		text-align: center;
	}
	.pt{
		padding-top: 18upx;
	}
	.progress{
		display: flex;
	}
	.progress .bar{
		width: 86%;
	}
	.progress .value{
		width: 15%;
		text-align: right;
		font-size: 24upx;
		vertical-align: top;
	}
	.name2{
		display: flex;
		margin-bottom: 20upx;
	}
	.name2 .name_labels:first-child{
		width: 60%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.name2 .name_labels:last-child{
		width: 40%;
		text-align: right;
	}
	.more{
		position: absolute;
		right: 0;
		font-size: 28upx;
		color: #999;
	}
</style>
