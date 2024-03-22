import React from "react";
import UpperNav from "./UpperNav/UpperNav";
import MainNav from "./MainNav/MainNav";
import FutureOfAI from "./FutureOfAI/FutureOfAI";
import MagicTools from "./MagicTools/MagicTools";
import HowItWorks from "./howItWorks/HowItWorks";
import Testimonials from "./Testimonials/Testimonials";
import CustomTemplates from "./CustomTemplates/CustomTemplates";
import FAQ from "./FAQ/FAQ";
import LatestNews from "./LatestNews/LatestNews";
import Footer from "./Footer/Footer";
import Pricing from "./Pricing/Pricing";
import Header from "../../components/Shared/Header";

const Home = () => {
    return (
        <React.Fragment>
            <UpperNav />
            <Header />
            <MainNav />
            <FutureOfAI />
            <CustomTemplates />
            <MagicTools />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <FAQ />
            <LatestNews />
            <Footer />
        </React.Fragment>
    );
};

export default Home;
