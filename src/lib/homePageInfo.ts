import { basicInfoItem, whatIcandoItem } from "@/types/honePageInfo"

export const HOMEPAGE_BASIC_INFOR : basicInfoItem = {
    fullname: 'Nguyễn Thị Hồng Ngọc',
    position: 'Multimedia Technology',
    desciption: 'Sinh viên năm cuối ngành Công nghệ đa phương tiện, Khoa Công nghệ thông tin – Trường Đại học Mở Hà Nội. Có kinh nghiệm tham gia sáng tạo nội dung video, thiết kế ấn phẩm truyền thông và các hoạt động kỹ thuật tại câu lạc bộ. Đã tiếp cận các công cụ thiết kế, chỉnh sửa đa phương tiện và lập trình thông qua học tập, công việc và dự án. Mong muốn tìm kiếm cơ hội phù hợp để vận dụng kiến thức đã học, phát triển kỹ năng chuyên môn và tích lũy kinh nghiệm thực tế. Có tinh thần trách nhiệm, chủ động học hỏi và\u00A0phối\u00A0hợp\u00A0làm\u00A0việc\u00A0nhóm.',
    linkToResume: 'https://drive.google.com/drive/folders/1epDxuMO4_IfGCmHI48eK2JrPXjeeRoBh?usp=sharing',
    resumePreviewUrl: 'https://drive.google.com/file/d/1NZaY3VLVdtJXhsr9zVJucHlrz5uR6ma6/preview'
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