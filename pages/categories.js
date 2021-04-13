import Layout from "../components/ui/layout/Layout";
import { categories } from "../data/categoriesData";
import Image from "next/image";
export default function Categories() {
  return (
    <Layout>
      <div className="grid grid-cols-2 h-full">
        <div className="flex flex-row h-8 flex-wrap w-2/3 mx-auto gap-3  mt-10 justify-around ">
          <div className="w-full mb-10 pb-4 border-b border-gray-600">
            <p className="mb-2">Add a New Category</p>
            <input className="h-10 rounded-full w-64"></input>
            <button className="rounded-full px-2 h-10 bg-yellow-500 mx-2">
              Add
            </button>
          </div>
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-row  rounded-full px-2 py-1 border border-white text-sm items-center justify-around"
            >
              <p>{category.category}</p>
              <span className="las la-trash ml-4"></span>
            </div>
          ))}
        </div>
        <div className=" h-full bg-gray-700 rounded-r-full opacity-30 grid place-items-center">
          <Image width="500px" height="500px" src="/todo.png"></Image>
        </div>
      </div>
    </Layout>
  );
}
