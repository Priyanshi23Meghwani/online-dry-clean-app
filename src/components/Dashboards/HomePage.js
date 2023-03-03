import GetAllServices from "../Service/getAllServices";
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
        </div>
    )
}

export default HomePage;