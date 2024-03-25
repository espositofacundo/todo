const TodoFilter = ({ changeSetfilter, filter }) => {
    return (
        <section className="container mx-auto  mt-8">
            <div className="bg-white rounded-md p-4 flex justify-center gap-8">
                <button
                    className={`${filter === "all" ? "text-blue-600 hover:text-gray-500" : "text-gray-500 hover:text-blue-200"}`}
                    onClick={() => changeSetfilter("all")}
                >
                    All 
                </button>
                <button
                    className={`${filter === "active" ? "text-blue-600 hover:text-gray-500" : "text-gray-500 hover:text-blue-200"}`}
                    onClick={() => changeSetfilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${filter === "completed" ? "text-blue-600 hover:text-gray-500" : "text-gray-500 hover:text-blue-200"}`}
                    onClick={() => changeSetfilter("completed")}
                >
                    completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
