import styled from "styled-components";


export const Container = styled.div`
position: absolute;
top: 64px;
right: 140px;
width: 398px;
height: 340px;
padding: 24px;
display: flex;
flex-direction: column;
background-color: white;
border: 1px solid black;
gap: 16px;
`

export const Content = styled.div`
display: flex;
padding: 8 0px;
gap: 12px;
`

export const Image = styled.img`
width: 24px;
height: 24px;
`

export const ContentText = styled.div`
display: flex;
flex-direction: column;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const Title = styled.h1`
font-size: 16px;
font-weight: 600;
`

export const Description = styled.p`
font-size: 14px;
font-weight: 400;
`

