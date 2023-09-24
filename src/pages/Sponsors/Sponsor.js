import React from 'react'
import styled from 'styled-components'



const SponsorBoxContainer = styled.div`
    width:180px;
    padding:10px;
    margin:10px;
    background-color:rgba(255,255,255,1);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
`
const Container = styled.a`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    text-decoration:none;
`

const Type = styled.h4`
    font-size:14px;
    font-weight:lighter;
    color:#0e0f25;
    text-align:center;
`

const ImageContainer = styled.div`
    width:120px;
    height:120px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Image = styled.img`
    width:120px;
    border-radius:5px;
`

const NameContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding:10px;
`

const Name = styled.h3`
    font-size:16px;
    background-image: linear-gradient(to right, #f76c6c, #e8637c, #d45f8a, #bc5e93, #a25e97);
    -webkit-background-clip: text;
    background-clip:text;
    -webkit-text-fill-color: transparent;
    text-decoration:none;
    text-align:center;
`

const Sponsor = ({ data }) => {
    return (
        <>
            <SponsorBoxContainer>
                <Container href={data.Link}>
                    <ImageContainer>
                        <Image src={data.image} />
                    </ImageContainer>
                    <NameContainer>
                        <Name>{data.Name}</Name>
                        <Type>{data.type}</Type>
                    </NameContainer>
                </Container>
            </SponsorBoxContainer>
        </>
    )
}

export default Sponsor