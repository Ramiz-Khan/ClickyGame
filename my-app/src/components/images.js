import React, { Component } from 'react';
import "./images.css";

import Counter from './Counter';

import summer from "./chars/summer.png";
import jerry from "./chars/jerry.png";
import morty from "./chars/morty.png";
import beth from "./chars/beth.png";

import birdperson from "./chars/birdperson.png";
import gianthead from "./chars/gianthead.png";
import jessica from "./chars/jessica.png";
import meeseeks from "./chars/meeseeks.png";

import mr from "./chars/mr.png";
import rick from "./chars/rick.png";
import goldenford from "./chars/goldenford.png";
import evilmorty from "./chars/evilmorty.png";





class Images extends Component {
   
    HandleClick() {

        function  click (event) { 
          
         console.log(event.target.data());
     
     }
     
     };
     

    render() {
        return (
        
            <div className="Images">
                <div className="row r1">



                    <div className="col-lg-2">
                    </div> 
                    
                        <div className="col-lg-2">
                        <img src={morty} className="char-img" alt="logo"  data-img="1" onClick={this.handleClick}/>
                        </div>                    
                        <div className="col-lg-2">
                        <img src={jerry} className="char-img" alt="logo" data-img="2" />
                        </div>  
                        <div className="col-lg-2">
                        <img src={summer} className="char-img" alt="logo" data-img="3" />
                        </div>  
                        <div className="col-lg-2">
                        <img src={beth} className="char-img" alt="logo" data-img="4" />
                        </div>  

                    <div className="col-lg-2">  
                    </div> 

                </div> 
                <div className="row">


                <div className="col-lg-2">
                    </div> 
                    
                        <div className="col-lg-2">
                        <img src={birdperson} className="char-img" alt="logo" data-img="5" onClick={this.handleClick}/>
                        </div>                    
                        <div className="col-lg-2">
                        <img src={gianthead} className="char-img" alt="logo" data-img="6" />
                        </div>  
                        <div className="col-lg-2">
                        <img src={jessica} className="char-img" alt="logo" data-img="7" />
                        </div>  
                        <div className="col-lg-2">
                        <img src={meeseeks} className="char-img" alt="logo" data-img="8" />
                        </div>  

                    <div className="col-lg-2">  
                    </div> 
                    
                </div> 
                <div className="row">


                <div className="col-lg-2">
                    </div> 
                    
                        <div className="col-lg-2">
                        <img src={mr} className="char-img" alt="logo" data-img="9" />
                        </div>                    
                        <div className="col-lg-2">
                        <img src={rick} className="char-img" alt="logo" data-img="10" />
                        </div>  
                        <div className="col-lg-2">
                        <img src={goldenford} className="char-img" alt="logo" data-img="11" />
                        </div>  
                        <div className="col-lg-2">
                        <img src={evilmorty} className="char-img" alt="logo" data-img="12" />
                        </div>  

                        <div className="col-lg-2">  
                        </div> 
                        <div className="col-lg-2">
                        </div>

                        </div>

                    </div>


          

        );
    }
}

export default Images;
