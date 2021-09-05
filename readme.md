# 浏览器工作原理

## 工作原理总论

**URl** -> `http`-> **HTML** -> `parse` -> **DOM** -> `css computing` -> **dom with css** -> `layout` -> **dom with position** -> `render` -> **bitmap**

## 状态机 ｜ 有限状态机

- 每一个状态都是一个机器
- 每一个机器知道下一个状态

mealy型状态机：每一个状态输出和当前状态以及输入有关
moore型状态机：每一个状态的输出只和当前状态有关，与输入无关

## HTTP请求

ISO-OSI七层网络模型
- 应用层 HTTP require('http')
- 表示层 HTTP require('http')
- 会话层 HTTP require('http')
- 传输层 TCP require('net')
- 网络层 INTERNET
- 数据链路层 4G/5G/WIFI
- 物理层 4G/5G/WIFI

TCP:
- 流
- 端口
- require('net')
IP:
- 包
- IP地址
- libnet/libpcap

HTTP：
- request
- response

