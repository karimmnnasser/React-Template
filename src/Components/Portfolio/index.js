import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,BoxDiv,Image,Overlay,OverlaySpan} from './style.js'

const Portfolio = () => {

 const [images , setImages] = useState([]);

    useEffect ( () => {

        axios.get('js/data.json').then( res => { setImages(res.data.portfolio)})

     } , [] );

    const PortfolioImages = images.map(imgItem => {
            return (
                <BoxDiv key = {imgItem.id}>
                    <Image src={imgItem.image}  />
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </BoxDiv>
            )
        } )
        
        return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>

            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem >HTML</PortfolioItem>
                <PortfolioItem >Photoshop</PortfolioItem>
                <PortfolioItem >Wordpress</PortfolioItem>
                <PortfolioItem >Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className ="box">
                {PortfolioImages}
            </div>
            
        </PortfolioSection>
                
        )
}

export default Portfolio





{/* import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,BoxDiv,Image,Overlay,OverlaySpan} from './style.js'

const Portfolio = () => {

    const [images , setImages] = useState([]);

    useEffect ( () => {
        axios.get('js/data.json').then( res => { setImages({ res.data.portfolio }))
     }, []);

    const PortfolioImages = images.map(imgItem => {
            return (
                      
                <BoxDiv key = {imgItem.id}>
                    <Image src={imgItem.image} alt="">
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </BoxDiv>
            )
        } )

        
        return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>

            <PortfolioList>
                <PortfolioItem >All</PortfolioItem>
                <PortfolioItem >HTML</PortfolioItem>
                <PortfolioItem >Photoshop</PortfolioItem>
                <PortfolioItem >Wordpress</PortfolioItem>
                <PortfolioItem >Mobile</PortfolioItem>
            </PortfolioList>
            
            <div class="box">
                {PortfolioImages}
            </div>
            
        </PortfolioSection>
                
        )
    }


export default Portfolio */}