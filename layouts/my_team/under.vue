<template>
	<view class="overview">
		<view class="card">
			<view class="menu">
				<view @click="changeMenu(index)" :class="['menu_label', index == cur ? 'on' : '']" v-for="(curItem, index) in menu" :key="index">
					{{getLang(curItem)}}
					<!-- <view class="point"></view> -->
				</view>
			</view>
			<view class="table">
				<view class="thead">
					<view class="th td1"></view>
					<view class="th td2" v-for="(curItem, index) in thead" :key="index">{{getLang(curItem)}}</view>
				</view>
				<view class="tbody">
					<DataList/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import DataList from '@/layouts/my_team/data_list.vue'
	import { getTeamMembers } from '@/apis/users.js'
	export default {
		name: 'Overview',
		mixins: [langMixins],
		components: {
			DataList
		},
		data(){
			return {
				menu: ['my_team_p14'],
				cur: 0,
				thead: ['my_team_p12', 'my_team_p13', 'my_team_p6', 'my_team_p7'],
				dataList: []
			}
		},
		methods: {
			changeMenu(index){
				this.cur = index
			},
		},
	}
</script>

<style scoped>
	.overview{
		padding: 20upx;
		position: relative;
		z-index: 2;
	}
	.card{
		background: #fff;
		border-radius: 20upx;
	}
	.menu{
		display: flex;
		margin-bottom: 20upx;
	}
	.menu .menu_label{
		width: 100%;
		text-align: center;
		font-size: 26upx;
		line-height: 80upx;
	}
	.menu .menu_label.on{
		color: #333;
		font-weight: bold;
	}
	.menu .menu_label.on .point{
		width: 10upx;
		height: 10upx;
		background: #0077FF;
		border-radius: 50%;
		margin: auto;
	}
	.table{
		background: #fff;
	}
	.thead{
		display: flex;
		background: #f8f8f8;
	}
	.td1{
		width: 60upx
	}
	.td2{
		width: calc(calc(100% - 60upx)/4);
	}
	.thead .th{
		text-align: center;
		line-height: 80upx;
		font-size: 26upx;
	}
</style>
