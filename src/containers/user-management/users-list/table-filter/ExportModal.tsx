import { SetStateAction, useState } from "react";

import { FaXmark } from "react-icons/fa6";
import { PiExportBold } from "react-icons/pi";

import SelectDropDownMenu from "@/components/menu/SelectDropDownMenu";
import AlertModal from "@/components/modal/AlertModal";
import Modal from "@/components/modal/Modal";

import {
  scaleUpTransition,
  slideInUpTransition,
} from "@/utils/TransitionConfig";
import LoadingSvg from "@/utils/LoadingSvg";

// =============================================================

const roleOptionData = [
  { id: 1, name: "Administrator", value: "administrator" },
  { id: 2, name: "Analyst", value: "analyst" },
  { id: 3, name: "Developer", value: "developer" },
  { id: 4, name: "Support", value: "support" },
  { id: 5, name: "Trial", value: "trial" },
];

const formatOptionData = [
  { id: 1, name: "Excel" },
  { id: 2, name: "PDF" },
  { id: 3, name: "CSV" },
  { id: 4, name: "ZIP" },
];

// =============================================================

const ExportModal = () => {
  const [showMainModal, setShowMainModal] = useState(false);
  const [isEmptyField, setIsEmptyField] = useState(false);
  const [submitAlertType, setSubmitAlertType] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const mainModalButton = (
    <button
      onClick={() => setShowMainModal(true)}
      className="flex items-center gap-2 px-6 py-3 text-sm rounded-md text-primary bg-primary-light hover:bg-primary hover:text-primary-foreground">
      <PiExportBold size={15} />
      Export
    </button>
  );

  const closeModal = () => setShowMainModal(false);

  const modalHeader = (
    <div className="flex items-center justify-between px-6 pt-6 pb-8 border-b border-b-border">
      <h5 className="text-xl font-semibold">Export Users</h5>
      <button
        className="text-accent-foreground hover:text-primary"
        onClick={closeModal}>
        <FaXmark />
      </button>
    </div>
  );

  const submitUser = () => {
    if (!selectedFormat) {
      setIsEmptyField(true);
      setSubmitAlertType("danger");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSubmitAlertType("success");
      setIsEmptyField(false);
      setLoading(false);
    }, 1500);
  };

  return (
    <Modal
      button={mainModalButton}
      open={showMainModal}
      onClose={setShowMainModal}
      transition={slideInUpTransition}>
      <div className="w-full max-w-[40.625rem] mx-auto bg-secondary rounded-lg text-foreground">
        {modalHeader}

        <div className="p-5 mx-10 my-5">
          <div>
            <h5 className="mb-1.5 text-sm">Select Roles:</h5>
            <SelectDropDownMenu
              placeholder={"Select a role"}
              options={roleOptionData}
              selected={selectedRole}
              setSelected={setSelectedRole}
            />
          </div>
          <div className="mt-8">
            <h5 className="mb-1.5 text-sm">
              Select Export Format: <span className="text-destructive">*</span>
            </h5>
            <SelectDropDownMenu
              placeholder="Select a format"
              selected={selectedFormat}
              options={formatOptionData}
              setSelected={setSelectedFormat}
            />
            {isEmptyField && (
              <p className="m-2 text-xs text-destructive">
                File format is required
              </p>
            )}
          </div>

          <div className="flex items-center justify-center w-full gap-3 mt-8">
            <RenderDiscardButtonWithAlert setShowMainModal={setShowMainModal} />
            <RenderSubmitButtonWithAlert
              setAlertType={setSubmitAlertType}
              alertType={submitAlertType}
              setShowMainModal={setShowMainModal}
              submitUser={submitUser}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

interface RenderDiscardButtonWithAlertInterface {
  setShowMainModal: React.Dispatch<SetStateAction<boolean>>;
}

const RenderDiscardButtonWithAlert: React.FC<
  RenderDiscardButtonWithAlertInterface
> = ({ setShowMainModal }) => {
  const [alertType, setAlertType] = useState<string | null>(null);

  const closeAlertAndModal = () => {
    setAlertType(null);
    setShowMainModal(false);
  };

  const showWarningAlert = () => setAlertType("warning");
  const showDangerAlert = () => setAlertType("danger");
  const closeAlert = () => setAlertType(null);

  const renderAlert = (type: string) => (
    <AlertModal
      open={alertType === type}
      onClose={closeAlert}
      transition={scaleUpTransition}
      alertType={type}
      alertText={
        type === "warning"
          ? "Are you sure you would like to cancel?"
          : "Your Form has been canceled."
      }
      alertActionButton={
        type === "warning" ? (
          <>
            <button
              onClick={closeAlertAndModal}
              className="px-6 py-3 mr-4 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:brightness-90">
              Yes, cancel it!
            </button>
            <button
              onClick={showDangerAlert}
              className="px-6 py-3 text-sm font-medium rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground">
              No return
            </button>
          </>
        ) : (
          <button
            onClick={closeAlert}
            className="px-6 py-3 text-sm font-semibold rounded-md text-primary-foreground bg-primary hover:brightness-90">
            Ok, got it!
          </button>
        )
      }
    />
  );

  return (
    <>
      <button
        onClick={showWarningAlert}
        className="px-5 py-3 text-sm font-medium rounded-md text-accent-foreground bg-accent hover:brightness-95">
        Discard
      </button>
      {renderAlert("warning")}
      {renderAlert("danger")}
    </>
  );
};

interface RenderSubmitButtonWithAlertInterface {
  alertType: string | null;
  setAlertType: React.Dispatch<SetStateAction<string | null>>;
  setShowMainModal: React.Dispatch<SetStateAction<boolean>>;
  submitUser: () => void;
  loading: boolean;
}

const RenderSubmitButtonWithAlert: React.FC<
  RenderSubmitButtonWithAlertInterface
> = ({ alertType, setAlertType, setShowMainModal, submitUser, loading }) => {
  const closeAlertAndModal = () => {
    setAlertType(null);
    setShowMainModal(false);
  };

  const closeAlert = () => {
    setAlertType(null);
  };

  const renderAlert = (type: string) => (
    <AlertModal
      open={alertType === type}
      onClose={closeAlert}
      transition={scaleUpTransition}
      alertType={type}
      alertText={
        type === "success"
          ? "User list has been successfully exported!"
          : "Sorry looks like there are some errors detected, please try again."
      }
      alertActionButton={
        type === "success" ? (
          <button
            onClick={closeAlertAndModal}
            className="px-6 py-3 mr-4 text-sm font-semibold rounded-md text-primary-foreground bg-primary hover:brightness-90">
            Ok, got it!
          </button>
        ) : (
          <button
            onClick={closeAlert}
            className="px-6 py-3 text-sm font-semibold rounded-md text-primary-foreground bg-primary hover:brightness-90">
            Ok, got it!
          </button>
        )
      }
    />
  );

  return (
    <>
      <button
        onClick={submitUser}
        className={`flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-md hover:brightness-90 bg-primary text-primary-foreground ${
          loading ? "pointer-events-none" : ""
        }`}>
        {loading ? (
          <>
            Please wait...
            <LoadingSvg />
          </>
        ) : (
          "Submit"
        )}
      </button>
      {renderAlert("success")}
      {renderAlert("danger")}
    </>
  );
};

export default ExportModal;
