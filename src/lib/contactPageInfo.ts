import { ContactGlassCardProps, ContactInputProps, OpenSourceIconProps } from "@/types/contactPageInfo";
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { SiGithub, SiTelegram, SiZalo, SiFacebook } from "react-icons/si";

export const CONTACT_GLASS_CARDS_INFO : ContactGlassCardProps[] = [
    {
        label: "Phone",
        value: "[Số điện thoại của bạn]",
        href: "#",
        icon: FiPhoneCall,
    },
    {
        label: "Email",
        value: "[Email của bạn]",
        href: "#",
        icon: IoMail,
    },
];

export const OPEN_SOURCE_ICONS_INFO : OpenSourceIconProps[] = [
    {
        href: "#",
        label: "GitHub",
        icon: SiGithub,
        iconColor: "#ffffff",
    },
    {
        href: "#",
        label: "Telegram",
        icon: SiTelegram,
        iconColor: "#229ED9",
    },
    {
        href: "#",
        label: "Zalo",
        icon: SiZalo,
        iconColor: "#0068FF",
    },
    {
        href: "#",
        label: "Facebook",
        icon: SiFacebook,
        iconColor: "#1877F2",
    },
];

export const CONTACT_BASIC_INFO = {
    heading1: "GET IN TOUCH",
    heading2: "LET'S CONNECT",
    decription: "Bạn có ý tưởng dự án hoặc cơ hội việc làm? Đừng ngần ngại để lại lời nhắn cho tôi!",
    heading3: "MẠNG XÃ HỘI",
};

export const CONTACT_INPUT_INFO : ContactInputProps[] = [
    {
        id: "name",
        label: "Họ và tên",
        placeholder: "Nhập họ và tên của bạn",
    },
    {
        id: "email",
        type: "email",
        label: "Email",
        placeholder: "Nhập địa chỉ email của bạn",
    },    
    {   
        as: "textarea",
        id: "message",
        label: "Lời nhắn",
        placeholder: "Nhập nội dung lời nhắn của bạn...",
        rows: 4
    },
];
