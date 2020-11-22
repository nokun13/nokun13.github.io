import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import InfoSection2 from '../components/InfoSection/index2';
import InfoSection3 from '../components/InfoSection/index3';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
         <Navbar toggle={toggle}/>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <HeroSection />
         <InfoSection {...homeObjOne} />
         <InfoSection2 {...homeObjTwo} />
         <InfoSection3 {...homeObjThree} />
         <Footer />
        </>
    )
}

export default Home;

