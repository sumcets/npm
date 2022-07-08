import api from './index'
import request from '../request'

export function tagList(params) {
  return request({
    url: api.knowledgeTagList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取标签列表'
  })
}

export function knowledgeList(params) {
  return request({
    url: api.knowledgeList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取知识库列表'
  })
}

export function knowledgeDetail(params) {
  return request({
    url: api.knowledgeDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取知识库详情'
  })
}

export function tagCreate(data) {
  return request({
    url: api.knowledgeTagCreate,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '正在新建标签'
  })
}

export function knowledgeCreate(data) {
  return request({
    url: api.knowledgeCreate,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '正在上传'
  })
}
export function delTag(data) {
  return request({
    url: api.delTag,
    method: 'delete',
    data,
    needToken: true,
    loadingMsg: '正在删除',
    contentType: 'application/form-data'
  })
}
