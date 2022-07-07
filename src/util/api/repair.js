import api from './index'
import request from '../request'

export function reportRepairCreate(data) {
  return request({
    url: api.reportRepairCreate,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '正在提交'
  })
}

export function reportStatusAys(params) {
  return request({
    url: api.reportStatusAys,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取报修统计'
  })
}

export function reportTimeAys(params) {
  return request({
    url: api.reportTimeAys,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取报修统计'
  })
}

export function reportTopAys(params) {
  return request({
    url: api.reportTopAys,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取报修统计'
  })
}

export function reportRepairList(params) {
  return request({
    url: api.reportRepairList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取报修记录'
  })
}

export function reportRepairDetail(params) {
  return request({
    url: api.reportRepairDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取报修详情'
  })
}

export function reportRepairDetailOrder(params) {
  return request({
    url: api.reportRepairDetailOrder,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取工单流程'
  })
}

export function orderTransition(data) {
  return request({
    url: api.orderTransition,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '请稍后'
  })
}

export function repairErrorTypeList(params) {
  return request({
    url: api.repairErrorTypeList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取故障类型'
  })
}

export function repairErrorReasonList(params) {
  return request({
    url: api.repairErrorReasonList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取故障原因'
  })
}

export function repairStop(data) {
  return request({
    url: api.repairStop,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '提交'
  })
}

export function repairOver(data) {
  return request({
    url: api.repairOver,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '提交'
  })
}

export function errorTypeCreate(data) {
  return request({
    url: api.errorTypeCreate,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '提交'
  })
}

export function errorReasonCreate(data) {
  return request({
    url: api.errorReasonCreate,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '提交'
  })
}

export function repairSubmit(data) {
  return request({
    url: api.repairSubmit,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '提交'
  })
}

export function repairKpi(params) {
  return request({
    url: api.repairKpi,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取维修指标'
  })
}
