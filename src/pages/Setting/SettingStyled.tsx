import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { CiCircleInfo } from "react-icons/ci";
import { Link } from "react-router-dom";
export const Body = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  font-size: 14px;

  font-weight: 400;
  background-color: #fff;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 70px;
`;

export const SettingsToolbar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-size: 20px;
  margin-top: 0;

  font-weight: 500;
  font-family: "Roboto", sans-serif;
  color: #333;
`;

export const SettingsTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const SettingsIcon = styled(FiSettings)`
  font-size: 24px;
  margin-right: 10px;
`;

export const SettingsCircle = styled(CiCircleInfo)`
  font-size: 20px;
  margin-right: 10px;
  color: red;
  vertical-align: middle;
  font-weight: bold;
`;

export const SettingsTabs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1px;
`;

export const TabButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  flex: 1 1 1;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => (props.active ? "#fff" : "#555")};
  background-color: ${(props) => (props.active ? "#ff0000" : "none")};

  border-radius: 3px;
  transition:
    background-color 0.1s,
    color 0.1s;

  &:hover {
    color: #000;
  }
`;

export const TabContent = styled.div`
  margin-top: 0px;
  font-size: 16px;
  color: #333;
  margin-left: 25px;
`;

export const SettingsContainer = styled.div`
  h4 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
    margin: 10px 0;
    color: #777;
  }
`;

export const StyledLink = styled(Link)`
  color: #4444d4;
  text-decoration: none;

  &:hover {
    color: darkblue;
  }
`;

export const SettingsForm = styled.div`
  margin-bottom: 20px;
`;

export const SettingContent = styled.div`
  margin-bottom: 10px;

  h4 {
    font-size: 18px;
  }
`;

export const ToggleCheckbox = styled.div`
  display: grid;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin: 10px 0 0 0;
  }

  label {
    font-weight: bold;
    margin-right: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .sub {
    color: #777 !important;
    margin-left: 40px;
  }
`;

export const Divider = styled.div`
  margin: 50px 0;
  text-align: center;
  border-top: 1px solid #ccc;
`;

export const SaveButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: #333;
  }
`;

export const RequestButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  color: #9b9b9b;
  border: 2px solid #efefef;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

export const CheckboxWrapper = styled.div`
  --active: #ed2a26;
  --active-inner: #fff;
  --focus: rgba(39, 94, 254, 0.3);
  --border: #fff;
  --border-hover: rgba(0, 0, 0, 0.05);
  --background: rgba(0, 0, 0, 0.15);
  --disabled: #f6f8ff;
  --disabled-inner: #e1e6f9;

  * {
    box-sizing: inherit;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 21px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: 0px solid var(--bc, var(--border));
    background: var(--b, var(--background));
    transition:
      background 0.3s,
      border-color 0.3s,
      box-shadow 0.2s;
  }

  input[type="checkbox"]:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition:
      transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }

  input[type="checkbox"]:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }

  input[type="checkbox"]:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
  }

  input[type="checkbox"]:disabled:checked {
    --b: var(--disabled-inner);
    --bc: var(--border);
  }

  input[type="checkbox"]:disabled + label {
    cursor: not-allowed;
  }

  input[type="checkbox"]:hover:not(:checked):not(:disabled) {
    --bc: var(--border-hover);
  }

  input[type="checkbox"]:focus {
    box-shadow: 0 0 0 var(--focus);
  }

  input[type="checkbox"]:not(.switch) {
    width: 20px;
    border-radius: 7px;
  }

  input[type="checkbox"]:not(.switch):after {
    width: 5px;
    height: 9px;
    border: 2px solid var(--active-inner);
    border-top: 0;
    border-left: 0;
    left: 7px;
    top: 4px;
    transform: rotate(var(--r, 20deg));
  }

  input[type="checkbox"]:not(.switch):checked {
    --r: 43deg;
    --o: 1;
  }

  input[type="checkbox"].switch {
    width: 40px;
    border-radius: 11px;
  }

  input[type="checkbox"].switch:after {
    left: 2px;
    top: 2px;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    background: var(--ab, var(--border));
    transform: translateX(var(--x, 0));
  }

  input[type="checkbox"].switch:checked {
    --ab: var(--active-inner);
    --x: 20px;
  }

  input[type="checkbox"].switch:disabled:not(:checked):after {
    opacity: 0.6;
  }

  label {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    margin-left: 4px;
  }
`;

export const Warnings = styled.div`
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  text-align: left;
`;
