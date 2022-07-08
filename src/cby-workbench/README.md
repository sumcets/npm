# CbyWorkbench 工作台

### 介绍

CbyWorkbench 是工作台通用业务模块,适用于`设备维保`、`监控安灯`、`资产效能`和`仓储管理`应用

### 引入

```js
import { CbyWorkbench } from 'cbc-ui';

components: { CbyWorkbench }
```

## 代码演示

### 基础用法

```html
<cby-workbench application-name="APP_WAREHOUSE" />
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    | 可取值|
| ------------- | -------- | -------- | --------- |---------|
| runningEnv          | 运行环境 | _string_ | `h5` | `dd` `wx` `h5`|
|searchPlaceholder|搜索Placeholder|_string_|`搜索`|-|
|applicationName|应用的name|_string_|`-`  |`APP_DEVICE` `APP_ANDON` `APP_EFFICIENCY` `APP_WAREHOUSE` `APP_KNOWLEDGE`|

### Slots

| 名称    | 说明     |
| ------- | -------- |
| main | 中间cell区域插槽 |
