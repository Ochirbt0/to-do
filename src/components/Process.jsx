export const Process = ({ todos, deleteButton, checkBox }) => {
  return (
    <div className="flex flex-col space-y-5">
      {todos.map((item) => (
        <div className="flex flex-col justify-center items-center space-y-5">
          <div className="flex justify-between items-center rounded-md w-[345px] h-[62px] bg-gray-50">
            <div className="flex text-sm items-center justify-center pl-4 space-x-2.5">
              <input
                type="checkbox"
                checked={item.isDone}
                onChange={() => checkBox(item.id)}
                className="w-5 h-5"
              />
              <div className="">{item.value}</div>
            </div>
            <div className="pr-4">
              <button
                onClick={() => deleteButton(item.id)}
                className=" text-sm flex items-center justify-center w-[67px] h-[30px] bg-red-50 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
