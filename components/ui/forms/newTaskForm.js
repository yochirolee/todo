import { categories } from "../../../data/categoriesData";
export default function NewTaskForm() {
  return (
    <div className="container">
      <div className="w-1/3 mx-auto pt-20 text-gray-600">
        <form>
          <input
            placeholder="todo"
            className="h-10 pl-4 outline-none rounded-xl w-full"
          ></input>
          <select className="w-full h-10 my-5 rounded-xl px-2">
            {categories.map((category) => (
              <option>{category.category}</option>
            ))}
          </select>
          <button className="bg-yellow-500 outline-none mt-2 w-full h-10 rounded-xl">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
