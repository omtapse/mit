import styled from "styled-components";

const FooterStyleWrapper = styled.div`
{
    .footer-section {
        width: 100%;
          background-color: #11112d;
          justify-content:center;
          height: auto;
          display: flex;
          flex-wrap: column;
          position: relative;
          left: 0;
          bottom: 0;
          width: 100%;
          z-index: 200;
          padding-bottom: 4.5rem;
      }
      
      .about-section {
        color: white;
        /* margin-top: 4rem;
        margin-left: 7rem; */
        width: 25%;
        padding-top: 3rem;
        padding-left: 4.5rem;
        padding-right: 2.5rem;
      }
      .Our-mission{
        color: white;
        margin-left: 7rem; 
        width: 25%;
        padding-top: 3rem;
        padding-left: 4.5rem;
        padding-right: 2.5rem;
      }
      p {
        padding-top: 0.8rem;
      }
      
      .quick-links {
        display: grid;
        color: white;
        width: 25%;
        padding-top: 3rem;
        padding-left: 4.5rem;
        padding-right: 2.5rem;
      }
      .Address {
        color: white;
        font-family: Montserrat;
        width: 25%;
        padding-top: 3rem;
        padding-left: 4.5rem;
        padding-right: 2.5rem;
      }
      .contact-us {
        color: white;
        font-family: Montserrat;
        width: 25%;
        padding-top: 3rem;
        padding-left: 4.5rem;
        padding-right: 2.5rem;
      }
      
      .contact {
        padding: 0rem;
      }
      .legal {
        padding-top: 1.2rem;
        padding-bottom: 0.8rem;
      }
      .link-legal {
        margin: 0rem;
        padding: 0rem;
      }
      .link-legal:hover {
        color: orange;
        text-decoration: underline;
      }
      
      .social-media {
        padding-top: 2rem;
        margin-left: 0;
      }
      .logo-image{
        background-color:#11112d ;
        height: 2rem;
        width: 2rem;
        margin:0;
        margin-top: 0.5em;
        margin-right: 0.8em;
        transition: 0.3s;
      }
      .logo-a{
        margin:0rem;
        color: #fff;
        padding-top: 0rem;
        transition: 0.5s;
      }
      svg{
        fill: white;
        background-color:none ;
        height: 2rem;
        width: 2rem;
        margin:0;
        margin-top: 0.5em;
        margin-right: 0.8em;
        transition: 0.3s;
      }
      #insta:hover{
        fill:
        #e95950;
        transform: scale(1.2) translateY(-5px);
      }
      #you:hover{
        fill:#c4302b;
        transform: scale(1.2) translateY(-5px);
      }
      
      .logo-a:hover{
        transform: scale(1.2) translateY(-5px);
      }
      .logo-image:hover{
        
      }
      .link {
        padding-top: 0.1rem;
        margin-left: 1rem;
      }
      
      .link:hover {
        color: orange;
        text-decoration: underline;
      }
      @media (max-width: 1080px){
        .contact-us{
          padding-left: 0.5rem;
        }
        .about-section {
          color: white;
          font-family: Montserrat;
          width: 25%;
          padding-top: 3rem;
          padding-left: 2.5rem;
          padding-right: 0.5rem;
      }
      }
      @media only screen and (max-width: 600px) {
        .footer-section {
          position: sticky;
          top: 100%;
          width: 219%;
          height: auto;
          flex-direction: column;
        }
        .about-section {
          color: white;
          /* font-family: Montserrat; */
          width: 100%;
          padding-top: 1rem;
          padding-left: 1rem;
          padding-right: 3rem;
        }
      
        .quick-links {
          display: grid;
          color: white;
          font-family: Montserrat;
          width: 25%;
          padding-top: 1.5rem;
          padding-left: 1rem;
          padding-right: 0rem;
        }
      
        .Address {
          display: flex;
          width: 100%;
          padding-top: 3rem;
          padding-left: 1rem;
          padding-right: 2rem;
        }
        .final-address {
          width: 50%;
          margin-right: 1em;
        }
        .legal {
          width: 100%;
          padding-top: 0rem;
        }
        .link-legal {
          font-size: 1rem;
        }
        .contact-us {
          padding-top: 2rem;
          padding-left: 1rem;
          padding-right: 2rem;
          width: 100%;
        }
        p {
          padding-top: 0.4rem;
        }
        #footer-social-media{
          margin: 0;
        }
        
      #insta:hover{
        fill:
        #e95950;
        transform: scale(1) translateY(0px);
      }
      #you:hover{
        fill:#c4302b;
        transform:scale(1) translateY(0px);
      }
      
      }
      
    }
`;

export default FooterStyleWrapper;
