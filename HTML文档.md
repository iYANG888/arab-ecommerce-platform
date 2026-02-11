# 中阿跨境电商服务平台 - HTML 文档

## HTML 文件

### public/index.html
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="中阿跨境电商服务平台 - 语言+数智+财务+风控"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>中阿跨境电商服务平台</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

## HTML 结构说明

- **文档类型**: HTML5 标准文档类型声明
- **语言设置**: 中文简体 (`lang="zh-CN"`)
- **头部元信息**:
  - 字符编码: UTF-8
  - 视口设置: 响应式设计支持
  - 主题颜色: 黑色
  - 页面描述: 中阿跨境电商服务平台 - 语言+数智+财务+风控
  - 图标和清单文件配置
- **页面标题**: 中阿跨境电商服务平台
- **主体内容**:
  - 无脚本提示: 当 JavaScript 被禁用时显示
  - 根节点: `<div id="root"></div>` - React 应用挂载点