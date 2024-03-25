const Todocomputed = ({computedItemLeft , clearCompleted}) => {
    return (
        <section className="p-4 flex justify-between bg-white rounded-b-md">
        <span className="text-gray-400">{computedItemLeft} items pendientes</span>
        <button className="text-gray-400" onClick={clearCompleted} >
            Limpiar los completados
        </button>
        </section>
    )
}

export default Todocomputed