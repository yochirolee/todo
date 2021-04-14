export default function RoundedCheckBox({ isChecked, todo, handleTodoChange }) {
  return (
    <div onClick={() => handleTodoChange(todo)}>
      <div
        for="checkbox"
        className={`md:w-3 md:h-3  h-2 w-2 rounded-full bg-white mx-6 ${
          isChecked ? "bg-green-400" : ""
        } ring-blue-200 mx-4 `}
      >
        <input
          type="checkbox"
          className="hidden"
         
          checked={isChecked}
        ></input>
      </div>
    </div>
  );
}
