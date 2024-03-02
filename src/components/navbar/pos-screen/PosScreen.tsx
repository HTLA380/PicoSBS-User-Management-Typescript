import Link from "next/link";
import React from "react";
import { FaCashRegister } from "react-icons/fa";

const PosScreen = () => {
  return (
    <Link
      href={"/#"}
      className="flex items-center justify-center w-8 text-xs rounded-md text-muted-foreground bg-secondary">
      <FaCashRegister />
    </Link>
  );
};

export default PosScreen;
