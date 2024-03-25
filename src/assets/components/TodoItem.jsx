import IconCheck from "./icons/iconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 py-4 border-b-gray-300 border-b">
            <button
                className={`h-5 w-5  ml-4  rounded-full border-2  ${completed ? "grid place-items-center flex-none  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block flex-none"}`}
                onClick={()=>updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>

            <p
                className={`${completed ? "line-through text-gray-500 grow " : "text-gray-800 grow "}`}
            >
                {title}
            </p>
            <button className="flex-none mr-4" onClick={()=>removeTodo(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path
                        fill="#494C6B"
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                </svg>
            </button>
        </article>
    );
};

export default TodoItem;
