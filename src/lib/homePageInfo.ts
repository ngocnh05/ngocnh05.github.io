import { basicInfoItem, whatIcandoItem } from "@/types/honePageInfo"

export const HOMEPAGE_BASIC_INFOR : basicInfoItem = {
    fullname: 'Nguyễn Thị Hồng Ngọc',
    position: 'SOFTWARE ENGINEER',
    desciption: '[Ghi chú: Viết 2 - 3 câu giới thiệu bản thân: Bạn là ai, chuyên môn chính của bạn là gì, thế mạnh nổi bật và giá trị bạn hướng tới mang lại cho dự án / công ty.]',
    linkToResume: '#'
}

export const LINK_IMAGE = [];

export const PLACEHOLDER_IMAGES = [
    { id: 1, title: 'Ảnh 1', dimension: '800 × 800 px', ratio: '1:1' },
    { id: 2, title: 'Ảnh 2', dimension: '800 × 800 px', ratio: '1:1' },
    { id: 3, title: 'Ảnh 3', dimension: '800 × 800 px', ratio: '1:1' },
];

export const WHATICANDO_INFO : whatIcandoItem = [
    {
        linkToImage: '',
        title: '[Ghi chú: Tiêu đề chuyên môn 1 - Ví dụ: FRONTEND / WEB DEVELOPMENT]',
        icons: [],
        contain: [
            '[Ghi chú: Nêu các ngôn ngữ & framework cốt lõi bạn thành thạo (ví dụ: React, Next.js, TypeScript, Tailwind CSS...)]',
            '[Ghi chú: Mô tả khả năng xây dựng giao diện: Responsive mọi thiết bị, tối ưu trải nghiệm người dùng UI/UX, animation mượt mà...]',
            '[Ghi chú: Nêu kinh nghiệm tích hợp API, tối ưu hiệu năng trang web (Core Web Vitals) hoặc các dự án đã thực hiện...]'
        ]
    },
    {
        linkToImage: '',
        title: '[Ghi chú: Tiêu đề chuyên môn 2 - Ví dụ: BACKEND & API SERVICES]',
        icons: [],
        contain: [
            '[Ghi chú: Nêu các công nghệ backend & database bạn sử dụng (ví dụ: Node.js, Express, Python/FastAPI, MongoDB, PostgreSQL...)]',
            '[Ghi chú: Mô tả khả năng thiết kế RESTful API, xác thực bảo mật (Auth/JWT), xử lý logic và tính toàn vẹn dữ liệu...]',
            '[Ghi chú: Nêu kinh nghiệm tối ưu cơ sở dữ liệu, caching dữ liệu, xử lý concurrency hoặc khả năng mở rộng hệ thống...]'
        ]
    },
    {
        linkToImage: '',
        title: '[Ghi chú: Tiêu đề chuyên môn 3 - Ví dụ: DEVOPS, SYSTEM & TOOLING]',
        icons: [],
        contain: [
            '[Ghi chú: Nêu các công cụ triển khai và hạ tầng bạn nắm vững (ví dụ: Docker, Git/GitHub, CI/CD pipelines, Cloud AWS/Vercel...)]',
            '[Ghi chú: Mô tả quy trình làm việc chuẩn mực: Viết mã nguồn sạch (Clean Code), kiểm thử (Unit/Integration Test), Agile/Scrum...]',
            '[Ghi chú: Nêu điểm mạnh về tư duy giải quyết vấn đề, khả năng tự học công nghệ mới và phối hợp nhóm hiệu quả...]'
        ]
    }
]