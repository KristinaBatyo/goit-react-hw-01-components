import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    min-width: 400px;
    margin-bottom: 20px;
    
`;

export const Item = styled.li`
    display: flex;
    min-width: 100%;
    margin: 0;
    padding: 20px 0px 20px 0px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    border: 2px solid #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Name = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    color: #3d3d3d;
    margin-left: 20px;
`;

export const Status = styled.span`
    height: 12px;
    width: 12px;
    background-color: ${props => (props.statusType ? 'green' : 'red')};
    border-radius: 50%;
    display: inline-block;
    `




