import React from "react";
import Link from "next/link";

import { FaArrowLeft } from "react-icons/fa";
import MainLayout from "@/components/MainLayout";
import UserInformationForm from "@/containers/user-management/create-user/user-information-form";

// =================================================================

const Users = () => {
  return (
    <MainLayout>
      <Link
        href={"/users"}
        className="inline-flex items-center gap-2 text-sm bg-secondary text-secondary-foreground py-2 px-4 rounded-lg">
        <FaArrowLeft />
        Back
      </Link>
      <div className="mt-8">
        <UserInformationForm />
      </div>
    </MainLayout>
  );
};

export default Users;
