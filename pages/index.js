import Head from "next/head";
import { useState, useEffect } from "react";
import TaskCard from "../components/ui/cards/TaskCard";
import CardsContainer from "../components/ui/container/cardsContainer";
import StatsContainer from "../components/ui/container/statsContainer";
import SideBar from "../components/ui/sidebar/sidebar";
import { TodoList } from "../data/data";

export default function Home() {
  const [todoList, setTodoList] = useState(TodoList);

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
    <div>
      <Head>
        <title>Next Todo</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>

      <main>
        <div className=" bg-gray-600  h-screen text-white  mx-auto grid place-items-center">
          <div className="container relative w-full h-full bg-gray-600 rounded-lg flex flex-row ">
            <div className='absolute h-8 flex items-center right-12 top-6 border rounded-full px-3'>
              <input className='bg-gray-600 outline-none'></input>
              <i className="las la-search"></i>
            </div>
            <SideBar />
        
            <div className="bg-gray-800 rounded-lg h-5/6 w-5/6 my-auto mr-10">
              {/* --STATS CONTAINER--  */}
              <StatsContainer todoList={todoList} />
              {/* --STATS CONTAINER--  */}

              {/* --CARD CONTAINER--  */}
              <CardsContainer>
                {TodoList.map((todo) => (
                  <TaskCard todo={todo} handleTodoChange={handleTodoChange} />
                ))}
              </CardsContainer>
              {/* --END CARD CONTAINER--  */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
