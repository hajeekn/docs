# 你打算部署到哪个平台?

- [Vercel](#vercel)
- [CloudFlareWorker](#cloudflareworker)
- [服务器](#服务器)
- [Heroku](#Heroku)




## Vercel

vercel给予了每个免费用户以下额度

- 月 100GB 流量
- 月 100GB·小时 运行时
- 超时 30s

vercel兼容**绝大多数**Wexagonal支持的数据库.

访问[部署 - Vercel](/deploy/vercel)来部署基于VercelRuntime的Wexagonal

## CloudFlareWorker

CloudFlare给予了每个免费用户以下Worker额度
- 日 10万次调用
- 日 无限流量
- 超时 50ms

CloudFlareWorker**只兼容原生CFKV和少量基于HTTP请求的数据库**.

访问[部署 - CloudFlareWorker](/deploy/cfworker)来部署基于CloudFlareWorker的Wexagonal




## Heroku

Heroku给予了每个免费用户以下额度
- 月 550小时 应用运行(绑定信用卡升至1000小时)
- 月 10TB 出站流量
- 半小时未激活后休眠,冷启动耗时3-5秒

heroku兼容**绝大多数**Wexagonal支持的数据库.

访问[部署 - Heroku](/deploy/heroku)来部署基于Heroku的Wexagonal


## 服务器

访问[部署 - 自托管](/deploy/server)来部署基于NodeJS的Wexagonal
