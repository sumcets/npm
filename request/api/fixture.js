import request from '../request'
import api from './index'

export function fixtureList(params) {
  return request({
    url: api.fixtureList,
    method: 'get',
    params,
    needToken: true,
    hideloading: true,
    loadingMsg: '获取工装列表'
  })
}

export function fixtureDetail(params) {
  return request({
    url: api.fixtureDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取工装详情'
  })
}

export function getFixtureDetail(params) {
  return request({
    url: api.getFixtureDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取工装详情'
  })
}

