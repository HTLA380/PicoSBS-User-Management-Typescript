export const pageTitleData = [
  {
    url: "/",
    title: "Pico SBS",
    subtitlePathname: "Home",
    subtitle: "Dashboard",
  },
  {
    url: "/users",
    title: "Users List",
    subtitlePathname: "Users",
    subtitle: "Users List",
  },
  {
    url: "/users/create",
    title: "Create User",
    subtitlePathname: "Users List",
    subtitle: "Create",
  },
  {
    url: "/business-users/import",
    title: "Import Users",
    subtitlePathname: "Users",
    subtitle: "Import",
  },
  {
    url: "/roles",
    title: "Roles List",
    subtitlePathname: "Roles",
    subtitle: "Roles List",
  },
  {
    url: "/roles/create",
    title: "Create Role",
    subtitlePathname: "Roles List",
    subtitle: "Create",
  },
];

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
    menu_child: [
      {
        menu_name: "Users List",
        menu_path: "/users",
      },
      {
        menu_name: "Create User",
        menu_path: "/users/create",
      },
    ],
  },
  {
    menu_name: "Contacts",
    menu_path: "/contacts",
    menu_icon: <FaAddressBook />,
  },
];

export const CustomerGroupList = [];

export const CreateBusinessDetails = [
  {
    id: 1,
    header: "Business Details",
    text: "Name your Business",
  },
  {
    id: 2,
    header: "Business Settings",
    text: "Configure your business setting",
  },
  {
    id: 3,
    header: "Business Owner",
    text: "Create Owner for business",
  },
];

export const OrdersData = [
  {
    order_id: "12345",
    customer: {
      name: "Olivia Wild",
      img: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    status: "Pending",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
  {
    order_id: "12345",
    customer: {
      name: "Max Smith",
      img: "",
    },
    status: "Completed",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
  {
    order_id: "12345",
    customer: {
      name: "Dan Wilson",
      img: "",
    },
    status: "Delivering",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
  {
    order_id: "12345",
    customer: {
      name: "Robert Doe",
      img: "",
    },
    status: "Processing",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
  {
    order_id: "12345",
    customer: {
      name: "Emma Smith",
      img: "https://preview.keenthemes.com/metronic8/demo39/assets/media/avatars/300-6.jpg",
    },
    status: "Denied",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
  {
    order_id: "12345",
    customer: {
      name: "Olivia Wild",
      img: "",
    },
    status: "Pending",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
  {
    order_id: "12345",
    customer: {
      name: "Olivia Wild",
      img: "",
    },
    status: "Expired",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
  {
    order_id: "12345",
    customer: {
      name: "Olivia Wild",
      img: "",
    },
    status: "Pending",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
  {
    order_id: "12345",
    customer: {
      name: "Olivia Wild",
      img: "",
    },
    status: "Pending",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
  {
    order_id: "12345",
    customer: {
      name: "Olivia Wild",
      img: "",
    },
    status: "Processing",
    total: "$439.00",
    date_added: "06/09/2023",
    date_modified: "13/09/2023",
  },
];

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

export const UsersListInfos: User[] = [
  {
    id: 1,
    user: {
      name: "Htet Aung Lin",
      imgUrl: "/assets/images/users/htetaunglin.png",
      email: "htetaunglin.coder@gmail.com",
    },
    username: "htla",
    role: "administrator",
    status: "active",
  },
  {
    id: 2,
    user: {
      name: "Ma Yin New Moe",
      email: "octoberyinnwemoe20@gmail.com",
    },
    username: "yinnwe",
    role: "analyst",
    status: "active",
  },
  {
    id: 3,
    user: {
      name: "Ma Hnin Myat Noe Lwin",
      email: "noe735420@gmail.com",
    },
    username: "hnin",
    role: "developer",
    status: "active",
  },
  {
    id: 4,
    user: {
      name: "Htet Wai Aung",
      email: "htet@gmail.com",
    },
    username: "htetwaiaung",
    role: "support",
    status: "active",
  },
  {
    id: 5,
    user: {
      name: "Khaing Yin Mon",
      email: "khaing@gmail.com",
    },
    username: "khaingyinmon",
    role: "tiral",
    status: "active",
  },
  {
    id: 6,
    user: {
      name: "Sai Tayzar Htun",
      email: "sai@gmail.com",
    },
    username: "saisai",
    role: "analyst",
    status: "active",
  },
  {
    id: 7,
    user: {
      name: "Aung Nyi Nyi Htwe",
      email: "aung@gmail.com",
    },
    username: "aungnyinyihtwe",
    role: "developer",
    status: "inactive",
  },
  {
    id: 8,
    user: {
      name: "Hlaing Htet Htet Aung",
      email: "hlaing@gmail.com",
    },
    username: "htethtet",
    role: "support",
    status: "active",
  },
  {
    id: 9,
    user: {
      name: "Sweety Soe Moe",
      email: "sweety@gmail.com",
    },
    username: "sweety",
    role: "tiral",
    status: "active",
  },
  {
    id: 10,
    user: {
      name: "Soe Wunna Aung",
      email: "soe@gmail.com",
    },
    username: "soewunna",
    role: "analyst",
    status: "active",
  },
  {
    id: 11,
    user: {
      name: "Chit Thae Ko",
      email: "chit@gmail.com",
    },
    username: "chitthaeko",
    role: "developer",
    status: "inactive",
  },
  {
    id: 12,
    user: {
      name: "Kyaw Zaw Win",
      email: "kyaw@gmail.com",
    },
    username: "kyawzawwin",
    role: "support",
    status: "active",
  },
  {
    id: 13,
    user: {
      name: "Hlaing Ko Ko  Win",
      email: "hlaing@gmail.com",
    },
    username: "hlaingkoko",
    role: "trial",
    status: "inactive",
  },
  {
    id: 14,
    user: {
      name: "Daw Mya Mya",
      email: "phyoepyaemon977@gmail.com",
    },
    username: "mmya",
    role: "trial",
    status: "active",
  },
  {
    id: 15,
    user: {
      name: "Wai Wai",
      email: "waiwai@gmail.com",
    },
    username: "waiwai",
    role: "support",
    status: "active",
  },
  {
    id: 16,
    user: {
      name: "Ah Thee",
      email: "ahthee@gmail.com",
    },
    username: "ahtee",
    role: "developer",
    status: "active",
  },
  {
    id: 17,
    user: {
      name: "Mr Bo Bo",
      email: "bobo@gmail.com",
    },
    username: "bobo",
    role: "analyst",
    status: "active",
  },
  {
    id: 18,
    user: {
      name: "Mr Mdy Representative",
    },
    username: "representative",
    role: "developer",
    status: "inactive",
  },
  {
    id: 19,
    user: {
      name: "Kyaw Saw",
      email: "notmyrealemail@unknown.com",
    },
    username: "kyawsaw",
    role: "support",
    status: "active",
  },
  {
    id: 20,
    user: {
      name: "Soe Moe Kyaw",
      email: "testmail123@gmail.com",
    },
    username: "soemoe",
    role: "analyst",
    status: "active",
  },
  {
    id: 21,
    user: {
      name: "Aung Si",
      email: "aungsi@gmail.com",
    },
    username: "aungsi",
    role: "trial",
    status: "active",
  },
  {
    id: 22,
    user: {
      name: "U Hla Than",
      email: "hlathan@gmail.com",
    },
    username: "hlathan",
    role: "developer",
    status: "active",
  },
  {
    id: 23,
    user: {
      name: "Jone",
    },
    username: "jone",
    role: "support",
    status: "active",
  },
  {
    id: 24,
    user: {
      name: "Mr Style Bender",
      email: "stylebender@gmail.com",
    },
    username: "stylebender",
    role: "developer",
    status: "active",
  },
  {
    id: 25,
    user: {
      name: "Ko Zoe Win",
      email: "zoe22@gmail.com",
    },
    username: "zoe22",
    role: "analyst",
    status: "active",
  },
];
export const RolesListInfos = [
  {
    name: "Administrator",
  },
  {
    name: "Cashier",
  },
  {
    name: "Store Keeper",
  },
];

export const SuppliersInfos = [
  {
    contact_id: "K0001",
    business_name: "ကြယ်နီ အုတ်ရောင်း၀ယ်ရေး",
    supplier_name: "U Kyaw Htwe",
    mobile: "0941008973",
    email: "",
    address: "ဈေးပိုင်းရပ်၊ တောင်ကြီး။, Myanmar",
    payable_amount: "",
    receivable_amount: "",
    custom_field_1: "",
    custom_field_2: "",
    custom_field_3: "",
    custom_field_4: "",
  },
  {
    contact_id: "S0001",
    business_name: "စိန်ကျေးတော အုတ်ရောင်း၀ယ်ရေး",
    supplier_name: "Daw Sein Ma Ma",
    mobile: "081-205446",
    email: "",
    address: "ချမ်းမြသာစည်ရပ်၊ တောင်ကြီး။",
    payable_amount: "",
    receivable_amount: "",
    custom_field_1: "",
    custom_field_2: "",
    custom_field_3: "",
    custom_field_4: "",
  },
  {
    contact_id: "T0002",
    business_name: "ကျောက်စိမ်း အုတ်ရောင်း၀ယ်ရေး",
    supplier_name: "U Tin Win Sein",
    mobile: "095211378",
    email: "",
    address: "အေးသာယာမြို့သစ်၊ တောင်ကြီး။",
    payable_amount: "",
    receivable_amount: "",
    custom_field_1: "",
    custom_field_2: "",
    custom_field_3: "",
    custom_field_4: "",
  },
  {
    contact_id: "K0001",
    business_name: "ကြယ်နီ အုတ်ရောင်း၀◌ယ်ရေ",
    supplier_name: "U Kyaw Htwe",
    mobile: "0941008973",
    email: "",
    address: "ဈေးပိုင်းရပ်၊ တောင်ကြီး။, Myanmar",
    payable_amount: "",
    receivable_amount: "",
    custom_field_1: "",
    custom_field_2: "",
    custom_field_3: "",
    custom_field_4: "",
  },
];
export const ProductsList = [
  {
    product: {
      name: "Product 1",
      img: "http://localhost:3000/static/media/3.071d2d900d7efd7b0819.jpg",
    },
    sku: "02474004",
    qty: "6",
    price: "78.00",
    rating: "4",
    status: "published",
  },
  {
    product: {
      name: "Product 2",
      img: "http://localhost:3000/static/media/3.071d2d900d7efd7b0819.jpg",
    },
    sku: "02474008",
    qty: "28",
    price: "78.00",
    rating: "4",
    status: "Inactive",
  },
  {
    product: {
      name: "Product 3",
      img: "http://localhost:3000/static/media/3.071d2d900d7efd7b0819.jpg",
    },
    sku: "02474005",
    qty: "35",
    price: "33.00",
    rating: "4",
    status: "Scheduled",
  },
];

export const infosData = [
  {
    id: "1",
    name: "mg mg",
    email: "mg@gmail.com",
    company: "Mg Company",
    payment_method: "****767822",
    created_date: "14 Dec 2020",
  },
  {
    id: "2",
    name: "aye aye",
    email: "aye@gmail.com",
    company: "Aye Company",
    payment_method: "****938483",
    created_date: "12 Nov 2020",
  },
  {
    id: "3",
    name: "aung aung",
    email: "aung@gmail.com",
    company: "",
    payment_method: "****33423",
    created_date: "21 Oct 2020",
  },
  {
    id: "4",
    name: "kyaw kyaw",
    email: "kyaw@gmail.com",
    company: "Kyaw Company",
    payment_method: "****239923",
    created_date: "19 Oct 2020",
  },
  {
    id: "5",
    name: "ni ni",
    email: "ni@gmail.com",
    company: "",
    payment_method: "****20948",
    created_date: "23 Sep 2020",
  },
  {
    id: "6",
    name: "mg mg",
    email: "mg@gmail.com",
    company: "Mg Company",
    payment_method: "****767822",
    created_date: "14 Dec 2020",
  },
  {
    id: "7",
    name: "aye aye",
    email: "aye@gmail.com",
    company: "Aye Company",
    payment_method: "****938483",
    created_date: "12 Nov 2020",
  },
  {
    id: "8",
    name: "aung aung",
    email: "aung@gmail.com",
    company: "",
    payment_method: "****33423",
    created_date: "21 Oct 2020",
  },
  {
    id: "9",
    name: "kyaw kyaw",
    email: "kyaw@gmail.com",
    company: "Kyaw Company",
    payment_method: "****239923",
    created_date: "19 Oct 2020",
  },
  {
    id: "10",
    name: "ni ni",
    email: "ni@gmail.com",
    company: "",
    payment_method: "****20948",
    created_date: "23 Sep 2020",
  },
  {
    id: "11",
    name: "mg mg",
    email: "mg@gmail.com",
    company: "Mg Company",
    payment_method: "****767822",
    created_date: "14 Dec 2020",
  },
  {
    id: "12",
    name: "aye aye",
    email: "aye@gmail.com",
    company: "Aye Company",
    payment_method: "****938483",
    created_date: "12 Nov 2020",
  },
  {
    id: "13",
    name: "aung aung",
    email: "aung@gmail.com",
    company: "",
    payment_method: "****33423",
    created_date: "21 Oct 2020",
  },
  {
    id: "14",
    name: "kyaw kyaw",
    email: "kyaw@gmail.com",
    company: "Kyaw Company",
    payment_method: "****239923",
    created_date: "19 Oct 2020",
  },
  {
    id: "15",
    name: "ni ni",
    email: "ni@gmail.com",
    company: "",
    payment_method: "****20948",
    created_date: "23 Sep 2020",
  },
  {
    id: "16",
    name: "mg mg",
    email: "mg@gmail.com",
    company: "Mg Company",
    payment_method: "****767822",
    created_date: "14 Dec 2020",
  },
  {
    id: "17",
    name: "aye aye",
    email: "aye@gmail.com",
    company: "Aye Company",
    payment_method: "****938483",
    created_date: "12 Nov 2020",
  },
  {
    id: "18",
    name: "aung aung",
    email: "aung@gmail.com",
    company: "",
    payment_method: "****33423",
    created_date: "21 Oct 2020",
  },
  {
    id: "19",
    name: "kyaw kyaw",
    email: "kyaw@gmail.com",
    company: "Kyaw Company",
    payment_method: "****239923",
    created_date: "19 Oct 2020",
  },
  {
    id: "20",
    name: "ni ni",
    email: "ni@gmail.com",
    company: "",
    payment_method: "****20948",
    created_date: "23 Sep 2020",
  },
];
