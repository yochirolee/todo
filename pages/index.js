import { useState } from "react";
import TaskCard from "../components/ui/cards/TaskCard";
import CardsContainer from "../components/ui/container/cardsContainer";
import StatsContainer from "../components/ui/container/statsContainer";
import NewTaskForm from "../components/ui/forms/newTaskForm";

import { TodoList } from "../data/data";
import Layout from "../components/ui/layout/Layout";

export default function Home() {
  const [todoList, setTodoList] = useState(TodoList);
  const [isNew, setIsNew] = useState(false);

  const handleIsNew = () => {
    setIsNew(!isNew);
  };

  const handleTodoChange = (todo) => {
    todo.complete = !todo.complete;
    const todoAux = [...todoList];
    todoAux.map((el) => {
      if (el.id === todo.id) {
        el.complete = todo.complete;
      }
    });
    setTodoList(todoAux);
  };

  return (
    <Layout>
      <StatsContainer todoList={todoList} />
      {isNew ? (
        <NewTaskForm />
      ) : (
        <CardsContainer>
          <div className="flex flex-row justify-end px-20">
            <button
              onClick={() => handleIsNew()}
              className="mt-2 bg-yellow-500 rounded-full mr-2 px-3 py-1 my-4 "
            >
              New Task
            </button>
          </div>
          {TodoList.map((todo) => (
            <TaskCard
              todo={todo}
              key={todo.id}
              handleTodoChange={handleTodoChange}
            />
          ))}
        </CardsContainer>
      )}
    </Layout>
  );
}
