import React from 'react'
import Moneycode from '../components/CodeSection/moneycode';
import { moneyHighlight } from '../components/CodeSection/moneycode-highlight';
import Footer from '../components/Footer';

const Moneypage = () => {

    return (
        <>
         <Moneycode {...moneyHighlight} />
         <Footer />
        </>
    )
}

export default Moneypage;