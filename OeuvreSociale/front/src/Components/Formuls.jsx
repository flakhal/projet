import React ,{useState}from "react";
import '../Styles/Formuls.css';
import { Link } from 'react-router-dom';


const Formuls =() =>{
  
return(

<div  className="formulsrapper">
<Link  to="/formulaire/formulairedemande" className="linkwrapper" >
    
    
    <div className="linktodem"> Ajouter formulaire de demande</div>

          

</Link>    

   <Link  to="/formulaire/ajouteroffre" className="linkwrapper" >
    
    
        <div className="linktodem"> Ajouter formulaire de prêt</div>

              
   
    </Link>  
    <Link  to="/formulaire/ajouteroffre" className="linkwrapper" >
    
    
        <div className="linktodem"> Ajouter offre</div>

              
   
    </Link>  
   

</div>

);







};
export default Formuls;