import { basicInfoItem, EducationDetailItems } from "@/types/educationPageInfo";

export const EDUCATION_BASIC_INFO : basicInfoItem = {
    linkToImage: '',
    heading1: "Education",
    heading2: "Academic Background",
    description: "Trình độ học vấn, chuyên ngành đào tạo và các môn học nền tảng hỗ trợ đắc lực cho công việc phát triển phần mềm."
}

export const EDUCATION_DETAILS_INFO : EducationDetailItems = [
    {
        schoolName: "[Tên Trường Đại học / Cao đẳng của bạn]",
        period: "[Thời gian học: Ví dụ 2022 – 2026]",
        major: "[Chuyên ngành: Ví dụ Công nghệ thông tin / Khoa học máy tính]",
        logoSrc: "",
        websiteUrl: "#",
        bullets: [
            "[Ghi chú: Nêu các môn học nền tảng tiêu biểu (Cấu trúc dữ liệu & giải thuật, Cơ sở dữ liệu, Lập trình hướng đối tượng, Mạng máy tính...)]",
            "[Ghi chú: Mô tả đồ án tốt nghiệp, đề tài nghiên cứu hoặc các bài tập lớn/hackathon bạn đã tham gia...]",
            "[Ghi chú: Nêu các chứng chỉ chuyên ngành, học bổng hoặc hoạt động ngoại khóa tiêu biểu trong thời gian học...]",
        ],
    },
]