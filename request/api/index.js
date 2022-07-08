const api = {
  changePwd: '/tenants/employee/password',
  loginByPwd: '/u/login/pwd',
  loginBySms: '/u/login/phone',
  dingLogin: '/u/login/ding',
  wxLogin: '/u/login/wechat',
  userInfo: '/tenants/employee',
  deviceList: '/v1/device/list',
  tenants: '/tenants/org',
  deviceDetail: '/v1/device/details',
  devicePanel: '/v1/device/kanban',
  deviceTypeList: '/v1/device/type/list',
  workLine: '/v1/device/workLine/list',
  viewTenant: '/tenants/tenant',
  deviceStatusPanel: '/v1/device/statusStatistic',
  deviceTypePanel: '/v1/device/typeStatistic',
  deviceLinePanel: '/v1/device/workLineStatistic',
  viewDepartDetail: '/tenants/org/info',
  userDetail: '/u/userInfo/byId',
  deviceExist: '/v1/device/isExist',
  deviceFile: '/v1/device/deviceFileListGet',
  deviceDetailBib: '/v1/device/details/byId',
  deviceRunStatus: '/v1/device/runningStatus',
  deviceRunList: '/v1/device/IOTList',
  deviceRealTime: '/v1/device/realTimeAnalyze',
  knowledgeTagList: '/v1/device/deviceKnowledgeBase/tagList',
  knowledgeTagCreate: '/v1/device/deviceKnowledgeBase/tagCreate',
  knowledgeList: 'v1/device/deviceKnowledgeBase/list',
  knowledgeCreate: '/v1/device/deviceKnowledgeBase/create',
  knowledgeDetail: '/v1/device/deviceKnowledgeBase/details',
  reportRepairCreate: '/v1/device/repairWorkSheet/create',
  reportRepairDetail: '/v1/device/repairWorkSheet/detail',
  reportRepairDetailOrder: '/v1/device/repairWorkSheet/process',
  reportRepairList: '/v1/device/repairWorkSheet/list',
  reportStatusAys: '/work/statistic/status',
  reportTimeAys: '/work/statistic/time',
  reportTopAys: '/v1/device/workorder/statistic/top',
  intellectNeed: '/intellect/need',
  intellectNeedPanel: 'intellect/need/panel',
  orderTransition: '/v1/device/repairWorkSheet/transition',
  repairErrorTypeList: '/v1/device/repairWorkSheet/faultType/list', // 故障类型列表
  repairErrorReasonList: '/v1/device/repairWorkSheet/faultReason/list', // 故障原因列表
  repairStop: 'v1/device/repairWorkSheet/pause', // 暂停维修
  repairOver: '/v1/device/repairWorkSheet/receipt', // 验收通过或拒绝
  errorTypeCreate: '/v1/device/repairWorkSheet/faultType/create', // 故障类型创建
  errorReasonCreate: '/v1/device/repairWorkSheet/faultReason/create', // 故障原因创建
  repairSubmit: '/v1/device/repairWorkSheet/inrepair/submit',
  alarmList: '/warehouse/v1/alarm',
  alarmCreate: '/v1/device/alarm', // 创建报警
  alarmDetail: '/warehouse/v1/alarm/byId', // 告警详情
  alarmConfirm: '/alarm/info', // 现场确认告警
  alarmRemove: '/warehouse/v1/alarm/relieve', // 解除告警
  baijianTop5: '/v1/device/manageIndicator/spareParts', // 备件统计top5
  breakDownKpi: '/work/statistic/breakdown/kpi', // 故障分析
  faultRate: '/v1/device/faultRate/info', // 故障率完好率
  gmrData: '/v1/device/manangeQuota/GMR', // 管理指标稼动率
  faultRateType: 'v1/device/faultRate/type', // 故障类型统计
  faultRateReason: '/v1/device/faultRate/reason', // 故障原因统计
  repairKpi: '/work/statistic/kpi', // 维修指标
  teamMember: '/tenants/team/member', // 查询班组成员
  correlation: '/work/manage/correlation', // 维修id转报修
  gmrWorkLine: '/v1/device/gmr/workline', // 各产线稼动率
  gmrTimeStatistics: '/v1/device/gmr/timeStatistics', // 时间利用统计
  getTaskList: '/v1/device/patrol/app/task/list',
  taskStatstics: '/v1/device/patrol/app/task/statstics/status', // 点巡检任务统计
  taskRunStatis: '/v1/device/patrol/app/task/overview/status', // 任务执行概况
  taskDevStatis: '/v1/device/patrol/app/task/overview/devstatus', // 设备执行概况统计
  taskDevOrderStatis: '/v1/device/patrol/app/task/statstics/device', // 设备执行工单统计
  scanSpotChect: '/v1/device/patrol/app/record/byDeviceId', // 通过设备扫码进行点巡检
  spotTaskDetailList: '/v1/device/patrol/app/task/detail/list', //   记录列表（任务详情）
  spotJump: '/v1/device/patrol/app/task/detail/skip', //   未检跳过
  saveSpot: '/v1/device/patrol/app/record/save', // 保存点巡检项
  submitSpot: '/v1/device/patrol/app/record/submit', // 提交点巡检检查项
  spotOrderDetail: '/v1/device/patrol/app/record/byId',
  spotOrderPlanList: '/v1/device/patrol/app/names',
  spotOrderList: '/v1/device/patrol/app/record/list',
  spotRate: '/v1/device/efficiency/patrol/plan', // 点巡检计划指标
  spotDeviceRate: '/v1/device/efficiency/patrol/device', // 点巡检设备指标
  spotDeviceStatis: '/v1/device/efficiency/patrol/statistic/device', // 设备点巡检统计
  reportList: '/v1/device/efficiency/report/his',
  reportDetail: '/v1/device/efficiency/report/info',
  useStatusList: '/v1/device/deviceDict/valuelist',
  getUserPhoto: '/tenants/employee/detail',
  gjtj: '/v1/device/alarm/analy/time',
  alarmType: '/v1/device/alarm/analy/type',
  alarmWorkLine: '/v1/device/alarm/analy/workline',
  deviceStatusData: '/v1/device/status/statistic',
  spotCheckProcess: '/v1/device/patrol/app/task/detail/process',
  alarmTheme: '/alarm/dic/topic',
  alarmReason: '/alarm/model/list',
  alarmUpdate: '/v1/device/alarm',
  modifyPhoneSms: '/u/modifyPhone/send',
  modifyPhone: '/u/modifyPhone',
  delTag: '/v1/device/deviceKnowledgeBase/del',
  goodTagList: '/warehouse/v1/material/label/listh5',
  goodTagDetail: '/warehouse/v1/material/label/detail',
  goodsTagFlow: '/warehouse/v1/material/label/flow',
  goodsTabChaiBao: '/warehouse/v1/material/label/seperate',
  goodsTagStatusChange: '/warehouse/v1/material/label/trans_status',
  goodsTagDel: '/warehouse/v1/material/label/delete',
  goodsTagHeBao: '/warehouse/v1/material/label/combine',
  goodsList: '/warehouse/v1/material/manage/list',
  goodsSourceList: '/warehouse/v1/material/source/listweb',
  goodsTagCreate: '/warehouse/v1/material/label/create',
  goodsSourceDetail: '/warehouse/v1/material/source/detail',
  goodsDetail: '/warehouse/v1/material/manage/byId',
  goodsTagUpdate: '/warehouse/v1/material/label/update',
  getDepList: '/tenants/org/list',
  reportInStatus: '/warehouse/v1/store/statistic/status',
  reportInOutCount: '/warehouse/v1/store/statistic/inOut',
  reportPersonal: '/warehouse/v1/store/statistic/personal',
  goodsInList: '/warehouse/v1/store/enter/list',
  goodsOutList: '/warehouse/v1/store/out/list',
  goodsInDetail: '/warehouse/v1/store/enter/detail',
  goodsOutDetail: '/warehouse/v1/store/out/detail',
  goodsInOutFlow: '/warehouse/v1/store/flow',
  goodsDdic: '/warehouse/v1/dic/valuelist',
  goodsHouseList: '/tenants/warehouse/list',
  goodsSourceForGoodsList: '/warehouse/v1/material/source/material_list',
  createGoodsHouse: '/warehouse/v1/store/enter/create',
  goodsInOutTransStatus: '/warehouse/v1/store/flow/transStatus',
  selectUserList: '/tenants/team/apportion/target',
  goodsUpRecords: '/warehouse/v1/store/putaway/record',
  createOutStore: '/warehouse/v1/store/out/create',
  goodsCommonBid: '/tenants/warehouse/common/byId',
  putCreate: '/warehouse/v1/store/putaway/create',
  pickRecords: '/warehouse/v1/store/picking/record',
  pickList: '/warehouse/v1/picking/stock/list',
  pickRecordsCreate: '/warehouse/v1/store/picking/record/create',
  kcList: '/warehouse/v1/store/manage/material/list',
  cwList: '/warehouse/v1/store/manage/position',
  cascadeCommon: '/tenants/warehouse/common/cascade',
  kpiKey: '/warehouse/v1/intelligence/kpi/key',
  goodsDistribution: '/warehouse/v1/intelligence/kpi/distribution',
  personalKpi: '/warehouse/v1/intelligence/kpi/personal',
  inOutTypeAny: '/warehouse/v1/intelligence/delivery/type',
  deliverAlarm: '/warehouse/v1/intelligence/delivery/alarm',
  fixtureList: '/v1/worktool/list',
  fixtureDetail: '/v1/worktool/details',
  getFixtureDetail: '/v1/worktool/details/byId',
  mouldList: '/v1/mould/list',
  mouldDetail: '/v1/mould/details',
  getMouldDetail: '/v1/mould/details/byId'
}

export default api
