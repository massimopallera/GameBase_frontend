import {BrowserRouter, Routes, Route} from "react-router-dom";

import DefaultLayout from './Layout/DefaultLayout';
import Homepage from './pages/Homepage';
import { GenresProvider } from "./context/GenresContext";
import { PlatformsProvider } from "./context/PlatformsContext";
import { GamesProvider } from "./context/GamesContext";
import SingleGameCard from "./components/SingleGameCard";


function App() {


  return (
    <BrowserRouter>
      <GamesProvider>
      <GenresProvider>
      
      <PlatformsProvider>
      
        <Routes>
          <Route element={<DefaultLayout/>}>

            <Route index element={<Homepage/>}/>
            <Route path="/games/:id" element={<SingleGameCard/>}/>

          </Route>
        </Routes>
      
      </PlatformsProvider>
      </GenresProvider>
      </GamesProvider>
    </BrowserRouter>
  )
}

export default App
