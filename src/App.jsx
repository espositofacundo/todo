import { useEffect, useState } from "react";
import Header from "./assets/components/Header";
import TodoCreate from "./assets/components/TodoCreate";
import TodoFilter from "./assets/components/TodoFilter";
import TodoList from "./assets/components/TodoList";
import Todocomputed from "./assets/components/Todocomputed";


const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos]);

    const createTodo = (title)=>{

        const NewTodo = {
            id: Date.now(),
            title,
            completed:false,
        }

        setTodos([...todos, NewTodo])
    }


    const removeTodo = (id) => {

        setTodos(todos.filter((todo)=> todo.id !== id ));
    }

    const updateTodo = (id) => {

        setTodos(todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed}:todo ) )
    }

    const computedItemLeft = todos.filter((todo)=>!todo.completed).length;
    const clearCompleted = () => {
        setTodos(todos.filter((todo)=>!todo.completed));
    }

    const [filter,setFilter] = useState("all");

    const changeSetfilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo)=>!todo.completed);
            case "completed":
                return todos.filter((todo)=>todo.completed);
            default:
                return todos;
        }
    }


    return (
        <>
            <div
                className="bg-contain bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')] bg-gray-300 min-h-screen md:bg-[url('./assets/images/bg-desktop-light.jpg')]"
               
            >
                <Header></Header>
                <main className="container mx-auto px-4 mt-8">
                    <TodoCreate createTodo={createTodo}></TodoCreate>

                    <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />

                    <Todocomputed computedItemLeft={computedItemLeft} clearCompleted={clearCompleted}></Todocomputed>

                    <TodoFilter changeSetfilter={changeSetfilter} filter={filter} ></TodoFilter>
                </main>

                <footer className="text-center text-gray-700 mt-8 ">
                    Drag and drop to reoder list
                </footer>
            </div>
        </>
    );
};

export default App;
