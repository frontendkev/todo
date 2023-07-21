import BackgroundImage from "./Components/BackgroundImage/BackgroundImage";
import ToDo from "./Components/ToDo/ToDo";
import Header from "./Components/Header/Header";
import banner from './images/banner.jpg'
import TodoProvider from "./Reducer/Reducer";

import { HashRouter, Route, Routes } from "react-router-dom";
export default function App() {

    const Home = () => {
        return (
            <>
                <BackgroundImage image={banner} />
                <ToDo />
            </>
        )
    }
    
    return (
        <div className="App">
            <header className="relative w-full h-[6vh] md:h-[10vh] lg:h-[10vh] landscape:h-[10vh] bg-mynavyblue pl-4 landscape:2xl:bg-red-500">
                <Header />
            </header>
            <main className="relative w-full h-[94vh] md:h-[90vh] overflow-hidden">
                <TodoProvider>
                    <HashRouter>
                        <Routes>
                           <Route path="/" element={<Home />} />
                        </Routes>
                    </HashRouter>
               </TodoProvider>
            </main>
        </div>
    )
}