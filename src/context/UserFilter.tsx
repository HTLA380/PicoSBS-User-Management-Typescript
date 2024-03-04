"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

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

interface UserFilterContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  filteredUsers: User[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>;
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  selectedUsersId: number[];
  setSelectedUsersId: React.Dispatch<React.SetStateAction<number[]>>;
  selectAllChecked: boolean;
  setSelectAllChecked: React.Dispatch<React.SetStateAction<boolean>>;

  addUser: (newUser: User) => void;
  filterByName: (searchText: string) => void;
  filterByRole: (params: { role?: string; status?: string }) => void;
  resetFilter: () => void;
  deleteUser: () => void;
  paginatedUsers: User[];
  handleItemsPerPageChange: (newItemsPerPage: number) => void;
}

const UserFilterContext = createContext<UserFilterContextType>(
  {} as UserFilterContextType
);

export const UserFilterProvider: React.FC<{
  initialData: User[];
  children: ReactNode;
}> = ({ children, initialData }) => {
  const [users, setUsers] = useState<User[]>(initialData);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(initialData);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedUsersId, setSelectedUsersId] = useState<number[]>([]);
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false);

  useEffect(() => {
    // Update filteredUsers when initialData changes
    setUsers(initialData);
    setFilteredUsers(initialData);
  }, [initialData]);

  const addUser = (newUser: User) => {
    // Add the new user to the users array
    setUsers((prevUsers) => [...prevUsers, newUser]);
    // Additional logic for filtering, pagination, etc. if needed
  };

  const filterByName = (searchText: string) => {
    const filteredData = users.filter((data) =>
      data.user.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredUsers(filteredData);
  };

  const filterByRole = ({
    role,
    status,
  }: {
    role?: string;
    status?: string;
  }) => {
    const filtered = users.filter((user) => {
      switch (true) {
        case !!role && !!status:
          return user.role === role && user.status === status;
        case !!role:
          return user.role === role;
        case !!status:
          return user.status === status;
        default:
          return true;
      }
    });

    setFilteredUsers(filtered);
  };

  const resetFilter = () => {
    setFilteredUsers(users);
  };

  const deleteUser = () => {
    // Filter out selected users from the users array
    const updatedUsers = users.filter(
      (user) => !selectedUsersId.includes(user.id)
    );

    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setSelectedUsersId([]); // Clear selected users
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  // Calculate the range of items to display based on pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <UserFilterContext.Provider
      value={{
        users,
        setUsers,
        filteredUsers,
        setFilteredUsers,
        itemsPerPage,
        setItemsPerPage,
        currentPage,
        setCurrentPage,
        selectedUsersId,
        setSelectedUsersId,
        selectAllChecked,
        setSelectAllChecked,

        addUser,
        filterByName,
        filterByRole,
        resetFilter,
        deleteUser,
        paginatedUsers,
        handleItemsPerPageChange,
      }}>
      {children}
    </UserFilterContext.Provider>
  );
};

export const useUserFilter = () => {
  return useContext(UserFilterContext);
};
