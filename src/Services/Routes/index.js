import {Routes, Route} from "react-router-dom"
import CommonQuestionsComponent from "../../Components/CommonQuestions"
import ContactsComponent from "../../Components/Contacts"
import MainComponent from "../../Components/Main"
import PortComponent from "../../Components/Port"
import AboutMeComponent from "../../Components/AboutMe"
export default function RoutesComponent(){
    return(
        <Routes>
            <Route path="/" element={<MainComponent />}/>
            <Route path="/portfolio" element={<PortComponent/>}/>
            <Route path="/sobre-mim" element={<AboutMeComponent/>}/>
            <Route path="/duvidas-comuns" element={<CommonQuestionsComponent/>}/>
            <Route path="/contatos" element={<ContactsComponent/>}/>
        </Routes>
    )
}