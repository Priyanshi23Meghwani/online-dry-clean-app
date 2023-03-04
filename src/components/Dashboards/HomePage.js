import Footer from "../Home/Footer";
import FetchOrderById from "../Order/FetchOrderById";
import GetAllServices from "../Service/getAllServices";
import FetchUserById from "../User/FetchUserById";
import AboutUs from "./AboutUs";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TestimonialsList from "./Testimonials";

function HomePage(){
    return(
        <div>
            <Header/>
            <HeroSection/>
            <AboutUs/>
            <GetAllServices/>
            <TestimonialsList/>
            {/* <FetchUserById/> */}
            <Footer/>
        </div>
    )
}

export default HomePage;