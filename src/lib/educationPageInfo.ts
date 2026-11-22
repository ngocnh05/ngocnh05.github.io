import { basicInfoItem, EducationDetailItems } from "@/types/educationPageInfo";

export const EDUCATION_BASIC_INFO : basicInfoItem = {
    linkToImage: '/education_image.svg',
    heading1: "HỌC VẤN",
    heading2: "Quá trình đào tạo & Chuyên môn",
    description: "Nền tảng học vấn chính quy ngành Công nghệ Đa phương tiện tại Trường Đại học Mở Hà Nội, kết hợp toàn diện giữa tư duy thiết kế sáng tạo, kỹ thuật đồ họa 2D, hậu kỳ video số và kỹ năng phát triển ứng dụng."
}

export const EDUCATION_DETAILS_INFO : EducationDetailItems = [
    {
        schoolName: "Trường Đại học Mở Hà Nội (HOU)",
        period: "2023 – Hiện tại",
        major: "Công nghệ Đa phương tiện – Khoa Công nghệ thông tin (Sinh viên năm cuối)",
        logoSrc: "/hou_logo.png",
        logoAlt: "Logo Trường Đại học Mở Hà Nội",
        bullets: [
            "Chương trình đào tạo chuyên sâu: Thiết kế UI/UX, Thiết kế đồ họa 2D, Kỹ thuật quay dựng & xử lý hậu kỳ video số, Lập trình ứng dụng di động (Android/Java), Hệ cơ sở dữ liệu (SQLite).",
            "Hoạt động kỹ thuật & truyền thông: Thành viên Ban Kỹ thuật tại CLB SV Vận động hiến máu ĐH Mở Hà Nội & CLB Truyền thông FNEWS — thiết kế toàn bộ ấn phẩm nhận diện sự kiện (Poster, Standee, Backdrop) và sản xuất video recap.",
            "Dự án & Đồ án học tập tiêu biểu: Thiết kế Prototype hoàn chỉnh ứng dụng thuê xe điện Ecoz (Figma), lập trình game trắc nghiệm Bug Hunter và app Quản lý danh bạ (Android Studio/SQLite), tham gia đồ án hệ thống quản lý nhà trọ SmartTro.",
        ],
    },
]
