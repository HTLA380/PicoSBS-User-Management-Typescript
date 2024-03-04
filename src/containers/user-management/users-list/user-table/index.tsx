"use client";

import React from "react";
import { useUserFilter } from "@/context/UserFilter";
import Image from "next/image";

import { FaChevronDown } from "react-icons/fa";
import Checkbox from "@/components/checkbox/Checkbox";
import ActionDropDownMenu from "./ActionDropDownMenu";

interface User {
  id: number;
  user: {
    name: string;
    email?: string;
    imgUrl?: string;
  };
  username: string;
  role: string;
  status: string;
}

const tableHeader: string[] = ["User", "Username", "Role", "Status"];

const CustomTable: React.FC = () => {
  const {
    paginatedUsers: rowData,
    selectedUsersId,
    setSelectedUsersId,
    selectAllChecked,
    setSelectAllChecked,
  } = useUserFilter();

  // Function to handle the checkbox selection of a user
  // Parameters:
  // - id: The unique identifier of the user
  const handleCheck = (id: number) => {
    // If "Select All" checkbox is checked
    if (selectAllChecked) {
      // Update the list of selected user IDs:
      // If the current user ID is already selected, remove it from the list; otherwise, add it to the list
      const updatedIds = selectedUsersId.includes(id)
        ? selectedUsersId.filter((userId) => userId !== id)
        : [...selectedUsersId, id];
      setSelectedUsersId(updatedIds); // Update the state with the new list of user IDs
    } else {
      // If "Select All" checkbox is not checked
      setSelectedUsersId((prevIds) =>
        // Update the list of selected user IDs based on the previous state:
        // If the current user ID is already selected, remove it from the list; otherwise, add it to the list
        prevIds.includes(id)
          ? prevIds.filter((userId) => userId !== id)
          : [...prevIds, id]
      );
    }
  };

  const handleSelectAll = () => {
    setSelectAllChecked(!selectAllChecked);
    const allUsersIds = rowData.map((row) => row.id);
    setSelectedUsersId(!selectAllChecked ? allUsersIds : []);
  };

  const sortHandler = () => {
    console.log("sort");
  };

  const getTableCellClass = (key: string): string => {
    switch (key) {
      case "user":
        return "min-w-2/5 p-3 text-left";
      case "status":
        return "p-3 text-xs font-medium text-left";
      default:
        return "p-3 font-medium text-left text-card-foreground";
    }
  };

  const getCellContent = ({
    key,
    value,
  }: {
    key: keyof User;
    value: any;
  }): JSX.Element | string => {
    switch (key) {
      case "user":
        return renderUserCell(value);
      case "status":
        return (
          <div
            className={`w-fit text-center text-xs font-medium px-1.5 py-0.5 capitalize rounded-md ${
              value === "active"
                ? "bg-green-400/10 text-green-400"
                : "bg-destructive-light text-destructive-light-foreground"
            }`}>
            {value}
          </div>
        );
      default:
        return value;
    }
  };

  const renderUserCell = (value: User["user"]): JSX.Element => (
    <div className="flex items-center">
      <div
        className={`w-[50px] h-[50px] cursor-pointer ${
          value.imgUrl
            ? "object-center"
            : `text-center flex items-center justify-center`
        } rounded-full overflow-hidden mr-4`}>
        {value.imgUrl ? (
          <Image
            src={value.imgUrl}
            alt=""
            className="w-full h-full object-center"
            width={100}
            height={100}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-base font-medium text-destructive-light-foreground bg-destructive-light">
            {value.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[0.8125rem]">{value.name}</div>
        <div className="text-xs text-card-foreground">{value.email}</div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-11/12 gap-3 px-4 m-auto text-sm bg-card lg:w-full customize__scroll">
      <table className="table w-full text-xs">
        <thead>
          <tr className="text-left uppercase border-b border-dashed border-border text-card-foreground">
            <th className="px-3 py-4 min-w-[10px]">
              <Checkbox checked={selectAllChecked} onChange={handleSelectAll} />
            </th>
            {tableHeader.map((th, index) => (
              <th
                key={index}
                className="px-3 py-4 text-left min-w-[125px] group cursor-pointer"
                onClick={sortHandler}>
                <div className="flex items-center text-xs font-semibold">
                  {th}
                  <FaChevronDown className="ml-2 w-[11px] h-[11px] opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>
              </th>
            ))}
            <th className="px-3 py-4 text-xs font-semibold text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {rowData.length > 0 ? (
            rowData.map((row, idx) => (
              <tr key={idx} className="border-b border-dashed border-border">
                <td className="px-3 py-3 min-w-[10px]">
                  <Checkbox
                    checked={selectedUsersId.includes(row.id)}
                    onChange={() => handleCheck(row.id)}
                  />
                </td>
                {Object.keys(row).map(
                  (key, idx) =>
                    key !== "id" && (
                      <td key={key + idx} className={getTableCellClass(key)}>
                        {getCellContent({
                          key: key as keyof User,
                          value: row[key as keyof User],
                        })}
                      </td>
                    )
                )}
                <td className="py-3">
                  <ActionDropDownMenu />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={tableHeader.length + 1}
                className="py-8 text-sm text-center text-card-foreground">
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
