"use client";

import React, { useState } from "react";
import { useUserFilter } from "@/context/UserFilter";
import Link from "next/link";

import { BiSearch } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

import Delete from "./DeleteModal";
import FilterModal from "./FilterModal";
import ExportModal from "./ExportModal";
import Input from "@/components/input/Input";

// ============================================================

const TableFilter = () => {
  const [searchText, setSearchText] = useState("");
  const { filterByName, selectedUsersId } = useUserFilter();

  // filter user by search input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
    filterByName(value);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-8">
      <Input
        leftIcon={BiSearch}
        placeholder={"Search User..."}
        value={searchText}
        className="w-56 text-xs bg-muted"
        onChange={handleInputChange}
      />

      <div className="flex items-center gap-4">
        {/* render delete button if the users get select */}
        {selectedUsersId.length > 0 ? (
          <Delete />
        ) : (
          <>
            <FilterModal />
            <ExportModal />
            <Link
              href={"/users/create"}
              className="flex items-center gap-2 px-6 py-3 text-sm rounded-md text-primary-foreground bg-primary hover:brightness-90">
              <FaPlus />
              Create User
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TableFilter;
