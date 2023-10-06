/***********************************

> 应用名称：Mix滤镜大师
> 软件版本：5.2.22
> 下载地址：https://apps.apple.com/cn/app/id913947918
> 脚本作者：LE
> 微信账号：墨鱼手记
> 解锁说明：解锁高级会员功能
> 更新时间：2023-08-06
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# > Mix（2023-10-06）@LE
^https?:\/\/cdn-bm\.camera360\.com\/api\/mix\/recovery url script-response-body https://github.com/ddgksf2013/MoYu/raw/master/MixProCrack.js


[mitm] 

hostname=cdn-bm.camera360.com

***********************************/





let body= $response.body;
var obj = JSON.parse(body);
obj.data.orderList = [{"expires_date":"2099-10-19 05:14:18 Etc/GMT","expires_date_pst":"2099-10-18 22:14:18 America/Los_Angeles","expires_date_ms":"4096019658000"}];
$done({body: JSON.stringify(obj)});
