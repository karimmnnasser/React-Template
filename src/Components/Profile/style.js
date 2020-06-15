import styled from 'styled-components'

const ProfileSkills = styled.div`
    padding: 50px 0;
    overflow: hidden;
`

const ProfileSection = styled.div`
    width: 50%;
    float: left;
`
const ProfileTitle = styled.h2`
    font-size: 40px;
    margin-bottom: 20px
`
const ProfileList = styled.ul`
    list-style: none
`

const ProfileItem = styled.li`
    margin-bottom: 8px
`

const ItemSpan = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

const SpanWeb = styled.span`
    font-weight: normal;
    color: #eb5424
`

const Skills = styled.div`
    width: 50%;
    float: left;
`
const SkillsTitle = styled.h2`
    font-size: 40px;
    margin-bottom: 20px
`
const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

const Bar = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

const Title = styled.span `
    float: left;
`

const Perc = styled.span`
    float: right;
    margin-right: 100px
`

const Parent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

const WidthSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${ props => props.color === 1 ? "80%" : ''};
    width: ${ props => props.color === 2 ? "50%" : ''};
    width: ${ props => props.color === 3 ? "30%" : ''}
`

const TitleSpan = styled.span`
    font-weight: normal;

`

export {
    ProfileSkills,ProfileSection, ProfileTitle ,
    ProfileList,ProfileItem,ItemSpan,SpanWeb,Skills,SkillsTitle,
    SkillsDesc,Bar,Title,Perc,Parent,WidthSpan,TitleSpan
}