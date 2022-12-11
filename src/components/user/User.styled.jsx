import styled from '@emotion/styled';

export const Title = styled.div`
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 16px;
color: #3d3d3d;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px 0px 20px 0px;
background-color: #fff;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
min-width: 400px;
margin-bottom: 20px;
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 2px solid #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        transform: scale(1.2);
        border-color: #ff6b08;
    }

`;

export const Name = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    color: #3d3d3d;
`;

export const Tag = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    color: grey;
`;

export const Location = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
    color: grey;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F3F6F9;
    margin: 0;
    padding: 0;
    list-style: none;
    margin-bottom: 20px;
`;

export const Item = styled.li`
    border: 1px solid #E2E8EF;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:last-child {
        margin-right: 0;
    }
`;

export const Label = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: grey;
`;



