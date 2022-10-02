import Ingresar from "./Ingresar";
import {Routes,Route} from "react-router-dom"
import Lista from "./Lista"

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Ingresar/>}/>
    <Route path="/pokemon/:offset&:limite" element={<Lista/>}/>
    </Routes>
    </>
  );
}

export default App;
