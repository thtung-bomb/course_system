import React, { useState } from "react";
import styled from "styled-components";
import TermsOfUseContent from "../scripts/TermsOfUseContent";
import PrivacyPolicyContent from "../scripts/PrivacyPolicyContent";
import CookiePolicyContent from "../scripts/CookiePolicyContent";
import CopyrightPolicyContent from "../scripts/CopyrightPolicyContent";
import CreditsProgramContent from "../scripts/CreditsProgramContent";
import CursusAPIAgreementContent from "../scripts/CursusAPIAgreementContent";
import InstructorTermsContent from "../scripts/InstructorTermsContent";
import PricingAndPromotionsPolicyContent from "../scripts/PricingAndPromotionsPolicyContent";
// Styled components
const Sidebar = styled.div`
  width: 25%;
  .setsidebar {
    background: #fff;
    float: left;
    border: 1px solid #efefef;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    color: #686f7a;
    font-size: 14px;
    text-align: left;
  }
`;

const Content = styled.div`
  width: 75%;
  padding: 20px;
  max-width: 992px;
`;

const TabList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TabItem = styled.li`
  width: 100%;
  padding: 15px 20px;
  float: left;
  display: block;
  margin-top: 5px;
  cursor: pointer;
  border-bottom: 1px solid #efefef;

  &:hover {
    color: #3c4046;
  }
`;

const Contentarea = styled.div`
  display: contents;
  flex-direction: row;
`;

const TabContent = styled.div`
  margin-top: auto;
  .breakline {
    margin-top: 1.5rem !important;
  }
  h4 {
    margin-bottom: 13px !important;
    font-size: 18px;
    color: #333;
    font-weight: 500;
    text-align: left;
    line-height: 26px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    line-height: 26px;
    color: #686f7a;
    text-align: left;
    margin-bottom: 1.5rem !important;
  }
  li {
    color: #686f7a;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    font-family: "Roboto", sans-serif;
    text-align: left;
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;

// Data for each tab
const tabData: { [key: string]: React.ReactNode } = {
  "Terms of Use": <TermsOfUseContent />,
  "Privacy Policy": <PrivacyPolicyContent />,
  "Cookie Policy": <CookiePolicyContent />,
  "Copyright Policy": <CopyrightPolicyContent />,
  "Credits Program": <CreditsProgramContent />,
  "Cursus API Agreement": <CursusAPIAgreementContent />,
  "Instructor Terms": <InstructorTermsContent />,
  "Pricing and Promotions Policy": <PricingAndPromotionsPolicyContent />,
};
interface TermsOfUseProps {
  searchQuery: string;
}

const TermsOfUse: React.FC<TermsOfUseProps> = ({ searchQuery }) => {
  const [selectedTab, setSelectedTab] = useState<string>("Terms of Use");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const filteredTabs = Object.keys(tabData).filter((tab) =>
    tab.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <Contentarea>
      <Sidebar>
        <div className="setsidebar">
        <TabList>
            {filteredTabs.map((tab) => (
              <TabItem
                key={tab}
                active={selectedTab === tab}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </TabItem>
            ))}
          </TabList>
        </div>
      </Sidebar>

      <Content>
        <TabContent>{tabData[selectedTab]}</TabContent>
      </Content>
    </Contentarea>
  );
};

export default TermsOfUse;
