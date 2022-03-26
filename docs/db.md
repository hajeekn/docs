# 你打算使用什么数据库?

- [MongoDB](#mongodb)

## MongoDB


1. 进入MONGODB官网<https://www.mongodb.com/>,点击右上角TryFree,登陆或注册

2. 新建一个`Cluster`,选择`Share`,为`Free`

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/1.jpg)

3. 选择提供商和数据库位置:

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/2.jpg)

通常情况下根据部署的平台位置,我们推荐这么选:

- **Vercel** us-west
- **SCF(HK)** ap-east hongkong 
- **Heroku** us-east && eu-west
- **服务器** 根据你所在服务器选择位置

4. QuickStart,选择以用户名和密码为验证方式,输入登陆用户名和密码

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/3.jpg)

保存用户名与密码

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/4.jpg)

5. 如何连接?选择`Cloud Environment`,配置`IP Access list`(ip白名单)

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/5.jpg)

6. 输入加入白名单的ip

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/6.jpg)

> IP Address应该填什么?
> - 如果对所有ip开放,则使用`0.0.0.0/0`
> - 如果只对一个ip开放,例如`10.10.10.10`,则输入`10.10.10.10/32`
> - 如果对一个ip段开放,请以CIDR地址块的方式写入

7. 保存配置并关闭

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/7.jpg)

8. 获取连接地址串

点击`Connect`按钮

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/8.jpg)

连接方式?`Connect Your Application`

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/9.jpg)


复制地址串,**记得替换`<password>`为第四步写入的密码**,保管好地址串!

![](https://npm.elemecdn.com/chenyfan-os@0.0.0-r15/10.jpg)

其格式应该如下:

```
mongodb+srv://<username>:<password>@xxx.mongodb.net/xxx?xxx=xxxx
```

保留这一串uri,进入[部署](/deploy)开始部署Wexgaonal主程序.