import backgroundImage from "./assets/images/bg-mobile-light.jpg"; // Importar la imagen
import crossIcon from './assets/images/icon-cross.svg'; // Importar el SVG
import moonIcon from './assets/images/icon-moon.svg'; // Importar el nuevo SVG


const App = () => {
    return (
        <>
            <div
                className="bg-contain bg-no-repeat bg-gray-300 min-h-screen "
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <header className="container mx-auto px-4 pt-8 ">
                    <div className="flex justify-between pb-4">
                        <h1 className="uppercase text-white text-2xl font-bold tracking-[0.3em]">
                            todo
                        </h1>
                        <button><img src={moonIcon} alt="Moon Icon" /></button>
                    </div>

                    <form className="bg-white rounded-md overflow-hidden px-4 py-4 flex gap-4 items-center">
                        <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
                        <input
                            type="text"
                            placeholder="Create a new todo..."
                            className="w-full text-gray-500 outline-none"
                        ></input>
                    </form>
                </header>
                <main className="container mx-auto px-4 mt-8">
                    <div className="bg-white rounded-md ">
                        <article className="flex gap-4 py-4 border-b-gray-300 border-b">
                            <button className="h-5 w-5 rounded-full border-2 inline-block flex-none ml-4"></button>
                            <p className="text-gray-500 grow">aca se vana  crear los textos</p>
                            <button className="flex-none mr-4" > <img src={crossIcon} alt="Cross Icon" /></button>
                        </article>
                        <article className="flex gap-4 py-4 border-b-gray-300 border-b">
                            <button className="h-5 w-5 rounded-full border-2 inline-block flex-none ml-4"></button>
                            <p className="text-gray-500 grow">aca se vana  crear los textos</p>
                            <button className="flex-none mr-4" > <img src={crossIcon} alt="Cross Icon" /></button>
                        </article>
                        <article className="flex gap-4 py-4 border-b-gray-300 border-b">
                            <button className="h-5 w-5 rounded-full border-2 inline-block flex-none ml-4"></button>
                            <p className="text-gray-500 grow">aca se vana  crear los textos</p>
                            <button className="flex-none mr-4" > <img src={crossIcon} alt="Cross Icon" /></button>
                        </article>
        
                        <section className="p-4 flex justify-between">
                            <span className="text-gray-400">5 items</span>
                            <button className="text-gray-400">Clear completed</button>
                        </section>
                    </div>
                </main>

                <section className="container mx-auto px-4 mt-8">
                    <div className="bg-white rounded-md p-4 flex justify-center gap-8">

                    <button className="text-blue-700">All</button>
                    <button className="text-gray-400 hover:text-blue-700">Active</button>
                    <button className="text-gray-400 hover:text-blue-700">completed</button>

                    </div>
                    
                </section>

                <p className="text-center text-gray-700 mt-8 ">Drag and drop to reoder list</p>
            </div>
        </>
    );
};

export default App;
