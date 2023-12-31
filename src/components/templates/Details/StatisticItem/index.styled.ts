import styled from 'styled-components';

export const StatisticItem = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0px;
    place-items: center;
    justify-content: center;
    border-right: 1px solid ${props => props.theme.accentColor1};
    border-right-width: 4px;
    width: 97%;
    margin-bottom: 15px;
`;

export const Icon = styled.div`
    color: ${props => props.theme.accentColor1};
    font-size: ${props=> props.theme.textSizeTextL};
    margin-bottom: 10px;
    margin-top: 10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle};
    }
`;

export const Text = styled.span`
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
    margin-bottom: 15px;
    margin-right: 5px;
    margin-top: 10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;