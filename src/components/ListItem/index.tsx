import React, { useState } from "react";
import { ListItemProps } from "@interfaces/model/ItemContent";
import styled from "styled-components";

const ListTabs = styled.ul<{ position?: "left" | "center" | "right" }>`
  list-style: none;
  display: flex;
  color: #333;
  font-size: 14px;
  font-weight: 400;
  justify-content: ${(props) => {
    switch (props.position) {
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "flex-start";
    }
  }};
`;

const ItemTab = styled.li<{ active: boolean }>`
  cursor: pointer;
  padding: 8px 20px;
  border-bottom: ${(props) => (props.active ? "2px solid #ed2a26" : "none")};
`;

const WrapContentDetail = styled.div`
  background: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 20px;
`;

const ListItem: React.FC<ListItemProps> = ({ listdata, position = "left" }) => {
  const [activeTab, setActiveTab] = useState(listdata[0]?.name || "");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    const ActiveItem = listdata.find((item) => item.name === activeTab);
    if (ActiveItem) {
      return (
        <WrapContentDetail>
          <ActiveItem.detail />
        </WrapContentDetail>
      );
    }
    return null;
  };

  return (
    <div>
      <ListTabs position={position}>
        {listdata.map((item) => (
          <ItemTab
            key={item.id}
            active={activeTab === item.name}
            onClick={() => handleTabClick(item.name)}
          >
            {item.name}
          </ItemTab>
        ))}
      </ListTabs>
      <div>{renderContent()}</div>
    </div>
  );
};

export default ListItem;
