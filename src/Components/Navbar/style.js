import styled from 'styled-components';

const NavBar = styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000
`

const Logo = styled.div`
    width: 50%;
    float: left;
`
const LogoText = styled.div`
    font-size: 30px;
    font-weight: bold
`
const UlList = styled.ul`
    width: 50%;
    float: left;
    list-style: none;
`

const ListItem = styled.li`
    display: inline-block;
`
const Anchor = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    
    &:hover{
    color: #eb5424
    }
`

export {
    NavBar,
    Logo,
    LogoText,
    UlList,
    ListItem,
    Anchor
}