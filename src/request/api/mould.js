import request from '../request'
import api from './index'

export function mouldList(params) {
  return request({
    url: api.mouldList,
    method: 'get',
    params,
    needToken: true,
    hideloading: true,
    loadingMsg: '获取模具列表'
  })
}

export function mouldDetail(params) {
  return request({
    url: api.mouldDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取模具详情'
  })
}

export function getMouldDetail(params) {
  return request({
    url: api.getMouldDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取模具详情'
  })
}
