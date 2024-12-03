import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled(Nav)`
  display: inline-flex;
  gap: 20px;
  padding-bottom: 30px;
`;

const NavItem = styled(Link)`
  color: #333;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  margin-right: 15px;
  padding: 10px;
  &:hover {
    color: gray;
  }

  &.active {
    border-bottom: 2px solid red;
    padding: 10px 20px;
  }
`;

const NavbarAboutUs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavStyle>
      <NavItem to="/about" className={currentPath === "/about" ? "active" : ""}>
        About
      </NavItem>
      <NavItem to="/blog" className={currentPath === "/blog" ? "active" : ""}>
        Blog
      </NavItem>
      <NavItem
        to="/company"
        className={currentPath === "/company" ? "active" : ""}
      >
        Company
      </NavItem>
      <NavItem
        to="/careers"
        className={currentPath === "/careers" ? "active" : ""}
      >
        Careers
      </NavItem>
      <NavItem to="/press" className={currentPath === "/press" ? "active" : ""}>
        Press
      </NavItem>
    </NavStyle>
  );
};

export default NavbarAboutUs;
