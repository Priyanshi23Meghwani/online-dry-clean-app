import { useEffect } from "react";
import Footer from "../Home/Footer";
import FetchOrderById from "../Order/FetchOrderById";
import GetAllServices from "../Service/getAllServices";
import FetchUserById from "../User/FetchUserById";
import AboutUs from "./AboutUs";
import AdminOrderControls from "./AdminOrderControls";
import AdminServiceControls from "./AdminServiceControls";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TestimonialsList from "./Testimonials";

function HomePage() {

    const items = JSON.parse(localStorage.getItem('myuser'));
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutUs />
            <GetAllServices />
            {/* display service controls if logged in user is admin */}
            {items && items.role == "admin" ? <AdminServiceControls /> : ""}
            <TestimonialsList />
            <Footer />
        </div>
    )
}

export default HomePage;