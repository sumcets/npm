# CbyProfile 个人中心

### 介绍

CbyProfile 是个人中心通用业务模块

### 引入

```js
import Vue from 'vue';
import { CbyWorkbench } from 'cbc-ui';

components: { CbyWorkbench }
```

## 代码演示

### 基础用法

```html
<cby-workbench/>
```

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| env          | 运行环境 | _string_ | `h5`（可取值dd、wx、h5） |
|searchPlaceholder|搜索Placeholder|_string_|`搜索`|

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| logoutClick  | 点击退出登录触发 | - |
|changePhone|点击更改手机号触发|-|

### Slots

| 名称    | 说明     |
| ------- | -------- |
| main | 中间cell区域插槽 |
