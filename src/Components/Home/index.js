import React from 'react';
import {HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Spano,HomeBtn} from './style.js'

const Home = () => {
    return (
        <HomeSection>
            <div className = "container">
                <HomeInformation>
                    <HomeTitle>Karim Nasser</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Spano>UX Designer</Spano> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home

