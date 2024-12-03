import styled from "styled-components";
import {
  FaSearch,
  FaWallet,
  FaBullhorn,
  FaRegUser,
  FaBook,
  FaMobileAlt,
} from "react-icons/fa";
import { LuFileCheck, LuFileEdit } from "react-icons/lu";
import { BsWindow } from "react-icons/bs";
import { RiFileShield2Line } from "react-icons/ri";
import { TbDeviceDesktopExclamation } from "react-icons/tb";

export const HelpContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f7f7f7 !important;
  width: 100%;
  height: 100%;
`;

export const HelpSearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  background-color: #333;
  text-align: center;
`;

export const HelpSearchTitle = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 50%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  padding-left: 40px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 1rem;

  &::placeholder {
    color: #ccc;
  }

  &:focus::placeholder {
    color: #676767;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: rgb(186, 175, 175);

  &:focus {
    color: #676767;
  }
`;

export const HelpTopicSection = styled.div`
  padding: 20px;
  text-align: center;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: white;
  position: relative;
  bottom: 19px;
  padding-bottom: 24px;
  margin-left: -20px;
  margin-right: -20px;
`;

export const Tab = styled.button`
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 1.1rem;
  cursor: pointer;
  color: #333;
  position: relative;
  top: 34px;
  font-weight: 600;

  &.active {
    color: #000;

    &::after {
      content: "";
      display: block;

      height: 1.5px;
      width: 100%;
      background: #ed2a26;
      transition: width 0.3s;
    }
  }
`;

export const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 4fr);
  gap: 25px;
  justify-content: center;
`;

export const TopicCard = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 2px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 13px;
  cursor: pointer;
  padding: 10px;
  margin-bottom: 10px;
`;

export const BackgroundIcon = styled.div`
  background-color: #ffecec;
  display: inline-block;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;

export const TopicTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TopicDescription = styled.p`
  color: #666;
  font-weight: 400;
  text-align: center;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 26px;
  white-space: break-spaces;
`;

export const FontTitle = styled.h2`
  font-weight: 550;
  font-size: 20px;
  margin-top: 35px;
  margin-bottom: 35px;
  padding-right: 80%;
  width: 100%;
  white-space: nowrap;
`;

export const FaqTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  margin-top: 56px;
  margin-bottom: 10px;
  padding-right: 83%;
  width: 100%;
  white-space: nowrap;
`;

export const Wallet = styled(FaWallet)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;

export const Bull = styled(FaBullhorn)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;

export const FileCheck = styled(LuFileCheck)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;
export const FileEdit = styled(LuFileEdit)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;

export const Window = styled(BsWindow)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;

export const FileShield = styled(RiFileShield2Line)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;

export const User = styled(FaRegUser)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;

export const Desktop = styled(TbDeviceDesktopExclamation)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;

export const Book = styled(FaBook)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;

export const Mobile = styled(FaMobileAlt)`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  transform: translateY(10px);
`;

export const TopicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  justify-content: center;
  padding-top: 30px;
`;

export const TopicCard2 = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  font-size: 13px;
  font-weight: 550;
  width: 100%;
  cursor: pointer;
`;
