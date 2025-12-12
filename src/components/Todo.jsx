import { Process } from "@/components/Process";
import { Hereggui } from "@/components/Hereggui";
import { useState } from "react";
// import { filter } from "@/constants/filter";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInput] = useState("");

  const handleSubmit = () => {
    if (!inputValue) {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      value: inputValue,
      id: Date.now(),
      isDone: false,
    };
    setTodos((previous) => [newTask, ...previous]);
    setInput("");
  };
  const deleteButton = (id) => {
    const filtered = todos.filter((item) => item.id !== id);
    setTodos(filtered);
  };
  const checkBox = (id) => {
    const checked = todos.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodos(checked);
  };
  // const addButton = (id) => {
  //   const addInput = ;
  // };
  // console.log(todos);

  const filter = ["All", "Active", "Completed"];
  const handleClick = (event) => {
    console.log(event.currentTarget.id);
  };

  return (
    <div className="w-[377px] border border-gray-200 rounded-md">
      <div className="pl-4 pr-4 pt-6 pb-6 space-y-5">
        <div className="flex flex-col space-y-5">
          <p className=" flex justify-center items-center text-xl font-semibold">
            To-Do list
          </p>
          <div className="flex space-x-1.5">
            <div>
              <input
                value={inputValue}
                onChange={(handleChange) => setInput(handleChange.target.value)}
                type="text"
                placeholder="Add a new task..."
                className="w-[280px] h-10 border border-gray-200 rounded-md pl-4 text-sm pt-[11.5px] pb-[11.5px]"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-[59px] h-10 bg-[#3C82F6] text-white text-sm rounded-md"
            >
              Add
            </button>
          </div>
          <div className="flex space-x-1.5">
            {filter.map((value) => (
              <button
                id={value}
                onClick={handleClick}
                className="h-8 rounded-md pl-3 pr-3 bg-gray-100 text-xs"
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <Process
          todos={todos}
          deleteButton={deleteButton}
          checkBox={checkBox}
        />

        <div className="flex justify-center items-center text-sm text-gray-500 font-normal">
          <p>No tasks yet. Add one above!</p>
        </div>
      </div>
      <div className="flex space-x-1 justify-center items-center pt-10 pr-4 pl-4 pb-6 text-xs">
        <p className="text-gray-500">Powered by</p>
        <a href="https://pinecone.mn/" className="text-blue-500">
          Pinecone academy
        </a>
      </div>
    </div>
  );
};
