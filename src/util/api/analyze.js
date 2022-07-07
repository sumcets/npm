import api from './index'
import request from '../request'

export function baijianTop5(params) {
  return request({
    url: api.baijianTop5,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取top5数据'
  })
}

export function breakDownKpi(params) {
  return request({
    url: api.breakDownKpi,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取故障分析'
  })
}

export function faultRate(params) {
  return request({
    url: api.faultRate,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取故障率'
  })
}

export function gmrData(params) {
  return request({
    url: api.gmrData,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取稼动率'
  })
}

export function faultRateType(params) {
  return request({
    url: api.faultRateType,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取故障类型统计'
  })
}

export function faultRateReason(params) {
  return request({
    url: api.faultRateReason,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取故障原因统计'
  })
}

export function gmrWorkLine(params) {
  return request({
    url: api.gmrWorkLine,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取产线稼动率'
  })
}

export function gmrTimeStatistics(params) {
  return request({
    url: api.gmrTimeStatistics,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取时间利用统计'
  })
}
