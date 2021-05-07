<template>
	<view class="information">
		<rich-text :nodes="content"></rich-text>
	</view>
</template>

<script>
	import { getNewsDetails } from '@/apis/publics.js'
	import langMixins from '@/mixins/lang_mixins.js'
	export default {
		name: 'Transfer',
		mixins: [langMixins],
		data(){
			return {
				content: ''
			}
		},
		methods: {
			async getNewsDetailsHandler(aid){
				const res = await getNewsDetails({aid})
				uni.setNavigationBarTitle({
					title: res.data.title
				})
				this.content = res.data.content.replace(/<p([\s\w"=\/\.:;]+)((?:(style="[^"]+")))/ig, '<p')
                .replace(/<p>/ig, '<p style="font-size: 15px; line-height: 25px;">')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(height="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(width="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(style="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)((?:(alt="[^"]+")))/ig, '<img$1')
                .replace(/<img([\s\w"-=\/\.:;]+)/ig, '<img style="width: 100%;" $1');
			}
		},
		onLoad(opt) {
			this.getNewsDetailsHandler(opt.aid)
		},
	}
</script>

<style scoped>
	.information{
		padding: 20upx;
	}
</style>
