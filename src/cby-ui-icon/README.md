# CbyUiIcon 按钮

### 介绍

CbyUiIcon 是一个基于vant和iconfont的icon组件

### 引入

```js
import { CbyUiIcon } from 'cbc-ui';
components: {
    CbyUiIcon
}
```

## 代码演示

### 基础用法

```html
<cby-ui-icon name="huiyuanjifen" size="25" color="#fff"/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| badge-props | 自定义徽标的属性，传入的对象会被透传给Badge 组件的 props | _BadgeProps_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `2em`，默认单位为 `px` | _number \| string_ | `inherit` |
| tag | 根节点对应的 HTML 标签名 | _string_ | `i` |

