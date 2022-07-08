# CbyProfile 个人中心

### 介绍

CbyProfile 是个人中心通用业务模块,适用于全部应用

### 引入

```js
import { CbyProfile } from 'cbc-ui';

components: { CbyProfile }
```

## 代码演示

### 基础用法

```html
<cby-profile env="h5" version="Version 1.0.8"/>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |可取值|
| ------------- | -------- | -------- | --------- | --------- |
| runningEnv | 运行环境 | _string_ |`h5`| `dd` `wx` `h5` |
|applicationName|应用的name|_string_|`-`  |`APP_DEVICE` `APP_ANDON` `APP_EFFICIENCY` `APP_WAREHOUSE` `APP_KNOWLEDGE`|
|version|版本号|_string_|-|-|
