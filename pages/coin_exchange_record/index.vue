<template>
</template>

<script>
	import langMixins from '@/mixins/lang_mixins.js'
	import { getShoppingList } from '@/apis/users.js'
	export default {
		name: 'CoinExchangeRecord',
		mixins: [langMixins],
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.getLang('coin_exchange_record_p1')
			})
		}
	}
</script>

<style>
</style>
