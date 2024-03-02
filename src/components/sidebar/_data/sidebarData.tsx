import { FaAddressBook, FaHome, FaUsers } from "react-icons/fa";

export const sidebarData = [
  {
    menu_name: "Home",
    menu_path: "/",
    menu_icon: <FaHome />,
  },
  {
    menu_name: "Users",
    menu_path: "/users",
    menu_icon: <FaUsers />,
  },
  {
    menu_name: "Contacts",
    menu_path: "/contacts",
    menu_icon: <FaAddressBook />,
  },
];
