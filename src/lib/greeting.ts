import { DayPeriod } from "@/types/dayPeriod";
import { Language } from "./i18n/translations";

export function getDayPeriod(date = new Date()): DayPeriod {
  const hour = date.getHours();

  if (hour >= 5 && hour < 11) return "morning";
  if (hour >= 11 && hour < 14) return "noon";
  if (hour >= 14 && hour < 18) return "afternoon";
  return "evening";
}

export function getGreeting(lang: Language = "en", name?: string, short = false) {
  const period = getDayPeriod();
  const who = name ? `, ${name}` : "";

  if (lang === "vi") {
    if (short) {
      switch (period) {
        case "morning":
          return `Chào buổi sáng! Ngày mới tốt lành ☀️`;
        case "noon":
          return `Chào buổi trưa! Ăn ngon miệng nhé 🍽️`;
        case "afternoon":
          return `Chào buổi chiều! Cố lên nhé 💪`;
        case "evening":
        default:
          return `Chào buổi tối! Thư giãn nhé 🌙`;
      }
    }
    switch (period) {
      case "morning":
        return `Chào buổi sáng${who}! Chúc bạn một ngày mới thật năng lượng ☀️`;
      case "noon":
        return `Chào buổi trưa${who}! Chúc bạn có một bữa trưa ngon miệng 🍽️`;
      case "afternoon":
        return `Chào buổi chiều${who}! Cố gắng lên nhé, bạn đang làm rất tốt 💪`;
      case "evening":
      default:
        return `Chào buổi tối${who}! Hãy thư giãn và nạp lại năng lượng 🌙`;
    }
  }

  if (short) {
    switch (period) {
      case "morning":
        return `Good morning! Have a great day ☀️`;
      case "noon":
        return `Good afternoon! Enjoy lunch 🍽️`;
      case "afternoon":
        return `Good afternoon! Keep it up 💪`;
      case "evening":
      default:
        return `Good evening! Relax & recharge 🌙`;
    }
  }

  switch (period) {
    case "morning":
      return `Good morning${who}! Wishing you a fresh and productive day ☀️`;
    case "noon":
      return `Good afternoon${who}! Hope you're having a great lunch break 🍽️`;
    case "afternoon":
      return `Good afternoon${who}! Keep going, you're doing great 💪`;
    case "evening":
    default:
      return `Good evening${who}! Time to relax and recharge 🌙`;
  }
}

export const textTyping = [
  "Hello there!",
  "My name is Hong Ngoc.",
  "I'm a Software Engineer.",
  "Building elegant and scalable web products."
];
