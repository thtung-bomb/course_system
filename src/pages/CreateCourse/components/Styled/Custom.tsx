import styled from "styled-components";



export const Tittle = styled.div`
  width: 100%;
  padding: 20px 0px 25px;
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 18px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid rgb(241, 238, 238);
  border-bottom: 1px solid rgb(241, 238, 238); 
  .icon{
    margin-right: 10px;
    font-weight: 600;
    cursor: pointer;
    font-size: 120%;
    display: block;
    align-items: center;
    justify-content: center;
    
  }  
`;
export const ContentsContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  border: 1px solid #efefef;
`;

export const ContainerTogether = styled.div`
  width: 100%;
  margin-bottom: 20px;
  `;
  
export const ContentPage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
  cursor: pointer;
  
  `;


export const CheckboxWrapper = styled.div`
  --active: #ed2a26;
  --active-inner: #fff;
  --focus: rgba(39, 94, 254, 0.3);
  --border: #fff;
  --border-hover: rgba(0, 0, 0, .05);
  --background: rgba(0, 0, 0, .15);
  --disabled: #f6f8ff;
  --disabled-inner: #e1e6f9;
  
  * {
    box-sizing: inherit;
  }
  
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  input[type='checkbox'] {
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
    transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  }
  
  input[type='checkbox']:after {
    content: '';
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease), opacity var(--d-o, 0.2s);
  }
  
  input[type='checkbox']:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  
  input[type='checkbox']:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
  }
  
  input[type='checkbox']:disabled:checked {
    --b: var(--disabled-inner);
    --bc: var(--border);
  }
  
  input[type='checkbox']:disabled + label {
    cursor: not-allowed;
  }
  
  input[type='checkbox']:hover:not(:checked):not(:disabled) {
    --bc: var(--border-hover);
  }
  
  input[type='checkbox']:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  
  input[type='checkbox']:not(.switch) {
    width: 21px;
    border-radius: 7px;
  }
  
  input[type='checkbox']:not(.switch):after {
    width: 5px;
    height: 9px;
    border: 2px solid var(--active-inner);
    border-top: 0;
    border-left: 0;
    left: 7px;
    top: 4px;
    transform: rotate(var(--r, 20deg));
  }
  
  input[type='checkbox']:not(.switch):checked {
    --r: 43deg;
    --o: 1;
  }
  
  input[type='checkbox'].switch {
    width: 38px;
    border-radius: 11px;
  }
  
  input[type='checkbox'].switch:after {
    left: 2px;
    top: 2px;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    background: var(--ab, var(--border));
    transform: translateX(var(--x, 0));
  }
  
  input[type='checkbox'].switch:checked {
    --ab: var(--active-inner);
    --x: 17px;
  }
  
  input[type='checkbox'].switch:disabled:not(:checked):after {
    opacity: 0.6;
  }

  label {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    margin-left: 4px;
  }
`;


