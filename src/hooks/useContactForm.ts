// src/hooks/useContactForm.ts
"use client";

import { useState } from "react";

// Tipe untuk setiap field form
interface FormFields {
  name: string;
  email: string;
  message: string;
}

// Tipe untuk status pengiriman
type FormStatus = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Handler generic — satu fungsi untuk semua field
  // Kenapa generic? Agar tidak perlu buat handleNameChange,
  // handleEmailChange, handleMessageChange secara terpisah
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Cegah default browser submit (reload halaman)

    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      // Reset form setelah berhasil
      setFields({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMsg(
        error instanceof Error ? error.message : "Failed to send message",
      );
    }
  };

  return { fields, status, errorMsg, handleChange, handleSubmit };
}
