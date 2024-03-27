import styled from 'styled-components';
export const Container = styled.div`
    width: 90%;
    display: flex;
    flex-direction: ${props => props.direction || 'row-reverse'};
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    gap:20px;
    
    @media (max-width: 942px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        padding:10px;
        padding-bottom: 25px;
        gap:0px;
        border-radius: 25px;

    }
`;
 export const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;

 img {
     object-fit: cover;
     height: 100%;
     width: 100%;
 }

 @media (max-width: 942px) {
     width: 90%; 
     height: auto;
     
     img {
         width: 100%; /* Adjust image width on small screens */
         height: auto;
         padding-top: 20px;
         
          /* Adjust image height automatically */
        
     }
 }
`;

export const TextContainer = styled.div`
    width: 50%;
    padding: 20px;

    @media (max-width: 942px) {
         /* Remove padding on small screens */
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            font-size: 14px;
            
    }

`;

export const Text = styled.p`
    font-weight: 200;
    font-size: 20px;
    @media (max-width: 942px) {
            position: relative;
            bottom:30px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 15px;
    }
    
    `;