'use client';

import Container from "../Container";
import Link from "next/link";
import AdminNavItem from "./AdminNavItem";
import {  MdAccountBox, MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import { usePathname } from "next/navigation";
import { mdiAccountAlert } from "@mdi/js";

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div
          className="flex flex-row items-center justify-between
           md:justify-center gap-8 md:gap-12
                overflow-x-auto flex-nowrap"
        >
          <Link href="/admin">
            <AdminNavItem label="Summary" icon={MdDashboard} 
            selected={pathname === "/admin"} />
          </Link>

          <Link href="/admin/User-Mange">
            <AdminNavItem label="UserManage" icon={MdAccountBox} 
            selected={pathname === "/admin"} />
          </Link>


          <Link href="/admin/add-products">
            <AdminNavItem label="AddProducts" icon={MdLibraryAdd} 
            selected={pathname === "/add-products"} />
          </Link>

          <Link href="/admin/manage-products">
            <AdminNavItem label="ManageProducts" icon={MdDns} 
            selected={pathname === "/admin/manage-products"} />
          </Link>

          <Link href="/admin/manage-orders">
            <AdminNavItem label="ManageOrders" icon={MdFormatListBulleted} 
            selected={pathname === "/admin/manage-orders"} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
