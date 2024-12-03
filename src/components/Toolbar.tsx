toolbar;
import React, { useState } from "react";
// import '../styles/sidebar.css';
import { FiHome } from "react-icons/fi";
import { RiLiveLine } from "react-icons/ri";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { GoChecklist } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { LuBookMinus } from "react-icons/lu";
import { IoAnalytics } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import { LuMessagesSquare } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdAttachMoney } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { GoVerified } from "react-icons/go";

interface SideBarProps {
  isOpen: boolean;
}

interface SubCurcusProps {
  active: boolean;
}

const SideBar = styled.div<SideBarProps>`
  width: 16%;
  background-color: white;
  position: fixed;
  left: 0;
  top: 60px;
  height: calc(100vh - 64px);
  overflow-y: auto;
  ${(props) => (props.isOpen ? showSidebar : hideSidebar)}
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  a {
    display: flex;
    color: #333;
    text-decoration: none;
    padding: 11px;
    font-size: small;
    font-weight: 500;
    align-items: center;
    gap: 8px;
  }

  a:hover {
    background-color: rgb(249, 224, 224);
    color: #ee0000;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 0 0;
  }

  .ads {
    display: flex;
    gap: 0.5rem;
  }

  .sidebar-lable {
    color: #333;
    font-size: small;
    width: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: 3px;
  }

  .sidebar-lable:hover {
    color: #ee0000;
  }

  .sidebar-dropdown {
    color: #333;
    font-size: small;
    font-weight: 400;
  }

  .dropdown-icon {
    font-size: 8px;
  }

  &::-webkit-scrollbar {
    width: 0;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 4px;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dcdcdc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a9a9a9;
  }
`;

const showSidebar = css`
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
`;

const hideSidebar = css`
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
`;
const Icon = styled.div`
  font-size: 18px;
  margin-right: 8px;
  margin-left: 6px;
`;

const SideBarItem = styled.div`
  color: #333;
  font-size: x-small;
  &:hover {
    color: red;
  }

  & ul li:hover {
    color: red;
    transition: all 0.5s ease-in-out;
  }
`;

const Sub = styled.div`
  margin-top: 2rem;
`;
const Setting = styled.div`
  margin-top: 0.5rem;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  & img {
    width: 30px;
  }
  &:before {
    position: absolute;
    right: 4px;
    content: "";
    display: inline-block;
    width: 5px;
    border-radius: 50%;
    height: 5px;
    background-color: red;
    margin-top: 13px;
    margin-right: 9px;
  }
`;
const Subcription = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(176, 175, 175);
  font-size: 12px;
  padding-left: 10px;
  margin-top: -15px;
`;

const Footer = styled.div`
  font-weight: 500;
  height: 100px;
  display: grid;
  margin-top: 34px;
`;
const SideBar1 = styled.div`
  display: flex;
  justify-content: left;

  margin-left: 10px;
  margin-top: -10px;
`;
const ItemSideBar1 = styled.p`
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;
const SideBar2 = styled.div`
  display: flex;
  justify-content: left;
  gap: 8px;
  margin-left: 10px;
  margin-top: -10px;
`;
const ItemSideBar2 = styled.p`
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const SideBar3 = styled.div`
  display: flex;
  justify-content: left;
  gap: 8px;
  margin-left: 10px;
  margin-top: -10px;
`;
const ItemSideBar3 = styled.p`
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const SideBar4 = styled.div`
  font-size: 13px;
  color: rgb(176, 175, 175);
  // text-align: center;
`;
const ItemSideBar4 = styled.p`
  font-size: smaller;
  margin-left: 10px;
`;
const ItemSideBar = styled(Link)`
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  padding: 6px !important;
  color: #333;
  &:hover {
    color: red;
  }
`;
const Drop = styled.ul`
  display: grid;
  margin-top: 12px;
`;
const SubDrop = styled.li`
  margin-top: 5px;
  display: grid;
  grid-gap: 20px;
`;
const SubCurcus = styled.li<SubCurcusProps>`
  display: grid;
  height: 40px;
  a {
    color: ${(props) => (props.active ? "#ee0000" : "#000")};
    background-color: ${(props) =>
      props.active ? "rgb(249, 224, 224)" : "transparent"};
  }
`;
const Data = styled.div`
  margin-left: 8px;
`;

interface ToolbarProps {
  isToolbarOpen: boolean;
  isRole: string;
}

const SidebarItem: React.FC<{
  lable: string;
  children?: React.ReactNode;
  isOpen: boolean;
  onToggle: (lable: string) => void;
}> = ({ lable, children, isOpen, onToggle }) => {
  const toggleDropdown = () => {
    onToggle(lable);
  };
  return (
    <SideBarItem>
      <div className="sidebar-lable" onClick={toggleDropdown}>
        {lable}
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>&#9660;</span>
      </div>
      {isOpen && <div className="sidebar-dropdown">{children}</div>}
    </SideBarItem>
  );
};

const Toolbar: React.FC<ToolbarProps> = ({ isToolbarOpen, isRole }) => {
  const location = useLocation();

  const categories = [
    { name: "Development", link: "/development" },
    { name: "Business", link: "/business" },
    { name: "Finance & Accounting", link: "/finance-accounting" },
    { name: "IT & Software", link: "/it-software" },
    { name: "Office Productivity", link: "/office-productivity" },
    { name: "Personal Development", link: "/personal-development" },
    { name: "Design", link: "/design" },
    { name: "Marketing", link: "/marketing" },
    { name: "Subfestyle", link: "/subfestyle" },
    { name: "Photography", link: "/photography" },
    { name: "Health & Fitness", link: "/health-fitness" },
    { name: "Music", link: "/music" },
    { name: "Teaching & Academics", link: "/teaching-academics" },
  ];
  const tests = [
    { name: "Certification Center", link: "/certification-center" },
    { name: "Certification Fill Form", link: "/certification-fill-form" },
    { name: "Test View", link: "/test-view" },
    { name: "Test Result", link: "/test-result" },
    { name: "My Certification", link: "/my-certification" },
  ];
  const pages = [
    { name: "About", link: "/about" },
    { name: "Sign In", link: "/sign-in" },
    { name: "Sign Up", link: "/sign-up" },
    { name: "Sign Up Steps", link: "/sign-up-steps" },
    { name: "Paid Membership", link: "/paid-membership" },
    { name: "Course Detail View", link: "/course-detail-view" },
    { name: "Checkout", link: "/checkout" },
    { name: "Invoice", link: "/invoice" },
    { name: "Career", link: "/career" },
    { name: "Job Apply", link: "/job-apply" },
    { name: "Our Blog", link: "/our-blog" },
    { name: "Blog Detail View", link: "/blog-detail-view" },
    { name: "Add Stream", link: "/add-stream" },
    { name: "Search Result", link: "/search-result" },
    { name: "Thank you", link: "/thank-you" },
    { name: "Coming Soon", link: "/coming-soon" },
    { name: "Error 404", link: "/error-404" },
  ];
  const menuItems = [
    {
      to: "/instructor-dashboard",
      icon: <RxDashboard />,
      data: "Dashboard",
      isDashboard: true,
    },
    { to: "#", icon: <LuBookMinus />, data: "Courses" },
    { to: "#", icon: <IoAnalytics />, data: "Analytics" },
    { to: "#", icon: <GoPlusCircle />, data: "Create Course" },
    { to: "/message", icon: <LuMessagesSquare />, data: "Messages" },
    {
      to: "/notifications",
      icon: <IoNotificationsOutline />,
      data: "Notifications",
    },
    { to: "#", icon: <LiaCertificateSolid />, data: "My Certificates" },
    { to: "#", icon: <IoMdStarOutline />, data: "Reviews" },
    { to: "/earning", icon: <MdAttachMoney />, data: "Earning" },
    { to: "/payout", icon: <LuWallet />, data: "Payout" },
    { to: "#", icon: <FaRegFileAlt />, data: "Statements" },
    { to: "/verification", icon: <GoVerified />, data: "Verification" },
  ];

  const [openedLabel, setOpenLable] = useState<string | null>(null);
  const toggleDropdown = (lable: string) => {
    setOpenLable(lable === openedLabel ? null : lable);
  };
  if (isRole === "user") {
    return (
      <SideBar isOpen={isToolbarOpen}>
        <ul>
          <li>
            <Link to="/">
              <Icon>
                <FiHome />
              </Icon>
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-live-streams">
              <Icon>
                <RiLiveLine />
              </Icon>
              Live Streams
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <Icon>
                <FaMagnifyingGlass />
              </Icon>
              Explore
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="ads">
                <Icon>
                  <HiOutlineSquare3Stack3D />
                </Icon>
                <div className="categories pt-0">
                  <SidebarItem
                    lable="Categories"
                    isOpen={openedLabel === "Categories"}
                    onToggle={toggleDropdown}
                  >
                    <Drop>
                      {categories.map((category, index) => (
                        <SubDrop key={index}>
                          <Link to={category.link}>{category.name}</Link>
                        </SubDrop>
                      ))}
                    </Drop>
                  </SidebarItem>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="ads">
                <Icon>
                  <GoChecklist />
                </Icon>
                <div className="test">
                  <SidebarItem
                    lable="Tests"
                    isOpen={openedLabel === "Tests"}
                    onToggle={toggleDropdown}
                  >
                    <Drop>
                      {tests.map((test, index) => (
                        <SubDrop key={index}>
                          <Link to={test.link}>{test.name}</Link>
                        </SubDrop>
                      ))}
                    </Drop>
                  </SidebarItem>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/saved-course">
              {" "}
              <Icon>
                <FaRegHeart />
              </Icon>
              Saved Courses
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="ads">
                {" "}
                <Icon>
                  <FaRegFile />
                </Icon>
                <div className="page">
                  <SidebarItem
                    lable="Pages"
                    isOpen={openedLabel === "Pages"}
                    onToggle={toggleDropdown}
                  >
                    <Drop>
                      {pages.map((page, index) => (
                        <SubDrop key={index}>
                          <Link to={page.link}>{page.name}</Link>
                        </SubDrop>
                      ))}
                    </Drop>
                  </SidebarItem>
                </div>
              </div>
            </Link>
          </li>
          <hr />
        </ul>
        <Sub>
          <ul>
            <li>
              <Subcription> SUBSCRIPTIONS</Subcription>
            </li>
            <li>
              <Link to="#">
                <Avatar>
                  <img src="src/assets/images/avt.png" />
                </Avatar>
                Rock Smith
              </Link>
            </li>
            <li>
              <Link to="#">
                <Avatar>
                  <img src="src/assets/images/avt.png" />
                </Avatar>
                Jassica William
              </Link>
            </li>
            <li>
              <Link to="#">
                {" "}
                <Icon>
                  <CiCirclePlus />
                </Icon>
                Browse Instructor
              </Link>
            </li>
            <hr />
          </ul>
        </Sub>
        <Setting>
          <ul>
            <li>
              <Link to="/settings">
                <Icon>
                  <IoSettingsOutline />
                </Icon>
                Setting
              </Link>
            </li>
            <li>
              <Link to="/help">
                <Icon>
                  <IoIosHelpCircleOutline />
                </Icon>
                Help
              </Link>
            </li>
            <li>
              <Link to="/report-history">
                <Icon>
                  <MdReportProblem />
                </Icon>
                Report History
              </Link>
            </li>
            <li>
              <Link to="/feedback">
                <Icon>
                  <RiFeedbackLine />
                </Icon>
                Send Feedback
              </Link>
            </li>
            <hr />
          </ul>
        </Setting>
        <Footer>
          <SideBar1>
            <ItemSideBar to="/about">About</ItemSideBar>
            <ItemSideBar to="/press">Press</ItemSideBar>
            <ItemSideBar to="/contact">Contact us</ItemSideBar>
          </SideBar1>
          <SideBar2>
            <ItemSideBar to="/advertise">Advertise</ItemSideBar>
            <ItemSideBar to="/developers">Developers</ItemSideBar>
            <ItemSideBar to="/terms-of-use">Copyright</ItemSideBar>
          </SideBar2>
          <SideBar3>
            <ItemSideBar to="/terms-of-use">Privacy Policy</ItemSideBar>
            <ItemSideBar to="/terms-of-use">Terms</ItemSideBar>
          </SideBar3>
          <SideBar4>
            <ItemSideBar4>© 2024 Cursus. All Rights Reserved.</ItemSideBar4>
          </SideBar4>
        </Footer>
      </SideBar>
    );
  } else if (isRole === "admin") {
    return (
      <SideBar isOpen={isToolbarOpen}>
        <ul>
          {menuItems.map((item, index) => {
            if (location.pathname === item.to) {
              return (
                <SubCurcus key={index} active>
                  <Link to={item.to}>
                    <Icon>{item.icon}</Icon>
                    <Data>{item.data}</Data>
                  </Link>
                </SubCurcus>
              );
            } else {
              return (
                <SubCurcus key={index}>
                  <Link to={item.to}>
                    <Icon>{item.icon}</Icon>
                    <Data>{item.data}</Data>
                  </Link>
                </SubCurcus>
              );
            }
          })}
        </ul>
        <hr />
        <Setting>
          <ul>
            <SubCurcus>
              <Link to="#">
                <Icon>
                  <IoSettingsOutline />
                </Icon>
                <Data>Setting</Data>
              </Link>
            </SubCurcus>
            <SubCurcus>
              <Link to="#">
                <Icon>
                  <RiFeedbackLine />
                </Icon>
                <Data>Send Feedback</Data>
              </Link>
            </SubCurcus>
          </ul>
        </Setting>
      </SideBar>
    );
  }
};

export default Toolbar;
