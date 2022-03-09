import React from 'react'
import styled from 'styled-components'
import Img from '../Image/img.jpg'
import { mobile } from './responsive'

const Style = styled.div`
    width: 100%;
    height: 90vh;
    ${mobile({height: "100%"})}
`
const Navbar = styled.div`
    width: 100%;
    height: 60px;
    background-color: purple;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
` 
const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 87vh;
    ${mobile({flexDirection : "column",
            height : "100%"})}
` 
const Image = styled.img`
    flex:1;
    padding: 20px;
    height: 70%;
`
const InfoContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    margin: 20px;
`
const Title = styled.h2`
    color: #868783;
    font-size: 30px;
`
const Desc = styled.p`
    font-size: 24px;
    ${mobile({fontSize : "20px"})}
`
const Button = styled.button`
    border: none;
    background-color: #333333;
    width: 100px;
    padding: 10px;
    color: #fff;
    cursor: pointer;
`
const Footer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #333333;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;

`
export const Problem2 = () => {
  return (
    <Style>
        <Navbar>
            AwesomePortal
        </Navbar>
        <Wrapper>
            <Image src= {Img}/>
            <InfoContainer>
                <Title>Excellent Necklace 6*8 Diamond AD</Title>
                <Desc>
                Certified by SGL. Beautifully crafted jewellery. Style - Casual Necklace, Technique - P7-2.
                 Buy jewellery online or in-store. Shop perfect jewellery gifts for your loved ones in India. 
                 International Shipping to US, UK and Australia available.
                 30-Day Money Back, 100% Certified. Lifetime Exchange. Free Insured Shipping Within India
                </Desc>
                <Button>Buy Now</Button>
            </InfoContainer>
        </Wrapper>
        <Footer>All Right Reserved</Footer>
    </Style>
  )
}
