import Layout from "../components/ui/layout/Layout";
import Image from "next/image";
export default function User() {
  return (
    <Layout>
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-row h-8 flex-wrap w-2/3 mx-auto gap-3  mt-10 justify-around "></div>
        <div className=" h-full bg-gray-700 rounded-r-full opacity-70 grid ">
          <Image width="500px" height="500px" className='rounded-r-full' src="/profile.jpg"></Image>
        </div>
      </div>
    </Layout>
  );
}
