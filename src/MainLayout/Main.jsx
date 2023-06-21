import Countries from "../components/Countries/Countries";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import './Main.css'

const Main = () => {
    return (
        <div className="container">
            <Header></Header>
            <Countries></Countries>
            <Footer></Footer>
        </div>
    );
};

export default Main;