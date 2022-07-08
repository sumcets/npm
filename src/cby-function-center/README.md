# CbyFunctionCenter 功能中心

### 介绍

CbyFunctionCenter 是功能中心通用业务模块,适用于`设备维保`、`监控安灯`、`资产效能`和`仓储管理`应用

### 引入

```js
import { CbyFunctionCenter } from 'cbc-ui';

components: { CbyFunctionCenter }
```

## 代码演示

### 基础用法

```html
<cby-function-center application-name="设备维保"/>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    | 可取值|
| ------------- | -------- | -------- | --------- |---------|
|applicationName|应用的name|_string_|`-`  |`APP_DEVICE` `APP_ANDON` `APP_EFFICIENCY` `APP_WAREHOUSE` `APP_KNOWLEDGE`|
