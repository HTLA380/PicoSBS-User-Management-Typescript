"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import SelectDropDownMenu from "@/components/menu/SelectDropDownMenu";
import Checkbox from "@/components/checkbox/Checkbox";
import { UsersListInfos } from "../../../../../constants/data";

import LoadingSvg from "@/utils/LoadingSvg";

// ==================================================================

const roleOptionData = [
  { id: 1, name: "Administrator" },
  { id: 2, name: "Analyst" },
  { id: 3, name: "Developer" },
  { id: 4, name: "Support" },
  { id: 5, name: "Tiral" },
];

interface useInformationInputDataInterface {
  labelName: string;
  placeHolder: string;
  name: string;
  className?: string;
  inputType: string;
}

const useInformationInputData: useInformationInputDataInterface[] = [
  {
    labelName: "Prefix",
    placeHolder: "Mr / Mrs / Miss",
    name: "prefix",
    inputType: "text",
  },
  {
    labelName: "First Name",
    placeHolder: "First Name",
    name: "firstName",
    className: "col-span-2",
    inputType: "text",
  },
  {
    labelName: "Last Name",
    placeHolder: "Last Name",
    name: "lastName",
    className: "col-span-2",
    inputType: "text",
  },
  {
    labelName: "User Name",
    placeHolder: "Username",
    name: "username",
    className: "col-span-2",
    inputType: "text",
  },
  {
    labelName: "Email",
    placeHolder: "username@domain.xyz",
    name: "email",
    className: "col-span-3",
    inputType: "email",
  },
];

interface User {
  id: number;
  user: {
    name: string;
    email?: string;
    imgUrl?: string;
  };
  userName: string;
  role: string;
  status: string;
}

interface UserState {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  role: string | null;
  isActive: boolean;
}

const UserInformationForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<UserState>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    role: "",
    isActive: true,
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "prefix") return;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    // Create a new user object from the form data
    const newUser: User = {
      id: UsersListInfos.length + 1, // Generate a unique ID
      user: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
      },
      userName: formData.userName,
      role: formData.role || "", // Ensure role is not null
      status: formData.isActive ? "Active" : "Inactive",
    };

    setTimeout(() => {
      console.log("users added", newUser);
      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        role: "",
        isActive: true,
      });
      setLoading(false);
      router.push("/users");
    }, 1500);
  };

  const handleRoleSelect = (state: string | null) => {
    setFormData((prevState) => ({ ...prevState, role: state }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-secondary p-6 rounded-lg">
      <h3 className="font-semibold text-lg">User Information</h3>
      <div className="grid grid-cols-5 w-full gap-3 mt-3">
        {useInformationInputData.map((data) => (
          <RenderInput
            key={data.name}
            disabled={loading}
            className={`mt-3 ${data.className ? data.className : ""}`}
            labelName={data.labelName}
            placeholder={data.placeHolder}
            name={data.name}
            inputType={data.inputType}
            onChange={handleChange}
          />
        ))}

        <div className="col-span-full mt-3">
          <label className="text-sm">Role:</label>
          <SelectDropDownMenu
            options={roleOptionData}
            selected={formData.role}
            handleChange={handleRoleSelect}
            placeholder="Select a Role..."
            className="bg-transparent border border-border text-sm"
          />
        </div>

        <div className="col-span-full flex items-center gap-4 mt-3">
          <Checkbox
            checked={formData.isActive}
            onChange={() =>
              setFormData((prevState) => ({
                ...prevState,
                isActive: !prevState.isActive,
              }))
            }
          />
          <div className="text-sm text-secondary-foreground">
            <p className="font-semibold">Is Active?</p>
            <span>User account is activate or deactivate</span>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          className={`inline-flex items-center gap-2 text-primary-foreground bg-primary py-2 text-sm px-5 rounded-lg hover:brightness-90 mt-5 ${
            loading ? "pointer-events-none" : "pointer-events-auto"
          }`}>
          Create
          {loading && <LoadingSvg />}
        </button>
      </div>
    </form>
  );
};

interface RenderInputInterface {
  className?: string;
  labelName: string;
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  disabled?: boolean;
  inputType?: string;
}

const RenderInput: React.FC<RenderInputInterface> = ({
  className,
  labelName,
  placeholder,
  name,
  value,
  onChange,
  disabled,
  inputType,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm mb-1 cursor-pointer">
        {labelName}
      </label>
      <input
        required={true}
        type={inputType || "text"}
        id={name}
        disabled={disabled}
        name={name}
        value={value && value}
        onChange={onChange && onChange}
        placeholder={placeholder}
        className="w-full border placeholder:text-muted-foreground border-border text-sm rounded-md p-2 focus:outline focus:outline-accent-foreground bg-transparent"
      />
    </div>
  );
};

export default UserInformationForm;
