import { ContactGlassCardProps, ContactInputProps, OpenSourceIconProps } from "@/types/contactPageInfo";
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { SiGithub, SiTelegram, SiZalo, SiFacebook } from "react-icons/si";

export const CONTACT_GLASS_CARDS_INFO : ContactGlassCardProps[] = [
    {
        label: "Phone",
        value: "0388939710",
        href: "tel:0388939710",
        icon: FiPhoneCall,
    },
    {
        label: "Email",
        value: "ngochonp232627@gmail.com",
        href: "mailto:ngochonp232627@gmail.com",
        icon: IoMail,
    },
];

export const OPEN_SOURCE_ICONS_INFO : OpenSourceIconProps[] = [
    {
        href: "https://github.com/ngocnh05",
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
        href: "http://facebook.com/nguyen.hong.ngoc.836813",
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
