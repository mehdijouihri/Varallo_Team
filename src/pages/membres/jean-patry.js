import React from "react";
import Navbar from "../../components/Header/Navbar";
import "../../components/FicheMembres/FicheMembres.css";
import FicheMembres from "../../components/FicheMembres/FicheMembres";
import Footer from "../../components/Footer/Footer";

const JeanPatry = () => {
  return (
    <div>
      <Navbar />
      <FicheMembres
        nom="Amir jouihri"
        role="N°4 - pointu"
        date="29/10/2014"
        taille="1m67"
        kg="34kg"
        attaq="3m34"
        block="3m17"
        datePalma1="2015"
        datePalma2="2020"
        palma2=" Finaliste Championnat du monde"
        palma1=" Vainqueur Championnat du Brésil"
        id='player01'
      />
      <Footer />
    </div>
  );
};

export default JeanPatry;
