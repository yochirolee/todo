import Badge from "../badges/badge";
import RoundedCheckBox from "../roundedCheckBox";

export default function TaskCard({ todo, handleTodoChange }) {
  const text = todo.complete ? "complete" : "pending";
  const color = todo.complete ? "green" : "yellow";
  const isChecked = todo.complete;

  return (
    <div className="flex  flex-row bg-gray-700  justify-around rounded-full my-2  w-5/6 mx-auto h-10 items-center">
      <RoundedCheckBox
        isChecked={isChecked}
        todo={todo}
        handleTodoChange={handleTodoChange}
      />
      <div className="w-3/5  ">
        <span className="">{todo.title}</span>
      </div>
      <div className="w-1/3">
        <Badge color={color} text={text} />
      </div>
    </div>
  );
}
