import React from "react";

import MainLayout from "@/components/MainLayout";
import TableFilter from "@/containers/user-management/users-list/table-filter";

import { UsersListInfos } from "../../../constants/data";
import { UserFilterProvider } from "@/context/UserFilter";

// =================================================================

const Users = () => {
  return (
    <UserFilterProvider initialData={UsersListInfos}>
      <MainLayout>
        <div className="py-5 mb-20 ml-4 text-sm rounded-lg bg-card">
          <TableFilter />
          {/* <CustomTable /> */}
          <div className="my-6">{/* <TablePagination /> */}</div>
        </div>
      </MainLayout>
    </UserFilterProvider>
  );
};

export default Users;
