import api from './index'
import request from '../request'

export function reportList(params) {
  return request({
    url: api.reportList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '效能报告列表'
  })
}

export function reportDetail(params) {
  return request({
    url: api.reportDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '效能报告详情'
  })
}
