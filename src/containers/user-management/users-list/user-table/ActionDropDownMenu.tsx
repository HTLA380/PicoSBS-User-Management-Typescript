import { slideInUpTransition } from "@/utils/TransitionConfig";
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";

const ActionDropDownMenu = () => {
  return (
    <div className="inline-block">
      <Menu>
        <Menu.Button className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-md text-muted-foreground bg-muted hover:bg-primary-light hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-opacity-75">
          Actions
          <FaChevronDown />
        </Menu.Button>

        <Transition as={Fragment} {...slideInUpTransition}>
          <Menu.Items className="w-36 bg-card drop-shadow rounded-lg gap-1 flex items-start py-3 px-2 flex-col absolute right-0 -translate-x-full mt-1 z-20">
            <Menu.Item>
              <button className="w-full text-card-foreground hover:bg-primary-light hover:text-primary text-start rounded-lg p-2">
                View
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full text-card-foreground hover:bg-primary-light hover:text-primary text-start rounded-lg p-2">
                Edit
              </button>
            </Menu.Item>
            <Menu.Item>
              <button className="w-full text-card-foreground hover:bg-primary-light hover:text-primary text-start rounded-lg p-2">
                Delete
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default ActionDropDownMenu;
