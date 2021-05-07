import request from '../request/request.js'

//推荐产品
export const getRecommend = (data) => {
	return request({
		url: '/pub/getRecommend',
		method: 'get',
		data
	})
}
//产品列表
export const getIndexProject = (data) => {
	return request({
		url: '/pub/getIndexProject',
		method: 'get',
		data
	})
}
//图片验证码
export const getShearCaptch = (data) => {
	return request({
		url: '/pub/getShearCaptcha',
		method: 'get',
		data
	})
}
//快捷跳转
export const getNewsUrl = (data) => {
	return request({
		url: '/pub/getNewsUrl',
		method: 'get',
		data
	})
}
//获取栏目
export const getColumnList = (data) => {
	return request({
		url: '/pub/getColumnList',
		method: 'get',
		data
	})
}
//获取项目瀑布流
export const getProjectList = (data) => {
	return request({
		url: '/pub/getProjectList',
		method: 'get',
		data
	})
}
//获取富文本
export const getAgreementUrl = (data) => {
	return request({
		url: '/pub/getAgreementUrl',
		method: 'get',
		data
	})
}
//获取客服
export const getKfUrl = (data) => {
	return request({
		url: '/pub/getKfUrl',
		method: 'get',
		data
	})
}
//获取是否更新
export const getUpdate = (data) => {
	return request({
		url: '/pub/getUpdate',
		method: 'get',
		data,
	})
}

//获取商品列表
export const getShoppingList = (data) => {
	return request({
		url: '/pub/getShoppingList',
		method: 'get',
		data,
	})
}

//获取公告列表
export const getNoticeList = (data) => {
	return request({
		url: '/pub/getNoticeList',
		method: 'get',
		data,
	})
}

//获取公告详情
export const getDetails = (data) => {
	return request({
		url: '/pub/getDetails',
		method: 'get',
		data,
	})
}

//获取资讯列表
export const getNewsList= (data) => {
	return request({
		url: '/pub/getNewsList',
		method: 'get',
		data,
	})
}

//获取资讯详情
export const getNewsDetails= (data) => {
	return request({
		url: '/pub/getNewsDetails',
		method: 'get',
		data,
	})
}

//获取等级描述
export const getLevelDescribe = (data) => {
	return request({
		url: '/pub/getLevelDescribe',
		method: 'get',
		data,
	})
}