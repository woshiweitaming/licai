<template>
	<view class="data_list">
		<u-empty style="margin-top: 20upx;" :text="getLang('common_p5')" mode="list" v-if="dataList.length === 0" icon-size="80"></u-empty>
		<view class="tr tr1" v-for="(curItem, index) in dataList" :key="index">
			<view class="td td1" @click="toggle(curItem.uid, index)">{{curItem.isOpen ? '-' : '+'}}</view>
			<view class="td td2">{{curItem.account}}</view>
			<view class="td td2">{{curItem.createtime.split(' ')[0].replace(/-/g, '/')}}</view>
			<view class="td td2" style="color: #f33d3d;">{{curItem.totalRecharge}}</view>
			<view class="td td2" style="color: #68ac43;">{{curItem.totalWithdraw}}</view>
			
			<view style="display: flex; width: 100%; padding-left: 10upx; background: rgba(0,0,0,.03);" v-if="curItem.isOpen">
				<view class="tr" v-show="curItem.child.length > 0" v-for="(item, idx) in curItem.child" :key="idx">
					<view class="td td1" v-if="item.isOpen" @click="toggle(item.uid, index, idx)">-</view>
					<view class="td td1" v-else @click="toggle(item.uid, index, idx)">{{item.isOpen ? '-' : '+'}}</view>
					<view class="td td2">{{item.account}}</view>
					<view class="td td2">{{item.createtime.split(' ')[0].replace(/-/g, '/')}}</view>
					<view class="td td2" style="color: #f33d3d;">{{item.totalRecharge}}</view>
					<view class="td td2" style="color: #68ac43;">{{item.totalWithdraw}}</view>
					
					<view style="display: flex; width: 100%; padding-left: 20upx; background: rgba(0,0,0,.01);" v-if="item.isOpen">
					    <view class="tr" v-show="item.child.length > 0" v-for="(value, key) in item.child" :key="key">
						    <view class="td td1"></view>
					    	<view class="td td2">{{value.account}}</view>
					    	<view class="td td2">{{value.createtime.split(' ')[0].replace(/-/g, '/')}}</view>
					    	<view class="td td2" style="color: #f33d3d;">{{value.totalRecharge}}</view>
					    	<view class="td td2" style="color: #68ac43;">{{value.totalWithdraw}}</view>
					    </view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { getTeamMembers } from '@/apis/users.js'
	export default {
		name: 'DataList',
		mixins: [langMixins],
		data(){
			return {
				dataList: []
			}
		},
		methods: {
			async getTeamMembersData(pid, pIndex1, pIndex2){
				const res = await getTeamMembers({pid})
				const data = res.data.map(d => {
					d.isOpen = false
					d.child = []
					return d
				})
				if(typeof pid == 'undefined' && typeof pIndex1 == 'undefined' && typeof pIndex2 == 'undefined'){
					return this.dataList = data
				}
				if(pIndex1 >= 0 && pIndex2 >= 0){
					this.dataList[pIndex1].child[pIndex2].child = data
					return this.dataList[pIndex1].child[pIndex2].isOpen = !this.dataList[pIndex1].child[pIndex2].isOpen
				}
				if(pIndex1 >= 0){
					this.dataList[pIndex1].child = data
					return this.dataList[pIndex1].isOpen = !this.dataList[pIndex1].isOpen
				}
			},
			toggle(pid, pIndex1, pIndex2){
				this.getTeamMembersData(pid, pIndex1, pIndex2)
			}
		},
		created() {
			this.getTeamMembersData()
		}
	}
</script>

<style scoped>
	.data_list{
		width: 100%;
	}
	.data_list .tr{
		width: 100%;
		display: flex;
		color: #666;
		flex-wrap: wrap;
		border-bottom: 1px solid #f9f9f9;
	}
    .data_list .tr .td{
		text-align: center;
		line-height: 80upx;
		font-size: 24upx;
	}
	.td1{
		width: 60upx
	}
	.td2{
		width: calc(calc(100% - 60upx)/4);
	}
	.tr1{
		border-bottom: 3px solid #efefef !important
	}
	.tr1:last-child{
		border-bottom: none!important
	}
</style>
