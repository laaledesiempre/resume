import Header from "./contents/Header"
import Footer from "./contents/Footer"
import About from "./contents/main/About"
import Knowledge from "./contents/main/Knowledge"
import Experiences from "./contents/main/Experiences"
export const App=()=>{

    return<>
    <Header/>
    <main>
        <About/>
        <Knowledge/>
        <Experiences/>
    </main>
    <Footer/>
    </>
}