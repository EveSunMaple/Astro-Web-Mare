---
title: '服务器指令大全'
description: '服务器指令大全'
pubDate: 'Jun 06 999'
image: '/home.webp'
tags:
  - 公告
badge: 指令大全
---
##  服务器菜单

### 召唤侧边栏菜单

将视角拉到最高，点按shift一次以召唤菜单，点击【轮播】等选项可以开启侧边栏

模式相关

/c将模式设置为旁观者模式

/s将模式设置为生存模式

位置相关

/here发送当前坐标给所有人

传送相关：

玩家间tp

/tpa <目标玩家>  请求传送到 xxx 玩家

/tpahere <目标玩家>  请求玩家传送到你这儿

/tpaccept <目标玩家>  接受传送请求

/tpdeny <目标玩家>  拒绝传送请求

（也可以通过如图可视化UI进行拒绝/同意）
![](/server-tp.png)

家相关(/home)

/home set <名称>    设置家

/home list    显示所有已保存位置的家

/home tp <名称>传送至家(注：如果只设置了一个家，可以不写家的名称这个参数)

/home delete <名称>删除家

地标相关（/warp）

/warp set <名称>设置个新的地标

/warp list显示所有已保存位置的地标

/warp tp <名称>传送至某地标(注：不同于家的指令，即使只设置了一个地标，名称的参数仍需填写)

/warp delete <名称>删除某地标

/spawn类

/spawn set设置传送点

/spawn [tp] 传送至设置的传送点（"tp"字段可省略

（不同于/home或/warp，当前指令只能设置一个）

其他
/back  返回传送前的位置

/rtp或/randomteleport  传送至随机位置

随身工具
/workbench打开工作台(类似于随身工作台)

/enderchest打开自己的末影箱（不能打开别人的）