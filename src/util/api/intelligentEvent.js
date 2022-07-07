import api from './index'
import request from '../request'

export function intellectNeed(params) {
  return request({
    url: api.intellectNeed,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取待办事项'
  })
}

export function intellectNeedPanel(params) {
  return request({
    url: api.intellectNeedPanel,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取事务看板'
  })
}
