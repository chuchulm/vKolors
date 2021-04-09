import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CarouselMain } from "./component/carousel/CarouselMain"
import { Footer } from "./component/footer/Footer";
import { Header } from "./component/header/Header";
import { Main1 } from "./component/main1/Main1";
import { Main2 } from "./component/main2/Main2";
import { Main3 } from "./component/main3/Main3";
import IconoWhatsapp from "./component/whatsapp/iconoWhatsapp";




function App() {
  return (
     <>
     <header><Header/></header>
     <main>
        <Main2/>
        <Main3/>
        <CarouselMain/>
        <IconoWhatsapp/>
     </main>
     <footer> <Footer/></footer>
    
   
   
    </>
  );
}

export default App;



