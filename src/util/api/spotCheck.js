import api from './index'
import request from '../request'

export function getTaskList(params) {
  return request({
    url: api.getTaskList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取点巡检任务列表'
  })
}

export function taskStatstics(params) {
  return request({
    url: api.taskStatstics,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取点巡检任务统计'
  })
}

export function taskRunStatis(params) {
  return request({
    url: api.taskRunStatis,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取点巡检任务执行概况'
  })
}

export function taskDevStatis(params) {
  return request({
    url: api.taskDevStatis,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取点巡检设备执行概况'
  })
}

export function taskDevOrderStatis(params) {
  return request({
    url: api.taskDevOrderStatis,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备被执行工单统计'
  })
}

export function scanSpotChect(params) {
  return request({
    url: api.scanSpotChect,
    method: 'get',
    params,
    needToken: true,
    hideLoading: true
  })
}

export function spotTaskDetailList(params) {
  return request({
    url: api.spotTaskDetailList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取记录列表'
  })
}

export function spotJump(data) {
  return request({
    url: api.spotJump,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '稍后'
  })
}

export function saveSpot(data) {
  return request({
    url: api.saveSpot,
    method: 'post',
    data,
    needToken: true,
    hideloading: true
  })
}

export function submitSpot(data) {
  return request({
    url: api.submitSpot,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '正在保存'
  })
}

export function spotOrderDetail(params) {
  return request({
    url: api.spotOrderDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取记录详情'
  })
}

export function spotOrderPlanList(params) {
  return request({
    url: api.spotOrderPlanList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取计划名称列表'
  })
}

export function spotOrderList(params) {
  return request({
    url: api.spotOrderList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取点巡检工单列表'
  })
}

export function spotRate(params) {
  return request({
    url: api.spotRate,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取点巡检计划指标'
  })
}

export function spotDeviceRate(params) {
  return request({
    url: api.spotDeviceRate,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取点巡检设备指标'
  })
}

export function spotDeviceStatis(params) {
  return request({
    url: api.spotDeviceStatis,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备点巡检统计'
  })
}

export function spotCheckProcess(params) {
  return request({
    url: api.spotCheckProcess,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取点巡检工单'
  })
}

