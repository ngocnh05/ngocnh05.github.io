// components/ContactField.tsx
import React from "react";
import { ContactInputProps } from "@/types/contactPageInfo";

export default function ContactField(props: ContactInputProps) {
  const {
    id,
    label,
    placeholder,
    className = "",
    fieldClassName = "",
  } = props;

  const commonFieldClass = [
    "w-full rounded-2xl",
    "bg-white/90 dark:bg-slate-700/35",
    "px-6 py-4",
    "text-sm md:text-base lg:text-lg",
    "text-slate-900 dark:text-white/90",
    "placeholder:text-slate-400 dark:placeholder:text-white/40",
    "border border-slate-300/90 dark:border-white/25 outline-none",
    "shadow-sm",
    "transition duration-200",
    "focus:border-sky-500 dark:focus:border-teal-200/80 focus:ring-4 focus:ring-sky-200/50 dark:focus:ring-teal-200/20",
    "focus:shadow-[0_0_0_2px_rgba(2,132,199,0.25),0_12px_40px_rgba(0,0,0,0.1)]",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    fieldClassName,
  ].join(" ");

  return (
    <div className={["w-full", className].join(" ")}>
      <label htmlFor={id} className="mb-2.5 block text-slate-800 dark:text-white/90 font-semibold">
        <span className="text-xs md:text-sm lg:text-base uppercase tracking-wider">{label}</span>
      </label>

      {"as" in props && props.as === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={props.rows ?? 6}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          required={props.required}
          disabled={props.disabled}
          className={[commonFieldClass, "resize-none align-top"].join(" ")}
        />
      ) : (
        <input
          id={id}
          type={props.type ?? "text"}
          placeholder={placeholder}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          required={props.required}
          disabled={props.disabled}
          className={commonFieldClass}
        />
      )}
    </div>
  );
}
