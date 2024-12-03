import React, { useState } from "react";
import styled from "styled-components";
import { CiSettings } from "react-icons/ci";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";
import ListItem from "@components/ListItem";
import { ListData } from "@interfaces/model/ItemContent";

const WrapContent = styled.div``;

const WrapTopContent = styled.div`
  background-color: #333;
  padding: 0px 30px;
  padding-top: 88px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const WrapTopLeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLeftDetailContent = styled.div`
  display: flex;
  gap: 20px;
`;

const WrapInfor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Name = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;

const JobDescription = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
`;

const LogoImage = styled.img`
  border-radius: 50%;
  border: 2px solid #fff;
  width: 110px;
`;

const TableInfor = styled.table`
  color: #fff;
  margin-top: 28px;
  display: flex;
  gap: 10px;
  border: 1px solid #4f4848;
`;
const BodyTable = styled.tr`
  display: flex;
`;
const RowInfor = styled.tr`
  gap: 10px;
  padding: 20px;
  border-right: 1px solid #4f4848;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SettingBtn = styled.div`
  font-size: 14px;
  display: flex;
  cursor: pointer;
  gap: 6px;
  color: #fff;
  justify-content: right;
  margin-top: 20px;
`;

const ListItemSocial = styled.ul`
  display: flex;
  gap: 9px;
  justify-content: right;
  list-style: none;
`;

const ItemSocial = styled.button`
  font-size: 20px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const WrapBtnRight = styled.div`
  display: flex;
  gap: 12px;
`;

const BtnCursusStudio = styled.button`
  background-color: #ed2a26;
  color: #fff;
  cursor: pointer;
  height: 40px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  outline: none;
`;

const BtnEdit = styled.button`
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 4px;
`;
const listdata: ListData[] = [
  {
    id: 1,
    name: "About",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque nibh sed ligula blandit, quis faucibus lorem pellentesque. Suspendisse pulvinar dictum pellentesque. Vestibulum at sagittis lectus, sit amet aliquam turpis. In quis elit tempus, semper justo vitae, lacinia massa. Etiam sagittis quam quis fermentum lacinia. Curabitur blandit sapien et risus congue viverra. Mauris auctor risus sit amet cursus sollicitudin.",
  },
  {
    id: 2,
    name: "Courses",
    detail:
      "This is the Courses section. Here you can find all the courses you are enrolled in and browse new ones.",
  },
  {
    id: 3,
    name: "Purchased",
    detail:
      "This is the Purchased section. Here you can find all the items you have purchased.",
  },
  {
    id: 4,
    name: "Discussions",
    detail:
      "This is the Discussions section. Here you can participate in discussions with other members.",
  },
  {
    id: 5,
    name: "Subscriptions",
    detail:
      "This is the Subscriptions section. Here you can manage your subscriptions.",
  },
];
const ProfileDetail = () => {
  return (
    <WrapContent>
      <WrapTopContent>
        <WrapTopLeftContent>
          <TopLeftDetailContent>
            <LogoImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03DYSkPTSn74T_vRcG9Rh56cOckNRTy5xuw&s"
              alt="logo"
            />
            <WrapInfor>
              <Name>Joginder Singh</Name>
              <JobDescription>
                UI / UX Designer and Web Developer
              </JobDescription>
            </WrapInfor>
          </TopLeftDetailContent>
          <TableInfor>
            <BodyTable>
              <RowInfor>
                <td>Enroll students</td>
                <td>612K</td>
              </RowInfor>
              <RowInfor>
                <td>Courses</td>
                <td>8</td>
              </RowInfor>
              <RowInfor>
                <td>Reviews</td>
                <td>11K</td>
              </RowInfor>
              <RowInfor>
                <td>Subscriptions</td>
                <td>452K</td>
              </RowInfor>
            </BodyTable>
          </TableInfor>
        </WrapTopLeftContent>
        <WrapContentRight>
          <SettingBtn>
            <span>
              <CiSettings />
            </span>
            Setting
          </SettingBtn>
          <ListItemSocial>
            <IconContext.Provider value={{ color: "blue" }}>
              <ItemSocial>
                <FaFacebook />
              </ItemSocial>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#1da1f2" }}>
              <ItemSocial>
                <FaTwitter />
              </ItemSocial>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#8d6cab" }}>
              <ItemSocial>
                <FaLinkedin />
              </ItemSocial>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "red" }}>
              <ItemSocial>
                <FaYoutube />
              </ItemSocial>
            </IconContext.Provider>
          </ListItemSocial>
          <WrapBtnRight>
            <BtnCursusStudio>Cursus Studio</BtnCursusStudio>
            <BtnEdit>Edit</BtnEdit>
          </WrapBtnRight>
        </WrapContentRight>
      </WrapTopContent>
      <ListItem listdata={listdata} />
    </WrapContent>
  );
};

export default ProfileDetail;
