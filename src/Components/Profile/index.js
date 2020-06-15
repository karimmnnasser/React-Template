import React, {useEffect, useState} from 'react';
import axios from 'axios'

import {
    ProfileSkills,ProfileSection, ProfileTitle ,
    ProfileList,ProfileItem,ItemSpan,SpanWeb,Skills,SkillsTitle,
    SkillsDesc,Bar,Title,Perc,Parent,WidthSpan,TitleSpan
} from './style.js'

const Profile = () => {

    const [itemList, setItemList] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then((res)=> {setItemList(res.data.profile)})
    })

    const allSkills = itemList.map((item)=> {
        return (
                <Bar key = {item.id}>
                    <Title>Bootstrap</Title>
                    <Perc>{item.text}</Perc>
                    <Parent>
                        <WidthSpan color = {item.id}></WidthSpan>
                    </Parent>
                </Bar>
        )
    })

    return (
         <ProfileSkills>
            <div className ="container">
                <ProfileSection>
                    <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <ItemSpan>Name</ItemSpan>
                            Karim nasser
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Birthday</ItemSpan>
                            21/1/1996
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Address</ItemSpan>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Phone</ItemSpan>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Email</ItemSpan>
                            hamza@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <ItemSpan>Website</ItemSpan>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSection>
                
                <Skills>

                    <SkillsTitle>Some <TitleSpan>skills</TitleSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>

                 {allSkills}   
                    
                </Skills>
                
            </div>
        </ProfileSkills>
    )
}

export default Profile