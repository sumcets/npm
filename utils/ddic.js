const APPNAME_DICT = {
    APP_DEVICE: 'device', // 设备维保
    APP_ANDON: 'andon', // 监控安灯
    APP_EFFICIENCY: 'efficiency', // 资产效能
    APP_WAREHOUSE: 'warehouse', // 仓储管理
    APP_KNOWLEDGE: 'knowledge' // 知识库
}

const DDICNAME_DDIC = {
    FUNCTION_CENTER: 'functionCenter', // 功能中心
    WORKBENCH_MENU: 'workbenchMenu', // 工作台菜单列表
}

const SOURCE_DATA = {
    // 功能中心
    functionCenter: {
        device: [
            {
                name: '点巡检管理',
                list: [
                    {
                        name: '点巡检计划',
                        path: '',
                        icon: 'jihua',
                        iconColor: '#fff',
                        iconBgColor: '#3572ff'
                    },
                    {
                        name: '计划工单',
                        path: '',
                        icon: 'xunjiandian',
                        iconColor: '#fff',
                        iconBgColor: '#00c297'
                    },
                    {
                        name: '任务工单',
                        path: '',
                        icon: 'dianxunjianguanli',
                        iconColor: '#fff',
                        iconBgColor: '#6467f0'
                    }
                ]
            },
            {
                name: '保养管理',
                list: [
                    {
                        name: '保养计划',
                        path: '',
                        icon: 'weibao',
                        iconColor: '#fff',
                        iconBgColor: '#ffc300'
                    },
                    {
                        name: '计划工单',
                        path: '',
                        icon: 'eyeWatch',
                        iconColor: '#fff',
                        iconBgColor: '#6467f0'
                    },
                    {
                        name: '任务工单',
                        path: '',
                        icon: 'tubiaozhizuomoban-135',
                        iconColor: '#fff',
                        iconBgColor: '#6467f0'
                    }
                ]
            },
            {
                name: '维修管理',
                list: [
                    {
                        name: '维修管理',
                        path: '',
                        icon: 'baoxiu1',
                        iconColor: '#fff',
                        iconBgColor: '#00c297'
                    }
                ]
            }
        ],
        andon: [
            {
                name: '',
                list: [
                    {
                        name: '设备看板',
                        path: '',
                        icon: 'liebiao1',
                        iconColor: '#fff',
                        iconBgColor: '#00c297'
                    },
                    {
                        name: '告警历史',
                        path: '',
                        icon: 'gaojingshijian',
                        iconColor: '#fff',
                        iconBgColor: '#ffc300'
                    }
                ]
            }
        ],
        efficiency: [
            {
                name: '资产管理',
                list: [
                    {
                        name: '设备台帐',
                        path: '',
                        icon: 'liebiao',
                        iconColor: '#fff',
                        iconBgColor: '#3572ff'
                    },
                    {
                        name: '模具台帐',
                        path: '',
                        icon: 'yunicon_mojuxinxi',
                        iconColor: '#fff',
                        iconBgColor: '#00c297'
                    },
                    {
                        name: '工装台帐',
                        path: '',
                        icon: 'huagongzhuangbei',
                        iconColor: '#fff',
                        iconBgColor: '#6467f0'
                    },
                    {
                        name: '备件列表',
                        path: '',
                        icon: 'beipinbeijian',
                        iconColor: '#fff',
                        iconBgColor: '#ffc300'
                    }
                ]
            },
            {
                name: '报告管理',
                list: [
                    {
                        name: '效能报告',
                        path: '',
                        icon: 'caidanshujutongji-copy',
                        iconColor: '#fff',
                        iconBgColor: '#6467f0'
                    }
                ]
            }
        ],
        warehouse: [
            {
                name: '物料管理',
                list: [
                    {
                        name: '物料标签',
                        path: '',
                        icon: '24gl-tags2',
                        iconColor: '#fff',
                        iconBgColor: '#3572ff'
                    }
                ]
            },
            {
                name: '出入库管理',
                list: [
                    {
                        name: '入库管理',
                        path: '',
                        icon: 'ruku-Warehousing',
                        iconColor: '#fff',
                        iconBgColor: '#6467f0'
                    },
                    {
                        name: '出库管理',
                        path: '',
                        icon: 'chukuguanli',
                        iconColor: '#fff',
                        iconBgColor: '#00c297'
                    }
                ]
            },
            {
                name: '库存管理',
                list: [
                    {
                        name: '库存管理',
                        path: '',
                        icon: 'cangkukucun',
                        iconColor: '#fff',
                        iconBgColor: '#6467f0'
                    },
                    {
                        name: '盘点工单',
                        path: '',
                        icon: 'zichanpandian',
                        iconColor: '#fff',
                        iconBgColor: '#3572ff'
                    }
                ]
            },
            {
                name: '告警管理',
                list: [
                    {
                        name: '告警历史',
                        path: '',
                        icon: 'gaojingshijian',
                        iconColor: '#fff',
                        iconBgColor: '#ffc300'
                    }
                ]
            }
        ],
        knowledge: []
    },

    // 工作台菜单列表
    workbenchMenu: {
        device: [
            {
                name: '点巡检工单',
                icon: 'xunjiandian',
                iconColor: '#fff',
                iconBgColor: '#00c297',
                path: ''
            },
            {
                name: '保养工单',
                icon: 'eyeWatch',
                iconBgColor: '#6467f0',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '维修管理',
                icon: 'baoxiu1',
                iconBgColor: '#3572ff',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '更多功能',
                icon: 'liebiao1',
                iconBgColor: '#d7d7d7',
                iconColor: '#fff',
                iconSize: '20',
                path: ''
            }
        ],
        andon: [
            {
                name: '设备看板',
                icon: 'tianjiazengjiajia',
                iconBgColor: '#00c297',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '告警历史',
                icon: 'gaojingshijian',
                iconBgColor: '#ffc300',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '更多功能',
                icon: 'liebiao1',
                iconBgColor: '#d7d7d7',
                iconColor: '#fff',
                iconSize: '20',
                path: ''
            }
        ],
        efficiency: [
            {
                name: '设备台帐',
                icon: 'liebiao',
                iconBgColor: '#3572ff',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '模具台帐',
                icon: 'yunicon_mojuxinxi',
                iconBgColor: '#00c297',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '工装台帐',
                icon: 'huagongzhuangbei',
                iconBgColor: '#6467f0',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '更多功能',
                icon: 'liebiao1',
                iconBgColor: '#d7d7d7',
                iconColor: '#fff',
                iconSize: '20',
                path: ''
            }
        ],
        warehouse: [
            {
                name: '物料标签',
                icon: '24gl-tags2',
                iconBgColor: '#3572ff',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '入库管理',
                icon: 'ruku-Warehousing',
                iconBgColor: '#6467f0',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '出库管理',
                icon: 'chukuguanli',
                iconBgColor: '#00c297',
                iconColor: '#fff',
                path: ''
            },
            {
                name: '更多功能',
                icon: 'liebiao1',
                iconBgColor: '#d7d7d7',
                iconColor: '#fff',
                iconSize: '20',
                path: ''
            }
        ],
        knowledge: []
    }
}

export function getDict(dictName, appName) {
    return SOURCE_DATA?.[ DDICNAME_DDIC?.[dictName]]?.[APPNAME_DICT?.[appName]] || []
}
