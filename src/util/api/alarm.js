import api from './index'
import request from '../request'

export function alarmCreate(data) {
  return request({
    url: api.alarmCreate,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '提交'
  })
}

export function alarmList(params) {
  return request({
    url: api.alarmList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取告警列表'
  })
}

export function alarmDetail(params) {
  return request({
    url: api.alarmDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取告警详情'
  })
}

export function alarmConfirm(data) {
  return request({
    url: api.alarmConfirm,
    method: 'put',
    data,
    needToken: true,
    loadingMsg: '现场确认告警'
  })
}

export function alarmRemove(data) {
  return request({
    url: api.alarmRemove,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '解除告警'
  })
}

// 维修id转报修id
export function correlation(params) {
  return request({
    url: api.correlation,
    method: 'get',
    params,
    needToken: true,
    hideloading: true
  })
}

export function gjtj(params) {
  return request({
    url: api.gjtj,
    method: 'get',
    params,
    needToken: true,
    hideloading: true
  })
}

export function getAlarmType(params) {
  return request({
    url: api.alarmType,
    method: 'get',
    params,
    needToken: true,
    hideloading: true
  })
}

export function alarmWorkLine(params) {
  return request({
    url: api.alarmWorkLine,
    method: 'get',
    params,
    needToken: true,
    hideloading: true
  })
}

export function alarmTheme(params) {
  return request({
    url: api.alarmTheme,
    method: 'get',
    params,
    needToken: true,
    hideloading: true
  })
}
export function alarmReason(params) {
  return request({
    url: api.alarmReason,
    method: 'get',
    params,
    needToken: true,
    hideloading: true
  })
}

export function alarmUpdate(data) {
  return request({
    url: api.alarmUpdate,
    method: 'put',
    data,
    needToken: true,
    hideloading: true
  })
}








