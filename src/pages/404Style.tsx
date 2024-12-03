import styled from 'styled-components';

export const Container = styled.div`
  background: radial-gradient(circle, 
    #3A3C3F, 
    #37393B, 
    #343638, 
    #303235, 
    #2D2F31, 
    #292C2E, 
    #26292A, 
    #222627, 
    #1F2323, 
    #1C2020, 
    #181D1C, 
    #151A19, 
    #111715, 
    #0E1412, 
    #0B110F, 
    #070E0B, 
    #040B08, 
    #010804, 
    #000000);
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #ffff;
  align-items: center;
`;

export const BgChildren = styled.div`
  border-bottom: 1px solid #333;
  margin-top: 9%;
  padding-bottom: 4%;
  padding-left: 20%;
  padding-right: 20%;
`;

export const MainLogo = styled.div`
  margin: auto !important;
  padding: 8px 0;
  width: 100%;
  max-width: 150px !important;
  position: relative;
  color: white;
  bottom: 120px;
`;

export const TitleError = styled.h1`
  font-size: 12rem;
  font-weight: bold;
  margin-bottom: 1rem;
  font-family: sans-serif;
  line-height: 1em;
  text-shadow: 1px 10px 6px rgba(0, 0, 0, 0.3);
  padding-bottom: 29px;
  margin-left: 115px;
`;

export const MessageError = styled.p`
  font-family: sans-serif;
  font-size: 24px;
`;

export const ReturnHomePage = styled.button`
  padding: 12px 20px;
  background-color: rgb(210, 12, 12);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
  margin-top: 40px;
  margin-left: 200px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const FooterSimple = styled.div`
  /* Define styles for footer here */
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  background-color: none;
  margin-right: 27px;
  position: relative;
  top: 25px;
  right: 42%;
`;

export const FooterText = styled.p`
  margin-left: 60%;
  position: relative;
  left: 44%;
  margin-top: 10px;
`;
