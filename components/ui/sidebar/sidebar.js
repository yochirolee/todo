import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();

  const handleActiveLink = (e, active) => {
    switch (active) {
      case 0:
        router.push("/");

        break;
      case 1:
        router.push("/categories");

        break;
      case 2:
        router.push("/user");

        break;
    }
  };

  return (
    <div className="sidebar w-1/6 pl-8 mt-20">
      <ul className=" flex flex-col cursor-pointer ">
        <li
          onClick={(e) => handleActiveLink(e, 0)}
          id="0"
          className={`my-2 pt-3 pl-4 rounded-l-full h-12 ${
            "/" === router.pathname ? "bg-gray-800" : ""
          }`}
        >
          <i className="lab la-apple mr-4"></i> <a>Dashboard</a>
        </li>

        <li
          id="1"
          onClick={(e) => handleActiveLink(e, 1)}
          className={`my-2 pt-3 pl-4 rounded-l-full h-12 ${
            "/categories" === router.pathname ? "bg-gray-800" : ""
          }`}
        >
          <i className="las la-list mr-4"></i>
          <a>Categories</a>
        </li>

        <li
          onClick={(e) => handleActiveLink(e, 2)}
          className={`my-2 pt-3 pl-4 rounded-l-full h-12 ${
            "/user" === router.pathname ? "bg-gray-800" : ""
          }`}
        >
          <i className="las la-user mr-4"></i> <a>User</a>
        </li>
      </ul>
    </div>
  );
}
