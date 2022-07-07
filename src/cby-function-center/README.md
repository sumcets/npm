# CbyFunctionCenter 功能中心

### 介绍

CbyFunctionCenter 是功能中心通用业务模块

### 引入

```js
import Vue from 'vue';
import { CbyFunctionCenter } from 'cbc-ui';

components: { CbyFunctionCenter }
```

## 代码演示

### 基础用法

```html
<cby-function-center running-env="dd" application-name="设备维保"/>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| runningEnv          | 运行环境 | _string_ | `h5`（可取值dd、wx、h5） |
| applicationName | app的name | _string_ | -         |
