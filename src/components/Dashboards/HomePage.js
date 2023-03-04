import Footer from "../Home/Footer";
import FetchOrderById from "../Order/FetchOrderById";
import GetAllServices from "../Service/getAllServices";
import FetchUserById from "../User/FetchUserById";
import AboutUs from "./AboutUs";
import Header from "./Header";
import HeroSection from "./HeroSection";

function HomePage(){
    return(
        <div>
            <Header/>
            <HeroSection/>
            <AboutUs/>
            <GetAllServices/>
            {/* <FetchUserById/> */}
            <Footer/>
        </div>
    )
}

export default HomePage;