import { TransitionInterface } from "@/utils/TransitionConfig";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, SetStateAction } from "react";

const defaultTransition = {
  enter: "transition duration-300 ease-in-out transform",
  enterFrom: "opacity-0 scale-75",
  enterTo: "opacity-100 scale-100",
  leave: "transition duration-300 ease-in-out transform",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-75",
};

// =================================================================

interface ModalInterface {
  children: React.ReactNode;
  button: React.ReactNode;
  open: boolean;
  onClose: React.Dispatch<SetStateAction<boolean>>;
  transition?: TransitionInterface;
}

const Modal: React.FC<ModalInterface> = ({
  children,
  button,
  open,
  onClose,
  transition = defaultTransition,
}) => {
  return (
    <>
      {button}

      <Transition appear show={open} as={Fragment}>
        <Dialog open={open} onClose={onClose} className="fixed inset-0 z-20">
          <Dialog.Overlay
            className="fixed inset-0 bg-black/30"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center w-screen p-4">
            <Transition.Child as={Fragment} {...transition}>
              {children}
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
