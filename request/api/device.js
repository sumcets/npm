import api from './index'
import request from '../request'

export function deviceList(params) {
  return request({
    url: api.deviceList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备列表'
  })
}

export function getDeviceDetail(params) {
  return request({
    url: api.deviceDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备详情'
  })
}

export function deviceDetailBib(params) {
  return request({
    url: api.deviceDetailBib,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备详情'
  })
}

export function devicePanel(params) {
  return request({
    url: api.devicePanel,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备看板'
  })
}

export function deviceTypeList(params) {
  return request({
    url: api.deviceTypeList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备类型'
  })
}

export function getWorkLine(params) {
  return request({
    url: api.workLine,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取车间产线'
  })
}

export function deviceStatusPanel(params) {
  return request({
    url: api.deviceStatusPanel,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备概况'
  })
}

export function deviceTypePanel(params) {
  return request({
    url: api.deviceTypePanel,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备类型统计'
  })
}

export function deviceLinePanel(params) {
  return request({
    url: api.deviceLinePanel,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备车间产线统计'
  })
}

export function deviceExist(params) {
  return request({
    url: api.deviceExist,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备'
  })
}

export function getDeviceFile(params) {
  return request({
    url: api.deviceFile,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备'
  })
}

export function deviceRunStatus(params) {
  return request({
    url: api.deviceRunStatus,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备运行状态'
  })
}

export function deviceRunList(params) {
  return request({
    url: api.deviceRunList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取设备列表'
  })
}

export function deviceRealTime(params) {
  return request({
    url: api.deviceRealTime,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '实时数据统计'
  })
}

export function useStatusList(params) {
  return request({
    url: api.useStatusList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '设备使用状态'
  })
}

export function deviceStatusData(params) {
  return request({
    url: api.deviceStatusData,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '设备使用状态'
  })
}


