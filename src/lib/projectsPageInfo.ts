import { ProjectShowcaseCardProps } from "@/types/projectsPageInfo";

export const PROJECTS_BASIC_INFO = {
  title: "Featured Projects",
  description:
    "Danh sách các dự án tiêu biểu minh hoạ năng lực phát triển phần mềm, xây dựng hệ thống và giải quyết bài toán thực tế.",
  linkToGitHub: "https://github.com/ngocnh05",
};

export const PROJECTS_DETAILS: ProjectShowcaseCardProps[] = [
  {
    title: "[Dự án 1: Ví dụ - Hệ thống Web Application Fullstack]",
    description:
      "[Ghi chú: Mô tả tổng quan dự án 2 - 3 câu: Mục tiêu dự án, người dùng hướng đến, các tính năng chính và kiến trúc bạn xây dựng...]",
    techs: ["React / Next.js", "Node.js / Express", "TypeScript", "Tailwind CSS", "PostgreSQL / MongoDB"],
    codeUrl: "#",
    detailUrl: "#",
    media: {
      type: "image",
      src: "",
      alt: "Project Placeholder",
    },
  },
  {
    title: "[Dự án 2: Ví dụ - Nền tảng E-Commerce / Quản lý]",
    description:
      "[Ghi chú: Mô tả các tính năng cốt lõi (Xác thực người dùng, Giỏ hàng, Thanh toán, Dashboard phân tích dữ liệu, Tối ưu SEO/hiệu năng)...]",
    techs: ["Next.js", "Prisma / Drizzle", "PostgreSQL", "Stripe API", "Docker"],
    codeUrl: "#",
    detailUrl: "#",
    media: {
      type: "image",
      src: "",
      alt: "Project Placeholder",
    },
  },
  {
    title: "[Dự án 3: Ví dụ - Hệ thống API Services & Microservices]",
    description:
      "[Ghi chú: Mô tả bài toán kỹ thuật, cách bạn thiết kế RESTful/GraphQL API, tối ưu tốc độ phản hồi, xử lý hàng đợi (Queue) hoặc CI/CD...]",
    techs: ["Python / FastAPI", "Redis Caching", "Docker", "AWS / GCP", "GitHub Actions"],
    codeUrl: "#",
    detailUrl: "#",
    media: {
      type: "image",
      src: "",
      alt: "Project Placeholder",
    },
  },
];
