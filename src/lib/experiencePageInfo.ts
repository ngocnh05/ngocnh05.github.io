import { ExperienceBasicInfoItems, ExperienceTimeLineProps } from "@/types/experiencePageInfo";

export const EXPERIENCE_BASIC_INFO : ExperienceBasicInfoItems = {
    heading1: 'Changelog from my journey',
    heading2: "Quá trình làm việc & Hoạt động thực chiến",
    decription: 'Dòng thời gian ghi dấu các vị trí công việc, hoạt động truyền thông và kỹ thuật đa phương tiện thực tế đã tham gia tích lũy kinh nghiệm.',
    linkToImage: '/experience_image.svg'
}

export const EXPERIENCES_TIMELINE : ExperienceTimeLineProps = { 
    items: 
    [
        {
            id: "exp-1",
            period: "2024 – 2025",
            title: "Biên kịch nội dung",
            company: "Công ty YouTube FC Connect",
            linkToCompany: "#",
            summary: "Nghiên cứu ý tưởng, xây dựng câu chuyện và biên tập kịch bản video chuyên sâu cho các kênh YouTube.",
            bullets: [
                "Nghiên cứu xu hướng thị hiếu khán giả, phân tích chủ đề và xây dựng cấu trúc kịch bản video lôi cuốn",
                "Phối hợp cùng đội ngũ quay dựng để hoàn thiện nhịp điệu nội dung, phân cảnh và trải nghiệm nghe nhìn",
                "Tối ưu quy trình sáng tạo kịch bản, đảm bảo tính nhất quán về thông điệp và tiến độ sản xuất đều đặn",
            ],
            tags: ["Biên kịch", "Kịch bản YouTube", "Nghiên cứu ý tưởng", "Storyboarding", "Content Strategy"],
        },
        {
            id: "exp-2",
            period: "2023 – Hiện tại",
            title: "Thành viên Ban Kỹ thuật",
            company: "CLB Sinh viên Vận động hiến máu ĐH Mở Hà Nội",
            linkToCompany: "#",
            summary: "Phụ trách thiết kế bộ nhận diện truyền thông và chỉ đạo kỹ thuật quay dựng video cho các chiến dịch hiến máu lớn của trường.",
            bullets: [
                "Thiết kế trọn bộ ấn phẩm truyền thông: Poster, Standee, Backdrop sân khấu, Banner và Cover Fanpage",
                "Trực tiếp quay phim, xử lý hậu kỳ, chỉnh màu và lồng ghép âm thanh cho các video recap sự kiện",
                "Kiểm soát chuẩn mực chất lượng hình ảnh, nhận diện thương hiệu và tính đồng bộ trên các kênh truyền thông",
            ],
            tags: ["Photoshop", "Illustrator", "CapCut Pro", "Quay dựng sự kiện", "Ấn phẩm truyền thông"],
        },
        {
            id: "exp-3",
            period: "2023 – Hiện tại",
            title: "Thành viên Ban Kỹ thuật",
            company: "CLB Truyền thông FNEWS",
            linkToCompany: "#",
            summary: "Sáng tạo ấn phẩm đồ họa nhận diện sự kiện, thiết kế chứng nhận và sản xuất video ngắn đón đầu xu hướng mạng xã hội.",
            bullets: [
                "Thiết kế hệ thống ấn phẩm đồ họa nhận diện sự kiện và các mẫu giấy chứng nhận thành tích đạt chuẩn in ấn",
                "Lên ý tưởng, quay chụp và biên tập các video ngắn xu hướng (Shorts, Reels, TikTok) thu hút lượt tương tác",
                "Tham gia dựng video tổng kết, phóng sự hoạt động và kỷ yếu truyền thông thường niên của câu lạc bộ",
            ],
            tags: ["Thiết kế đồ họa", "Shorts / Reels / TikTok", "Giấy chứng nhận", "Quay chụp", "Hậu kỳ video"],
        },
    ],
}
