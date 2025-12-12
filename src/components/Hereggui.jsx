export const Input = () => {
  return (
    <div className="flex pl-4 pt-[11.5px] pb-[11.5px] w-[280px] h-10 border border-gray-200 rounded-md text-sm">
      <div>
        <input type="text" placeholder="Create PR" />
      </div>
    </div>
  );
};
``;
const addTodo = () => {
  if (inputValue.trim()) {
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  }
};
{
  /* <div className="flex jusitfy-start items-start space-x-1.5">
            <button className="w-[38px] h-8 rounded-md bg-[#3C82F6] text-white text-xs">
              All
            </button>
            <button className="w-[60px] h-8 rounded-md bg-gray-100 text-xs">
              Active
            </button>
            <button className="w-[87px] h-8 rounded-md bg-gray-100 text-xs">
              Completed
            </button>
          </div> */
}
