export default function SideBar() {
  return (
    <div className="sidebar w-2/6 pl-8 mt-20">
      <ul className=" flex flex-col  ">
        <li className="bg-gray-800 pl-4 pt-3 my-2 rounded-l-full h-12 ">
          <i className="lab la-apple mr-4"></i> <a>Dashboard</a>
        </li>
        <li className=" pt-3 my-2 pl-4 rounded-l-full h-12 ">
        <i className="las la-list mr-4"></i>
          <a>Categories</a>
        </li>
        <li className="my-2 pt-3 pl-4 rounded-l-full h-12 ">
          <i className="las la-user mr-4"></i> <a>User</a>
        </li>
      </ul>
    </div>
  );
}
