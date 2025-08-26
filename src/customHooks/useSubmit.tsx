import { useState } from "react";

export const useSubmit = () => {
  const [action, setAction] = useState<"approve" | "cancel" | null>(null);
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isSubmitEnabled =
    action === "approve" || (action === "cancel" && reason.trim() !== "");

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      if (action === "approve") {
        alert("Approved");
      } else if (action === "cancel") {
        alert(`Cancelled with reason: ${reason}`);
      }

      setAction(null);
      setReason("");
      setIsSubmitting(false);
    }, 1000);
  };

  return {
    setAction,
    reason,
    setReason,
    isSubmitEnabled,
    handleSubmit,
    isSubmitting,
  };
};

