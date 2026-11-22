"use client";

import { useMemo, useState } from "react";
import ContactGlassCard from "@/components/contact/ContactGlassCard"
import ContactInput from "@/components/contact/ContactInput"
import OpenSourceIcon from "@/components/contact/OpenSourceIcon"
import SendMessageButton from "@/components/contact/SendMessageButton"
import { OPEN_SOURCE_ICONS_INFO } from "@/lib/contactPageInfo"
import { Toast } from "@/components/Toast";
import { FiPhoneCall } from "react-icons/fi";
import { IoMail } from "react-icons/io5";
import { useApp } from "@/context/AppContext";

export default function Contact() {
    const { t } = useApp();

    const [formValues, setFormValues] = useState<Record<string, string>>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (name: string, value: string) => {
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const [toast, setToast] = useState<{
        open: boolean;
        message: string;
        variant: "success" | "error";
    }>({ open: false, message: "", variant: "success" });

    const onSend = async () => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formValues),
            });

            if (!res.ok) {
                const body = await res.json().catch(() => ({}));
                setToast({
                    open: true,
                    message: body?.error ?? t.contact.sendFailed,
                    variant: "error",
                });
                return;
            }

            setToast({
                open: true,
                message: t.contact.sentSuccess,
                variant: "success",
            });

            setFormValues({ name: "", email: "", message: "" });
        } catch {
            setToast({
                open: true,
                message: t.contact.networkError,
                variant: "error",
            });
        }
    };

    const contactGlassCards = [
        {
            label: t.contact.phoneLabel,
            value: t.contact.phoneValue,
            href: "#",
            icon: FiPhoneCall,
        },
        {
            label: t.contact.emailLabel,
            value: t.contact.emailValue,
            href: "#",
            icon: IoMail,
        },
    ];

    const inputFields = [
        {
            id: "name",
            label: t.contact.formName,
            placeholder: t.contact.formNamePlaceholder,
        },
        {
            id: "email",
            type: "email",
            label: t.contact.formEmail,
            placeholder: t.contact.formEmailPlaceholder,
        },
        {
            as: "textarea" as const,
            id: "message",
            label: t.contact.formMessage,
            placeholder: t.contact.formMessagePlaceholder,
            rows: 4,
        },
    ];

    const socialNetworksBlock = (
        <div className="flex flex-col gap-5 mt-5 md:mt-10">
            <h2>{t.contact.socialHeading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {OPEN_SOURCE_ICONS_INFO.map((item, idx) => (
                    <OpenSourceIcon key={idx} {...item}/>
                ))}
            </div>
        </div>
    );

    return (
        <section className="w-full mt-10 md:mt-30 lg:mt-15">

            {/* Headers */}
            <div className="flex flex-col items-center justify-center">
                <h1>{t.contact.heading1}</h1>
                <h2 className="text-white/80">__</h2>
            </div>

            {/* Body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mx-4 sm:mx-8 md:mx-20 mt-8 sm:mt-10">

                {/* Left Column: Intro + Phone/Email (and Desktop Social) */}
                <div className="flex flex-col gap-5">
                    <h2 className="font-semibold">{t.contact.heading2}</h2>
                    <p className="">{t.contact.description}</p>
                    <div className="flex flex-col gap-5">
                        {contactGlassCards.map((item, idx) => (
                            <ContactGlassCard 
                                key={idx} {...item}
                            />
                        ))}
                    </div>
                    {/* Social networks on desktop */}
                    <div className="hidden lg:block">
                        {socialNetworksBlock}
                    </div>
                </div>

                {/* Right Column: Message Form inputs + Mobile Social below */}
                <div className="flex flex-col gap-5">

                    <div className="flex flex-col gap-3 md:gap-8">
                        {inputFields.map((item, idx) => (
                            <ContactInput 
                                key={idx}
                                {...item}
                                value={formValues[item.id] ?? ""}
                                onChange={(e) => handleChange(item.id, e.target.value)}
                            />
                        ))}
                    </div>
                    <div className="mt-8 sm:mt-10">
                        <SendMessageButton text={t.contact.sendButton} onClick={onSend}/>
                    </div>

                    {/* Social networks on mobile (appears under message form) */}
                    <div className="block lg:hidden mt-6">
                        {socialNetworksBlock}
                    </div>
                </div>
            </div>

            <Toast
                open={toast.open}
                message={toast.message}
                variant={toast.variant}
                onClose={() => setToast((tState) => ({ ...tState, open: false }))}
            />
        </section>
    )
}