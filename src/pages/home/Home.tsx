import Footer from "../../layout/Footer"
import HeroSection from "../../components/home/HeroSection"
import IntroSection from "../../components/home/IntroSection"
import ProjectLocations from "../../components/home/ProjectLocations"
import Projects from "../../components/home/Projects"
import Services from "../../components/home/Services"
import Review from "../../components/home/Review"
import Faq from "../../components/home/Faq"
import ChooseUs from "../../components/home/ChooseUs"

const Home = () => {
    return (
        <>
            <HeroSection />
            <IntroSection />
            <ProjectLocations />
            <Projects />
            <Services />
            <Review />
            <Faq />
            <ChooseUs />
            <Footer />
        </>
    )
}

export default Home