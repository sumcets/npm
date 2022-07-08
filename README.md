# cbc-ui业务组件库


### 介绍
cbc-ui业务组件库
[文档](http://cbc.sumcet.com/)

### 引入

```js
import Vue from 'vue';
import { CbyProfile } from 'cbc-ui';

components: { CbyProfile }
```
### Props

| 参数          | 说明     | 类型     | 默认值    | 可选值|
| ------------- | -------- | -------- | --------- | --------- |
| runningEnv          | 运行环境 | _string_ | `h5` | `dd` `wx` `h5`|
|applicationName|应用的name|_string_|`-`  |`APP_DEVICE` `APP_ANDON` `APP_EFFICIENCY` `APP_WAREHOUSE` `APP_KNOWLEDGE`|
