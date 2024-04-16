import HeroSection from "./sections/HeroSection/heroSection";
import AboutSection from "./sections/aboutSection/aboutSection";
import DescSection from "./sections/DescSection/descSection";
import CollabSection from "./sections/CollabSection/collabSection";
import Loader from "../components/Loader/loader";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";

import { useEffect, useState } from "react";
import Form from "../components/Form/form";

function App() {
    const [setPopup, setSetPopup] = useState(false);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 7500);
    });

    const handleFormClick = () => {
        setSetPopup((prevState) => !prevState);
    };

    return (
        <div>
            {/* {loading ? <Loader /> : ( */}
            <div>
                <Navbar handleFormClick={handleFormClick} />
                <HeroSection handleFormClick={handleFormClick} />
                <AboutSection handleFormClick={handleFormClick} />
                <DescSection />
                <CollabSection />
                <Footer />

                {setPopup ? <Form handleFormClick={handleFormClick} /> : null}
            </div>
            {/* )} */}
        </div>
    );
}

export default App;
