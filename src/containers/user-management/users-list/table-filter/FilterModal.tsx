import React, { Fragment, useState } from "react";

import { FaFilter } from "react-icons/fa";

import { Menu, Transition } from "@headlessui/react";
import { useUserFilter } from "@/context/UserFilter";
import SelectDropDownMenu from "@/components/menu/SelectDropDownMenu";
import { slideInUpTransition } from "@/utils/TransitionConfig";

// ====================================================

const roleOptionData = [
  { id: 1, name: "Administrator" },
  { id: 2, name: "Analyst" },
  { id: 3, name: "Developer" },
  { id: 4, name: "Support" },
  { id: 5, name: "Tiral" },
];

const activeStatusOptionData = [
  { id: 23143214653, name: "Active" },
  { id: 28967568767, name: "Inactive" },
];

// ====================================================

const FilterModal = () => {
  const [role, setRole] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const { filterByRole, resetFilter } = useUserFilter();

  const handleFilter = () => {
    if (role || status) {
      filterByRole({
        role: role?.toLowerCase(),
        status: status?.toLowerCase(),
      });
    }
    return;
  };

  const handleReset = () => {
    setRole(null);
    setStatus(null);
    resetFilter();
  };

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-md text-primary bg-primary-light hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-opacity-75">
          <FaFilter />
          Filter
        </Menu.Button>

        <Transition as={Fragment} {...slideInUpTransition}>
          <Menu.Items className="absolute right-0 z-20 mt-1 origin-top-right rounded-md shadow-xl bg-card w-[340px]">
            <div className="w-full px-4 py-3 text-sm font-semibold border-b border-b-border">
              <p>Filter Options</p>
            </div>

            <div className="p-5">
              <div>
                <p className="mb-1">Role:</p>
                <SelectDropDownMenu
                  removeAble
                  selected={role}
                  setSelected={setRole}
                  placeholder={"Select option"}
                  options={roleOptionData}
                />
              </div>

              <div className="mt-8">
                <p className="mb-1">Account Status:</p>
                <SelectDropDownMenu
                  removeAble
                  selected={status}
                  setSelected={setStatus}
                  placeholder={"Select option"}
                  options={activeStatusOptionData}
                />
              </div>

              <div className="flex items-center justify-end w-full gap-3 mt-6">
                <Menu.Item
                  as={"button"}
                  onClick={handleReset}
                  className="px-4 py-3 text-xs rounded-md text-accent-foreground hover:bg-primary-light hover:text-primary bg-accent">
                  Reset
                </Menu.Item>
                <Menu.Item
                  as={"button"}
                  onClick={handleFilter}
                  className="px-4 py-3 text-xs rounded-md text-primary-foreground bg-primary hover:brightness-90">
                  Apply
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default FilterModal;
