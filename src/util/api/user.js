import api from './index'
import request from '../request'

export function userInfo(params) {
  return request({
    url: api.userInfo,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取用户详情',
    hideloading: true,
    contentType: 'application/x-www-form-urlencoded'
  })
}


export function getUserPhoto(params) {
  return request({
    url: api.getUserPhoto,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取头像'
  })
}
