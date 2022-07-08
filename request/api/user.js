import api from './index'
import request from '../request'

// 登录
export function loginByPwd(data) {
  return request({
    url: api.loginByPwd,
    method: 'post',
    data,
    needToken: false,
    loadingMsg: '登录中'
  })
}

export function loginBySmsOrGetSmsCode(data) {
  return request({
    url: api.loginBySms,
    method: 'post',
    data,
    needToken: false,
    loadingMsg: '登录中',
    hideloading: data.isSendCode
  })
}

export function dingLogin(data) {
  return request({
    url: api.dingLogin,
    method: 'post',
    data,
    needToken: false,
    loadingMsg: '登录中',
    hideloading: false
  })
}

export function wxLogin(data) {
  return request({
    url: api.wxLogin,
    method: 'post',
    data,
    needToken: false,
    loadingMsg: '登录中',
    hideloading: false
  })
}

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

export function getTenants(params) {
  return request({
    url: api.tenants,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取组织架构'
  })
}

export function viewTenant(params) {
  return request({
    url: api.viewTenant,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取用户详情'
  })
}

export function viewDepartDetail(params) {
  return request({
    url: api.viewDepartDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取部门详情'
  })
}

export function userDetail(params) {
  return request({
    url: api.userDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取用户详情'
  })
}

export function teamMember(params) {
  return request({
    url: api.teamMember,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取班组成员'
  })
}

export function changePwd(data) {
  return request({
    url: api.changePwd,
    method: 'put',
    data,
    needToken: true,
    loadingMsg: '重置密码'
  })
}

export function getDepList(params) {
  return request({
    url: api.getDepList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取部门列表'
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
export function modifyPhoneSms(data) {
  return request({
    url: api.modifyPhoneSms,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '获取验证码'
  })
}

export function modifyPhone(data) {
  return request({
    url: api.modifyPhone,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '更改中'
  })
}
