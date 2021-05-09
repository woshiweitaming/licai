<template>
	<view class="sign">
		<view class="btns_box">
			<view class="labels">
				<view class="button button1" @click="save"><view class="txt">{{getLang('sign_p2')}}</view></view>
			</view>
			<view class="labels">
			    <view class="button button2" @click="clear"><view class="txt">{{getLang('sign_p3')}}</view></view>
			</view>
		</view>
		<view class="sign_main">
			<canvas id="canvas" disable-scroll="true" class="canvas" canvas-id="cid" @touchstart="starts"
			 @touchmove="moves" @touchend="end"></canvas>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import tips from '@/utils/tips.js'
	export default {
		name: 'Sign',
		mixins: [langMixins],
		data(){
			return {
				resultUrl: '',
				dom: null,
				line: [],
				radius: 0
			}
		},
		methods: {
			end(e) {
			
			},
			distance(a, b) {
				let x = b.x - a.x;
				let y = b.y - a.y;
				return Math.sqrt(x * x + y * y);
			},
			starts(e) {
				this.line.push({
					points: [{
						time: new Date().getTime(),
						x: e.touches[0].x,
						y: e.touches[0].y,
						dis: 0
					}]
				})
				let currentPoint = {
					x: e.touches[0].x,
					y: e.touches[0].y
				}
				this.currentPoint = currentPoint
				this.drawer(this.line[this.line.length - 1])
			},
			moves(e) {
				let point = {
					x: e.touches[0].x,
					y: e.touches[0].y
				}
				this.lastPoint = this.currentPoint,
					this.currentPoint = point
				this.line[this.line.length - 1].points.push({
					time: new Date().getTime(),
					x: e.touches[0].x,
					y: e.touches[0].y,
					dis: this.distance(this.currentPoint, this.lastPoint)
				})
				this.drawer(this.line[this.line.length - 1])
			},
			drawer(item) {
				let x1, x2, y1, y2, len, radius, r, cx, cy, t = 0.5,
					x, y;
				var time = 0;
				if (item.points.length > 2) {
					let lines = item.points[item.points.length - 3];
					let line = item.points[item.points.length - 2];
					let end = item.points[item.points.length - 1];
					x = line.x;
					y = line.y;
					x1 = lines.x;
					y1 = lines.y;
					x2 = end.x;
					y2 = end.y;
					// console.log(x, y)
					var dis = 0;
					time = (line.time - lines.time) + (end.time - line.time)
					dis = line.dis + lines.dis + end.dis;
					var dom = uni.createCanvasContext('cid');
					var or = Math.min(time / dis * this.linePressure + this.lineMin, this.lineMax);
					// P0（x1,y1）,P2(x2,y2), P1(cx,cy)起点，终点，控制点
					cx = (x - (Math.pow(1 - t, 2) * x1) - Math.pow(t, 2) * x2) / (2 * t * (1 - t))
					cy = (y - (Math.pow(1 - t, 2) * y1) - Math.pow(t, 2) * y2) / (2 * t * (1 - t))
					dom.setLineCap('round')
					dom.beginPath();
					// dom.strokeStyle = 'black';
					dom.setStrokeStyle('black')
					dom.setLineWidth(5)
					// dom.lineWidth = 5;
					// 起始点
					dom.moveTo(x1, y1);
					dom.quadraticCurveTo(cx, cy, x2, y2);
					dom.stroke();
					dom.draw(true)
				}
			},
			clear() {
				this.dom.clearRect(0, 0, 1000, 1000)
				this.dom.draw()
				this.line = []
			},
			save() {
				if(this.line.length === 0){
					return tips.showToast(this.getLang('sign_p4'))
				}
				var t=this;
				uni.canvasToTempFilePath({
					canvasId: 'cid',
					fileType: 'png',
					quality: 1, //图片质量
					success(res) {
						// console.log(res.tempFilePath)
					}
				})
			}
		},
		onShow(){
			this.dom = uni.createCanvasContext('cid');
			if(typeof plus !== 'undefined'){
				plus.screen.lockOrientation('landscape-primary')
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('sign_p1')
			})
		},
		onBackPress() {
			if(typeof plus !== 'undefined'){
				plus.screen.unlockOrientation('landscape-primary')
			}
		}
	}
</script>

<style coped>
	page{
		height: 100%;
	}
	.sign{
		width: 100%;
		height: 100%;
		padding: 40upx;
		display: flex;
	}
	.sign_main{
		flex: 1;
		height: 100%;
		background: #fff;
		border: 2px dashed #eee;
		border-radius: 40upx;
		margin-left: 20rpx;
	}
	.canvas{
		width: 100%;
		height: 100%;
	}
	.btns_box{
		width: 80rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.btns_box .labels{
		padding: 10upx;
		height: 50%;
	}
	.button{
		height: 100%;
		border-radius: 40upx;
		padding-top: 550%;
	}
	.button1{
		background: #0077FF;
		color: #fff;
	}
	.button2{
		background: #fff;
		border: 1px solid #eee;
	}
	.txt{
		-webkit-transform: rotate(90deg);
		font-size: 28rpx
	}
</style>
