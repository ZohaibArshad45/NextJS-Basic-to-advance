import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100 py-4 shadow-md">
      <Button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow transition">
        <Link href="/">🏠 Home</Link>
      </Button>
    </div>
  );
};

export default Header;
