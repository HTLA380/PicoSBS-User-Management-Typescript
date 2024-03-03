"use client";

import React, { useState, useEffect } from "react";
import { useUserFilter } from "@/context/UserFilter";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Combobox } from "@headlessui/react";

const data = [
  { id: 1, name: 10 },
  { id: 2, name: 25 },
  { id: 3, name: 50 },
  { id: 4, name: 100 },
];

const TablePagination = () => {
  const {
    itemsPerPage,
    setItemsPerPage,
    filteredUsers,
    currentPage,
    setCurrentPage,
  } = useUserFilter();
  const [active, setActive] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    // Calculate total pages based on filteredUsers and itemsPerPage
    setTotalPages(Math.ceil(filteredUsers.length / itemsPerPage));
  }, [filteredUsers, itemsPerPage]); // Add itemsPerPage as a dependency

  useEffect(() => {
    setActive(currentPage);
  }, [currentPage]);

  const handlePagination = (pageNumber: number) => {
    setActive(pageNumber);
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    // Reset current page to 1 when items per page changes
    setCurrentPage(1);
  };

  const renderPageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).map((pageNumber) => (
    <span
      key={pageNumber}
      onClick={() => handlePagination(pageNumber)}
      className={`h-8 w-8 text-sm flex justify-center items-center rounded-md cursor-pointer ${
        active === pageNumber
          ? "bg-primary text-primary-foreground"
          : "text-accent-foreground hover:bg-accent"
      }`}>
      {pageNumber}
    </span>
  ));

  const next = () => {
    if (active === totalPages) return;
    setActive(active + 1);
    setCurrentPage(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    setCurrentPage(active - 1);
  };

  return (
    <div className="flex items-center justify-between px-8">
      <div className="w-24 rounded-md shadow-sm cursor-pointer">
        <RenderItemsPerPageMenu
          selected={itemsPerPage}
          handleChange={handleItemsPerPageChange}
          placeholder={"10"}
          options={data}
        />
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={prev}
          className="p-2 text-sm rounded-md text-secondary-foreground hover:bg-accent hover:text-primary">
          <FaChevronLeft />
        </button>

        <div className="flex items-center gap-1">{renderPageNumbers}</div>

        <button
          onClick={next}
          className="p-2 text-sm rounded-md text-secondary-foreground hover:bg-accent hover:text-primary">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

interface RenderItemsPerPageMenuInterface {
  selected: number;
  handleChange: (items: number) => void;
  placeholder?: string;
  options: { name: number | string; id: number | string }[];
}

const RenderItemsPerPageMenu: React.FC<RenderItemsPerPageMenuInterface> = ({
  selected,
  handleChange,
  placeholder,
  options,
}) => {
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

            <FaChevronDown aria-hidden="true" />
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

export default TablePagination;
