import { useSubmit } from "../customHooks/useSubmit";
import FormButton from "../components/FormButton";

const FormSubmit = () => {
    const {
        setAction,
        reason,
        setReason,
        isSubmitEnabled,
        handleSubmit,
        isSubmitting,
    } = useSubmit();


    const handleApprove = () => setAction("approve");
    const handleCancel = () => setAction("cancel");

    return (
        <div className="page-wrapper">
            <div className="card w-25 card-wrapper">
                <div className="card-body">
                    <form>
                        <div className="text-center">
                            <FormButton
                                label="Approve"
                                type="approve"
                                onClick={handleApprove}
                            />
                            <FormButton
                                label="Cancel"
                                type="cancel"
                                onClick={handleCancel}
                                reason={reason}
                                setReason={setReason}
                            />
                        </div>
                        <FormButton
                            label="Submit"
                            type="submit"
                            onClick={handleSubmit}
                            isDisabled={!isSubmitEnabled}
                            isLoading={isSubmitting}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormSubmit;
