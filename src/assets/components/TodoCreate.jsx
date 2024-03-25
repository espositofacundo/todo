import { useState } from "react";
import IconCheck from "./icons/iconCheck";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("")

    const handleSubmitAddTodo = (e) => {
        e.preventDefault()
        if (title.trim().length > 0) {
            createTodo(title)
            setTitle("")
        }
        setTitle("")


        

    };

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="bg-white rounded-md overflow-hidden px-4 py-4 flex gap-4 items-center"
        >
            <button onSubmit={handleSubmitAddTodo} className="grid place-items-center h-5 w-5 rounded-full border-2  bg-green-800 hover:bg-green">
            <IconCheck></IconCheck>
            </button>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-500 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
        </form>
    );
};

export default TodoCreate;
