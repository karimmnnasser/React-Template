import styled from 'styled-components'

const PortfolioSection = styled.div`
    background: #f8f8f8;
    padding-top: 20px;
    overflow: hidden;
`

const PortfolioTitle = styled.h2 `
    text-align: center;
    font-size: 35px
`
const Span = styled.span `
    font-weight: normal
`

const PortfolioList = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0
`

const PortfolioItem = styled.li `
    display: inline-block;
    width: 100px;
    padding: 10px;
    background : ${props => props.active ? "#eb5424" : ''};
    color : ${props => props.active ? "#FFF" : '#000'}
`

const BoxDiv = styled.div `
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
     &:hover > p {
        opacity: 1
    }
`

const Image = styled.img `
    width: 100%
`

const Overlay = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235, 84, 36, 0.5);
    font-size: 15px;
    opacity: 0
`

const OverlaySpan = styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;

   
`
export {
    PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,BoxDiv,Image,Overlay,OverlaySpan
}