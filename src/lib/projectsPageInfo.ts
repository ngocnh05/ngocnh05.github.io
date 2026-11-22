import { ProjectShowcaseCardProps } from "@/types/projectsPageInfo";

export const PROJECTS_BASIC_INFO = {
  title: "Dự án tiêu biểu",
  description:
    "Các sản phẩm đa phương tiện, nghiên cứu thiết kế UI/UX và ứng dụng di động được hoàn thiện trong quá trình học tập và làm việc nhóm thực tế.",
  linkToGitHub: "https://github.com/ngocnh05",
};

export const PROJECTS_DETAILS: ProjectShowcaseCardProps[] = [
  {
    title: "SmartTro – Hệ thống Quản lý Nhà trọ Thông minh AI",
    description:
      "Hệ thống quản lý nhà trọ thông minh tích hợp AI cảnh báo chỉ số điện, nước bất thường. Đảm nhiệm vai trò Stakeholder Management (phân tích nhu cầu chủ trọ & người thuê) và xây dựng kế hoạch Quản lý chất lượng (QA/QC) kiểm soát tiến độ dự án.",
    techs: ["Hệ thống AI", "Stakeholder Management", "QA / Testing", "Phân tích yêu cầu", "Kiến trúc hệ thống"],
    codeUrl: "https://github.com/ngocnh05",
    detailUrl: "https://github.com/ngocnh05",
  },
  {
    title: "Ecoz – Thiết kế UI/UX Ứng dụng Thuê Xe Điện",
    description:
      "Case study thiết kế hoàn chỉnh ứng dụng thuê xe điện đô thị tại Hà Nội. Khảo sát thực tế nhu cầu người dùng, phác thảo User Persona, xây dựng User Flow tối ưu và hoàn thiện toàn bộ Wireframe cùng Prototype tương tác cao trên Figma.",
    techs: ["Figma", "Thiết kế UI/UX", "User Persona", "User Flow", "Wireframe", "Prototype tương tác"],
    codeUrl: "https://github.com/ngocnh05",
    detailUrl: "https://github.com/ngocnh05",
  },
  {
    title: "Bug Hunter – Game Trắc nghiệm Android Tương tác",
    description:
      "Game trắc nghiệm 3 màn hình áp dụng kiến trúc Android nâng cao: Bound Service & BroadcastReceiver xử lý đếm ngược thời gian thực, logic tính sát thương/mạng, khóa nút chống spam, lưu trạng thái onSaveInstanceState và thông báo TaskStackBuilder.",
    techs: ["Android Studio", "Java", "Bound Service", "BroadcastReceiver", "Notification", "Game Logic"],
    codeUrl: "https://github.com/ngocnh05",
    detailUrl: "https://github.com/ngocnh05",
  },
  {
    title: "Contact Manager – Ứng dụng Quản lý Danh bạ SQLite",
    description:
      "Ứng dụng Android quản lý danh bạ hoạt động độc lập với CSDL SQLite cục bộ (đầy đủ CRUD). Tối ưu hiệu năng hiển thị danh sách với ExecutorService xử lý đa luồng, bộ lọc Validation định dạng tên/SĐT và AlertDialog xác nhận xóa an toàn.",
    techs: ["Android Native", "SQLite", "SQLiteOpenHelper", "ExecutorService", "CRUD", "Validation"],
    codeUrl: "https://github.com/ngocnh05",
    detailUrl: "https://github.com/ngocnh05",
  },
];
