import React from "react";

import MainLayout from "@/components/MainLayout";

import { UsersListInfos } from "../../../constants/data";
import { UserFilterProvider } from "@/context/UserFilter";
import TableFilter from "@/containers/user-management/users-list/user-table-filter";
import CustomTable from "@/containers/user-management/users-list/user-table";
import TablePagination from "@/containers/user-management/users-list/user-table-pagination";

// =================================================================

const Users = () => {
  return (
    <UserFilterProvider initialData={UsersListInfos}>
      <MainLayout>
        <div className="py-5 mb-20 ml-4 text-sm rounded-lg bg-card">
          <div className="mb-5">
            <TableFilter />
          </div>
          <div className="my-6">
            <CustomTable />
          </div>
          <div>
            <TablePagination />
          </div>
        </div>
      </MainLayout>
    </UserFilterProvider>
  );
};

export default Users;
