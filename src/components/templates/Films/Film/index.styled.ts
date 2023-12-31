import styled from "styled-components"
export const Card2 = styled.div`
    position: absolute;
    aspect-ratio: 1/1/5;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    padding: 20px;
    color: white; 
`;

export const Rating = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 30%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const RatingIcon = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    color:  white;
    font-size: 20px;
`;
export const RatingText = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: ${props=> props.theme.textSizeL};
`;

export const Genres = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GenresText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: ${props=> props.theme.textSizeL};
`;

export const Details = styled.button`
    cursor: pointer;
    border: 0;
    width: 100%;
    margin: 10px 0px;
    height: 40px;
    flex: 0 0 auto;
    border-radius: 10px;
    background-color:  ${props => props.theme.accentColor1};
    color: white;
  
    font-size: ${props=> props.theme.textSizeL};
    font-weight: 600;
    &:hover{
        box-shadow: 0px 0px 10px ${props => props.theme.accentColor1};
        transition: all 0.5s ease;
        background-color: rgba(255, 51, 51, 1);
    }
`;

export const Film = styled.div`
    cursor: pointer;
    display: flex;  
    flex-direction:column ;
    background-color: ${props => props.theme.iconColor};
    width: 100%;
    box-shadow: 0px 0px 20px ${props => props.theme.shadowColor};
    border-radius:10px;
    overflow: hidden;
    transition: all 0.5s ease;
    &:hover{
        box-shadow: 0px 0px 20px ${props => props.theme.accentColor1};
        transition: all 0.5s ease;
        background-color: rgba(255, 51, 51, 1);
        img {
            transform: scale(1.1);
            transition: all 0.5s ease;
            filter: brightness(40%);
        }
        & ${Card2}{
            transition: 0.3s;
            opacity: 1;
            pointer-events: all;
        }
    }
    &:not(:hover) {
        img {
            transform: scale(1);
            transition: all 0.5s ease;
        }
      }
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Cards = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
`;

export const Card1 = styled.img` 
    aspect-ratio: 1/1/5;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Name = styled.div`
    flex: 0 0 auto;
    flex-wrap: nowrap;
    width: 100%;
    font-size: ${props => props.theme.textSizeTextS};
    letter-spacing: 1px;
    overflow: hidden;
    margin: 10px 0px 0px 0px;
    padding: 0px 10px;
    box-sizing: border-box;
    text-overflow: ellipsis;   
    white-space: nowrap;
    font-weight: 600;
    @media (max-width: 992px) and (min-width: 768px)  {
        font-size: ${props => props.theme.textSizeTextM900};
    }
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;

export const Text = styled.div`
    margin: 10px 0px 10px 0px;
    padding: 0px 10px;
    display:flex;
    flex: 0 0 auto;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    width: 100%;
    font-size: ${props => props.theme.textSizeTextS};
`;


export const RatingInfo = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    height: 30%;
    align-items: left;
    justify-content: left;
    flex-direction: row;
`;

export const RatingInfoIcon = styled.span`
    display: flex;
    flex: 0 0 auto;
    color:  orange;
    font-size: 15px;
`;
export const RatingInfoText = styled.span`
    margin-left: 5 px;
    display: flex;
    flex: 0 0 auto;
    font-size: ${props=> props.theme.textSizeL};
`;