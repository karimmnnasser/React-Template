import React, {useState, useEffect} from 'react';
import { SocialMedia , InnerSocial , Icon , P , Span , SpanInfo } from './style.js'
import axios from 'axios'

const Social = () => {

    const [socialItem, setSocial] = useState([])

    useEffect(()=> {
        axios.get('js/data.json').then (res => {setSocial(res.data.social)})
    }, []);

    const allSocial = socialItem.map(item => {
        return (
            <InnerSocial color = {item.id} key = {item.id}>
                <Icon className={item.icon}></Icon>
                <P>
                    <Span>{item.title}</Span>
                    <SpanInfo>{item.body}</SpanInfo>
                </P>
            </InnerSocial>
        )
    })

    return (

        <SocialMedia>
            {allSocial}
        </SocialMedia>
    )
}

export default Social