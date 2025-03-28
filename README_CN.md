## 🌟 InStar — 网红/创作者个人主站构建平台
InStar 是一款专为内容创作者设计的「个人主站 SaaS 系统」，帮助创作者轻松搭建属于自己的品牌主页，实现内容聚合、粉丝互动和多元变现。

无论你是视频博主、图文博主、知识讲师，还是直播达人，都可以通过 InStar 快速创建自己的专属站点，告别平台束缚，沉淀私域粉丝，打造独立品牌影响力。

## ✨ 核心功能
🎨 可视化首页模板编辑器（支持模块拖拽、主题样式自定义）
📹 内容聚合展示（支持嵌入抖音、B站、小红书等多平台内容）
🧑‍🤝‍🧑 粉丝互动系统（评论、私信、打卡、社群）
💎 VIP 会员系统（支持付费解锁内容与粉丝等级）
🛒 商品商城模块（支持数字商品与课程/周边销售）
📊 数据分析看板（粉丝、内容、收入一目了然）
🌐 独立主页地址（支持自定义域名与SEO优化）

## 🚀 技术栈
前端：Next.js + TailwindCSS + shadcn/ui
后端：Next.js API Routes / 可拓展至 NestJS、Fastify
数据库：PostgreSQL + Prisma
存储：Supabase Storage / S3 / Cloudflare R2
认证：auth.js

## 文件结构
📁 app/                 # App Router
 ├─ layout.tsx         # 全局布局
 ├─ page.tsx           # 主页渲染逻辑（支持 SSR/SSG）
 ├─ dashboard/         # 创作者后台页面
 ├─ site/[username]/   # 用户主页动态渲染（可静态生成）
 └─ api/               # 所有后端 API 接口
     ├─ auth/route.ts  # 登录/注册
     ├─ template/      # 模板配置接口
     ├─ content/       # 内容管理接口
     └─ shop/

## 🛠️ 适用人群
想建立独立品牌形象的内容创作者
想沉淀私域流量，摆脱平台依赖的 KOL
具备粉丝基础，想扩展变现方式的博主或讲师
MCN、教育机构、虚拟 IP 运营团队