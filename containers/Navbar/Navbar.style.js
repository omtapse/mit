import styled from "styled-components";

const NavbarWrapper = styled.div`
  .Navbar {
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    top: 0;
    position: fixed;
    justify-content: space-between;
    width: 100%;
    background-color:white;
    z-index:1000;
    box-shadow: 20px 10px 15px 9px rgb(27 24 24 / 29%);
  }
  .logo img {
    max-height: 80px;
    margin-left: 135px;
    margin-top: 10px;
  }
  .Navigations {
    margin-right: 135px;
  }
  .Navigations ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 885px;
    font-size: 20px;
  }
  @media only screen and (max-width: 415px) {
  }
`;

export default NavbarWrapper;
