## 🌟 InStar — Platform for Building Websites for Internet Influencers/Creators
InStar is a "personal main website SaaS system" specifically designed for content creators. It helps creators easily build their own brand homepages, enabling content aggregation, fan interaction, and diversified monetization.
Whether you are a video blogger, graphic blogger, knowledge lecturer, or live streaming talent, you can quickly create your own exclusive website through InStar. Say goodbye to platform constraints, accumulate private domain fans, and build an independent brand influence.
## ✨ Core Features
🎨 Visual Homepage Template Editor (supports module dragging and dropping, and customizes theme styles)
📹 Content Aggregation and Display (supports embedding content from multiple platforms such as Douyin, Bilibili, and Xiaohongshu)
🧑‍🤝‍🧑 Fan Interaction System (comments, private messages, check-ins, and communities)
💎 VIP Membership System (supports unlocking content with payment and fan levels)
🛒 Commodity Mall Module (supports the sale of digital goods, courses, and peripheral products)
📊 Data Analysis Dashboard (fans, content, and income are all clearly visible at a glance)
🌐 Independent Homepage Address (supports custom domain names and SEO optimization)
## 🚀 Technology Stack
Front-end: Next.js + TailwindCSS + shadcn/ui
Back-end: Next.js API Routes / Can be extended to NestJS, Fastify
Database: PostgreSQL + Prisma
Storage: Supabase Storage / S3 / Cloudflare R2
Authentication: auth.js
## File Structure
📁 app/ # App Router
├─ layout.tsx # Global Layout
├─ page.tsx # Home Page Rendering Logic (supports SSR/SSG)
├─ dashboard/ # Creator Backend Page
├─ site/[username]/ # Dynamic Rendering of User Home Page (can be statically generated)
└─ api/ # All Back-end API Interfaces
├─ auth/route.ts # Login/Registration
├─ template/ # Template Configuration Interface
├─ content/ # Content Management Interface
└─ shop/
## 🛠️ Target Audience
Content creators who want to establish an independent brand image
KOLs who want to accumulate private domain traffic and get rid of platform dependence
Bloggers or lecturers who have a fan base and want to expand their monetization methods
MCNs, educational institutions, and virtual IP operation teams