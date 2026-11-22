import { ExperienceBasicInfoItems, ExperienceTimeLineProps } from "@/types/experiencePageInfo";

export const EXPERIENCE_BASIC_INFO : ExperienceBasicInfoItems = {
    heading1: 'Changelog from my journey',
    heading2: "Quá trình làm việc & kinh nghiệm thực chiến",
    decription: 'Dòng thời gian các vị trí, dự án và kinh nghiệm làm việc.',
    linkToImage: ''
}

export const EXPERIENCES_TIMELINE : ExperienceTimeLineProps = { 
    items: 
    [
        {
            id: "exp-1",
            period: "[Ví dụ: 2024 - Hiện tại]",
            title: "[Vị trí công việc 1: Ví dụ - Software Engineer / Frontend Developer]",
            company: "[Tên công ty / Doanh nghiệp 1]",
            linkToCompany: "#",
            summary: "[Ghi chú: Tóm tắt 1 - 2 câu về vai trò chính, mục tiêu dự án và trách nhiệm của bạn trong team...]",
            bullets: [
                "[Ghi chú: Nêu các tính năng, module hoặc sản phẩm cụ thể bạn đã trực tiếp xây dựng/phát triển...]",
                "[Ghi chú: Nêu các công nghệ sử dụng, giải pháp tối ưu hiệu năng hoặc quy trình CI/CD bạn đóng góp...]",
            ],
            tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "REST API"],
        },
        {
            id: "exp-2",
            period: "[Ví dụ: 2023 - 2024]",
            title: "[Vị trí công việc 2: Ví dụ - Web Developer / Intern]",
            company: "[Tên công ty / Doanh nghiệp 2]",
            linkToCompany: "#",
            summary: "[Ghi chú: Tóm tắt vai trò, các nhiệm vụ học hỏi và đóng góp thực tế trong dự án...]",
            bullets: [
                "[Ghi chú: Mô tả bài toán kỹ thuật bạn tham gia giải quyết và kết quả đạt được...]",
                "[Ghi chú: Nêu các kỹ năng mềm rèn luyện được: Làm việc nhóm, giao tiếp kỹ thuật, quản lý thời gian...]",
            ],
            tags: ["JavaScript", "HTML/CSS", "Git", "API Integration", "Agile"],
        },
    ],
}
