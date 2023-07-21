import BackgroundImage from "./Components/BackgroundImage/BackgroundImage";
import ToDo from "./Components/ToDo/ToDo";
import Header from "./Components/Header/Header";
import banner from './images/banner.jpg'
import TodoProvider from "./Reducer/Reducer";

import { HashRouter, Route } from "react-router-dom";
export default function App() {
    
    return (
        <div className="App">
            <header className="relative w-full h-[6vh] md:h-[10vh] lg:h-[10vh] landscape:h-[10vh] bg-mynavyblue pl-4 landscape:2xl:bg-red-500">
                <Header />
            </header>
            <main className="relative w-full h-[94vh] md:h-[90vh] overflow-hidden">
                <TodoProvider>
                    <HashRouter>
                        <Route exact path="/" element={
                            <>
                                <BackgroundImage image={banner} />
                                <ToDo />
                            </>
                        } />
                        
                    </HashRouter>
               </TodoProvider>
            </main>
        </div>
    )
}