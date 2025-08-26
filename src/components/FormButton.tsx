import React, { useState } from "react";

interface FormButtonProps {
    label: string;
    type: "approve" | "cancel" | "submit";
    onClick: () => void;
    isDisabled?: boolean;
    isLoading?: boolean;
    reason?: string;
    setReason?: (value: string) => void;
}

const FormButton = ({
    label,
    type,
    onClick,
    isDisabled = false,
    isLoading = false,
    reason = "",
    setReason,
}: FormButtonProps) => {
    const [showTextarea, setShowTextarea] = useState(false);

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (type === "cancel") {
            if (!showTextarea) {
                setShowTextarea(true);
                onClick();
            } else {
                setShowTextarea(false);
            }
            return;
        }
        onClick();
    };

    const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReason?.(e.target.value);
    };

    return (
        <div className="m-3">
            <div className="flex items-center gap-2">
                {type !== "submit" && <span className="label">{label}</span>}
                <button
                    className={`btn form-bttn ${type}-btn`}
                    onClick={handleButtonClick}
                    disabled={isDisabled}
                >
                    {isLoading ? "Submitting..." : label}
                </button>
            </div>

            {type === "cancel" && showTextarea && (
                <div className="mt-3">
                    <textarea
                        className="decline-reason-textarea"
                        name="decline-reason"
                        id="decline-reason"
                        placeholder="Enter your reason"
                        value={reason}
                        onChange={handleReasonChange}
                    />
                </div>
            )}
        </div>
    );
};

export default FormButton;
