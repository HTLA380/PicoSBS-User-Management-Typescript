export interface TransitionInterface {
  enter: string;
  enterFrom: string;
  enterTo: string;
  leave: string;
  leaveFrom: string;
  leaveTo: string;
}

export const scaleUpTransition = {
  enter: "transition duration-300 ease-in-out transform",
  enterFrom: "opacity-0 scale-75",
  enterTo: "opacity-100 scale-100",
  leave: "transition duration-300 ease-in-out transform",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-75",
};

export const slideInUpTransition = {
  enter: "transition ease duration-500 transform",
  enterFrom: "opacity-0 translate-y-12",
  enterTo: "opacity-100 translate-y-0",
  leave: "transition ease duration-500 transform",
  leaveFrom: "opacity-100 translate-y-12",
  leaveTo: "opacity-0 translate-y-12",
};
