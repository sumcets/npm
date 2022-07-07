import api from './index'
import request from '../request'


export function goodTagList(params) {
  return request({
    url: api.goodTagList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取标签',
    hideloading: true
  })
}

export function goodTagDetail(params) {
  return request({
    url: api.goodTagDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取标签详情',
    hideloading: true
  })
}

export function goodsTagFlow(params) {
  return request({
    url: api.goodsTagFlow,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取标签流程',
    hideloading: true
  })
}

export function goodsTabChaiBao(data) {
  return request({
    url: api.goodsTabChaiBao,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '正在拆包',
    hideloading: true
  })
}

export function goodsTagStatusChange(data) {
  return request({
    url: api.goodsTagStatusChange,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '状态变迁',
    hideloading: true
  })
}

export function goodsTagDel(params) {
  return request({
    url: api.goodsTagDel,
    method: 'delete',
    params,
    needToken: true,
    loadingMsg: '删除标签',
    hideloading: true
  })
}

export function goodsTagHeBao(data) {
  return request({
    url: api.goodsTagHeBao,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '正在合包',
    hideloading: true
  })
}

export function goodsList(params) {
  return request({
    url: api.goodsList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取物料列表',
    hideloading: true
  })
}

export function goodsSourceList(params) {
  return request({
    url: api.goodsSourceList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取物料来源',
    hideloading: true
  })
}

export function goodsTagCreate(data) {
  return request({
    url: api.goodsTagCreate,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '新建标签',
    hideloading: true
  })
}

export function goodsSourceDetail(params) {
  return request({
    url: api.goodsSourceDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '来源详情',
    hideloading: true
  })
}

export function goodsDetail(params) {
  return request({
    url: api.goodsDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '物料详情',
    hideloading: true
  })
}

export function goodsTagUpdate(data) {
  return request({
    url: api.goodsTagUpdate,
    method: 'put',
    data,
    needToken: true,
    loadingMsg: '更新标签',
    hideloading: true
  })
}

export function reportInStatus(params) {
  return request({
    url: api.reportInStatus,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '状态统计',
    hideloading: true
  })
}

export function reportInOutCount(params) {
  return request({
    url: api.reportInOutCount,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '出入库执行统计',
    hideloading: true
  })
}

export function reportPersonal(params) {
  return request({
    url: api.reportPersonal,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '平均工单时长',
    hideloading: true
  })
}

export function goodsInList(params) {
  return request({
    url: api.goodsInList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '入库列表',
    hideloading: true
  })
}

export function goodsInDetail(params) {
  return request({
    url: api.goodsInDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '入库详情',
    hideloading: true
  })
}

export function goodsInOutFlow(params) {
  return request({
    url: api.goodsInOutFlow,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '出入库流程',
    hideloading: true
  })
}

export function goodsOutDetail(params) {
  return request({
    url: api.goodsOutDetail,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '出库详情',
    hideloading: true
  })
}

export function goodsDdic(params) {
  return request({
    url: api.goodsDdic,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取字典',
    hideloading: true
  })
}

export function goodsHouseList(params) {
  return request({
    url: api.goodsHouseList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取仓管',
    hideloading: true
  })
}

export function goodsSourceForGoodsList(params) {
  return request({
    url: api.goodsSourceForGoodsList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取物料列表',
    hideloading: true
  })
}

export function createGoodsHouse(data) {
  return request({
    url: api.createGoodsHouse,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '新建入库',
    hideloading: true
  })
}

export function goodsInOutTransStatus(data) {
  return request({
    url: api.goodsInOutTransStatus,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '变更状态',
    hideloading: true
  })
}

export function selectUserList(params) {
  return request({
    url: api.selectUserList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取派单人员'
  })
}

export function goodsUpRecords(params) {
  return request({
    url: api.goodsUpRecords,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '上架记录'
  })
}
export function createOutStore(data) {
  return request({
    url: api.createOutStore,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '出库中',
    hideloading: true
  })
}

export function goodsOutList(params) {
  return request({
    url: api.goodsOutList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '出库列表',
    hideloading: true
  })
}

export function goodsCommonBid(params) {
  return request({
    url: api.goodsCommonBid,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '',
    hideloading: false
  })
}
export function putCreate(data) {
  return request({
    url: api.putCreate,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '上架',
    hideloading: true
  })
}

export function pickRecords(params) {
  return request({
    url: api.pickRecords,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '拣货记录',
    hideloading: true
  })
}

export function pickList(params) {
  return request({
    url: api.pickList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '备货记录',
    hideloading: true
  })
}


export function pickRecordsCreate(data) {
  return request({
    url: api.pickRecordsCreate,
    method: 'post',
    data,
    needToken: true,
    loadingMsg: '新增拣货记录',
    hideloading: true
  })
}

export function kcList(params) {
  return request({
    url: api.kcList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '物料库存',
    hideloading: true
  })
}

export function cwList(params) {
  return request({
    url: api.cwList,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '库位库存',
    hideloading: true
  })
}

export function cascadeCommon(params) {
  return request({
    url: api.cascadeCommon,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取下拉数据',
    hideloading: true
  })
}

export function kpiKey(params) {
  return request({
    url: api.kpiKey,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取关键指标',
    hideloading: true
  })
}

export function goodsDistribution(params) {
  return request({
    url: api.goodsDistribution,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取物料分布',
    hideloading: true
  })
}

export function personalKpi(params) {
  return request({
    url: api.personalKpi,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取员工绩效分析',
    hideloading: true
  })
}

export function inOutTypeAny(params) {
  return request({
    url: api.inOutTypeAny,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取类型分析',
    hideloading: true
  })
}

export function deliverAlarm(params) {
  return request({
    url: api.deliverAlarm,
    method: 'get',
    params,
    needToken: true,
    loadingMsg: '获取库存告警',
    hideloading: true
  })
}

















