import { SetStateAction } from "react";

import { FaChevronDown } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Combobox } from "@headlessui/react";

// =================================================================

interface SelectDropDownMenuInterface {
  selected: string | null;
  setSelected: React.Dispatch<SetStateAction<string | null>>;
  removeAble?: boolean;
  placeholder?: string;
  options: {
    id: string | number;
    name: string;
  }[];
}

const SelectDropDownMenu: React.FC<SelectDropDownMenuInterface> = ({
  selected,
  setSelected,
  removeAble = false,
  placeholder = "Select an option",
  options = [],
}) => {
  const handleChange = (newValue: string) => {
    setSelected(newValue);
  };

  return (
    <div className="w-full">
      <Combobox value={selected || ""} onChange={handleChange}>
        <div className="relative mt-1">
          <Combobox.Button
            className={`flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-left rounded-md cursor-pointer text-accent-foreground ${
              selected ? "bg-accent" : "bg-muted"
            }`}>
            <div
              className={`${
                selected ? "text-accent-foreground" : "text-muted-foreground"
              }`}>
              {selected ? selected : placeholder}
            </div>
            <div className="flex items-center">
              {removeAble && selected && (
                <span
                  className="px-1 hover:text-primary"
                  onClick={() => setSelected(null)}>
                  <FaXmark />
                </span>
              )}
              <FaChevronDown aria-hidden="true" />
            </div>
          </Combobox.Button>

          <Combobox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base rounded-lg shadow-lg bg-card max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {options &&
              options.map((option, idx) => (
                <Combobox.Option
                  key={option.id || idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-primary-light text-primary"
                        : "text-accent-foreground"
                    }`
                  }
                  value={option.name}>
                  <span className="text-xs font-medium">{option.name}</span>
                </Combobox.Option>
              ))}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default SelectDropDownMenu;
