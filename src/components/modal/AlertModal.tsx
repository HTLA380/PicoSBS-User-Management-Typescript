import { Fragment, SetStateAction } from "react";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCircleXmark } from "react-icons/fa6";

import { Dialog, Transition } from "@headlessui/react";
import { TransitionInterface } from "@/utils/TransitionConfig";

const defaultTransition = {
  enter: "transition duration-300 ease-in-out transform",
  enterFrom: "opacity-0 scale-75",
  enterTo: "opacity-100 scale-100",
  leave: "transition duration-300 ease-in-out transform",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-75",
};

// ==============================================================

interface AlertModalInterface {
  open: boolean;
  onClose: React.Dispatch<SetStateAction<boolean>>;
  alertType: string;
  alertText: string;
  alertActionButton: React.ReactNode;
  transition?: TransitionInterface;
}

const AlertModal: React.FC<AlertModalInterface> = ({
  open,
  onClose,
  alertType,
  alertText,
  alertActionButton,
  transition = defaultTransition,
}) => {
  const RenderAlertIcon = ({ alertType }: { alertType: string }) => {
    switch (alertType) {
      case "success":
        return <CiCircleCheck className="w-20 h-20 text-green-400" />;
      case "warning":
        return (
          <AiOutlineExclamationCircle className="w-20 h-20 text-yellow-300" />
        );
      case "danger":
        return <FaRegCircleXmark className="w-20 h-20 text-red-400" />;
      default:
        return null; // Return null if no matching alert type
    }
  };

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog open={open} onClose={onClose} className="fixed inset-0 z-20">
          <Dialog.Overlay
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center w-screen p-4">
            <Transition.Child as={Fragment} {...transition}>
              <div className="flex flex-col items-center justify-center w-[26.25rem] gap-6 mx-auto bg-popover rounded-lg p-4 h-72">
                <span className="block">
                  <RenderAlertIcon alertType={alertType} />
                </span>
                <p className="w-3/4 text-sm text-center text-foreground">
                  {alertText}
                </p>
                <div className="flex items-center gap-2">
                  {alertActionButton}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AlertModal;
