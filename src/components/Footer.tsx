import React, { useState } from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaGlobe,
  FaAngleDown,
} from "react-icons/fa";

const FooterContainer = styled.footer<{ isToolbarOpen: boolean }>`
  background: #333;
  width: ${(props) => (props.isToolbarOpen ? "calc(100% - 220px)" : "100%")};
  transition: width 0.3s ease;
  padding: 0;
  float: right;
  color: #fff;
  /* overflow: hidden; */
`;

const TextContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const FooterLinks = styled.div`
  padding-top: 40px;

  &:first-child {
    padding-left: 50px;
  }

  a {
    color: #fff;
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      opacity: 0.8;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const LanguageSelection = styled.div`
  padding-top: 40px;
  padding-right: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn_cur {
    background-color: #ed2a26;
    color: white;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 14px;
    text-decoration: none;
    border: solid 1px #ed2a26;
    border-radius: 5px;
    cursor: pointer;
    }
    
   .btn_cur:hover {
      opacity: 0.8;
    }
`;

const FooterBottom = styled.div`
  background-color: #333;
  padding: 10px 0;
  text-align: center;
  padding-top: 40px;
  margin: 0 30px 0 50px;
  width: 100%;

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    &.fotb_left {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      li {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }

  .footer_logo img {
    width: 30px;
  }

  .social_links {
    display: flex;
    padding-right: 50px;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;

    a {
      color: #fff;
      text-decoration: none;
      margin-left: 10px;
      transition: transform 0.2s;

      &:hover {
        opacity: 0.8;
        transform: scale(1.1);
      }
    }
  }
`;

const LanguageButton = styled.div`
  margin-top: 20px;
  .lft {
    margin-right: 5px;
  }

  .rgt {
    margin-left: 5px;
  }
`;
const ScrollingMenu = styled.div`
  max-height: 250px;
  overflow-y: auto;
  position: static;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  &:hover {
    background-color: #f1f1f1;
  }
  &.selected {
    background-color: #d1d1d1;
  }
  .description {
    font-size: 12px;
    color: #555;
  }
`;

const LanguageDropdown = styled.div`
  position: relative;
  display: inline-block;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 5px;
  &.active .menu {
    display: block;
    position: absolute;
    bottom: 50px;
    right:0;
    z-index: 10;

  }
  .menu {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: auto;
    border-radius: 3px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 20px;

`;

const FooterBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #444;
`;

const FooterLeft = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-right: 20px;
  }
`;

const FooterLogo = styled.a`
  display: block;
  img {
    width: 30px;
    height: 30px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #fff;
`;

const Icon = styled.a`
  color: #fff;
  float: left;
  margin: 0 10px;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
    transition: transform 0.2s;

  }
`;

const EnglishText = styled.span`
   color: #333;
   font-size: 14px;
   padding-right: 20px;
`;

const DescriptionText = styled.span`
  font-size: 14px;
  color: #555;
`;

interface FooterProps {
  isToolbarOpen: boolean;
}

const Footer: React.FC<FooterProps> = ({ isToolbarOpen }) => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  const handleLanguageSelect = (value: string) => {
    setSelectedLanguage(value);
    setDropdownActive(false);
  };

  return (
    <FooterContainer isToolbarOpen={isToolbarOpen}>
      <TextContainer>
        <Row>
          <FooterLinks>
            <a href="/">About</a>
            <a href="/">Blog</a>
            <a href="/">Careers</a>
            <a href="/">Press</a>
          </FooterLinks>
          <FooterLinks>
            <a href="/">Help</a>
            <a href="/">Advertise</a>
            <a href="/">Developers</a>
            <a href="/">Contact Us</a>
          </FooterLinks>
          <FooterLinks>
            <a href="/">Copyright Policy</a>
            <a href="/">Terms</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Sitemap</a>
          </FooterLinks>
          <LanguageSelection>
            <a href="/" className="btn_cur">
              Teach on Cursus
            </a>
            <LanguageButton>
              <LanguageDropdown className={dropdownActive ? "active" : ""}>
                <div onClick={toggleDropdown} className="dropdown_trigger">
                  <span className="lft">
                    <FaGlobe />
                  </span>
                  Language
                  <span className="rgt">
                    <FaAngleDown />
                  </span>
                </div>
                {dropdownActive && (
                  <div className="menu">
                    <ScrollingMenu>
                      {[
                        { value: "en", english: "English", description: "English" },
                        { value: "da", english: "Danish", description: "dansk" },
                        { value: "es", english: "Spanish", description: "Español" },
                        { value: "zh", english: "Chinese", description: "简体中文" },
                        { value: "zh_TW", english: "Chinese (Taiwan)", description: "中文 (臺灣)" },
                        { value: "fa", english: "Persian", description: "پارسی" },
                        { value: "fr", english: "French", description: "Français" },
                        { value: "el", english: "Greek", description: "ελληνικά" },
                        { value: "ru", english: "Russian", description: "Русский" },
                        { value: "de", english: "German", description: "Deutsch" },
                        { value: "it", english: "Italian", description: "Italiano" },
                        { value: "nl", english: "Dutch", description: "Nederlands" },
                        { value: "pt_BR", english: "Portuguese", description: "Português(BR)" },
                        { value: "id", english: "Indonesian", description: "Indonesian" },
                        { value: "lt", english: "Lithuanian", description: "Lietuvių" },
                        { value: "tr", english: "Turkish", description: "Türkçe" },
                        { value: "kr", english: "Korean", description: "한국어" },
                        { value: "ar", english: "Arabic", description: "العربية" },
                        { value: "hu", english: "Hungarian", description: "Magyar" },
                        { value: "vi", english: "Vietnamese", description: "tiếng Việt" },
                        { value: "sv", english: "Swedish", description: "svenska" },
                        { value: "pl", english: "Polish", description: "polski" },
                        { value: "ja", english: "Japanese", description: "日本語" },
                        { value: "ro", english: "Romanian", description: "românește" },
                      ].map((lang) => (
                        <DropdownItem
                          key={lang.value}
                          className={selectedLanguage === lang.value ? "selected" : ""}
                          onClick={() => handleLanguageSelect(lang.value)}
                        >
                          <EnglishText>{lang.english}</EnglishText>
                          <DescriptionText className="description">{lang.description}</DescriptionText>
                        </DropdownItem>
                      ))}
                    </ScrollingMenu>
                  </div>
                )}
              </LanguageDropdown>
            </LanguageButton>
          </LanguageSelection>
        </Row>
        <FooterBottom>
          <FooterBottomRow>
            <FooterColumn>
              <FooterLeft>
                <li>
                  <FooterLogo>
                    <img src="https://gambolthemes.net/html-items/cursus-new-demo/images/logo1.svg" alt="Footer Logo" width="30" height="30" />
                  </FooterLogo>
                </li>
                <li>
                  <FooterText>© 2024 <strong>Cursus</strong>. All Rights Reserved.</FooterText>
                </li>
              </FooterLeft>
            </FooterColumn>
            <FooterColumn>
              <Icon>
                <a><FaFacebookF size={18} /></a>
              </Icon>
              <Icon>
                <a><FaTwitter size={18} /></a>
              </Icon>
              <Icon>
                <a><FaGooglePlusG size={24} /></a>
              </Icon>
              <Icon>
                <a><FaLinkedinIn size={18} /></a>
              </Icon>
              <Icon>
                <a><FaInstagram size={18} /></a>
              </Icon>
              <Icon>
                <a><FaYoutube size={18} /></a>
              </Icon>
              <Icon>
                <a><FaPinterestP size={18} /></a>
              </Icon>
            </FooterColumn>
          </FooterBottomRow>
        </FooterBottom>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;