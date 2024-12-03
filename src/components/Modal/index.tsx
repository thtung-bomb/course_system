import styled from "styled-components";

type AlertProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

interface ButtonProps {
  isCancel?: boolean;
}

export const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: all 0.2s;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  position: relative;
  padding: 20px;
  background-color: rgb(255, 255, 255);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding: 5px 10px 20px 10px;
`;

const Button = styled.button<ButtonProps>`
  margin-left: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  background: ${(props) => (props.isCancel ? "transparent" : "#ed2a26")};
  color: ${(props) => (props.isCancel ? "#ed2a26" : "white")};

  &:hover {
    background: ${(props) => (props.isCancel ? "#ffecec" : "#333")};
    color: ${(props) => (props.isCancel ? "#333" : "#ffecec")};
  }
`;

function Alert({ title, message, onConfirm, onCancel }: AlertProps) {
  return (
    <>
      <Layout>
        <Overlay onClick={onCancel}></Overlay>
        <Content>
          <Title>{title}</Title>
          <p>{message}</p>
          <ButtonContainer>
            <Button onClick={onCancel} isCancel>
              Cancel
            </Button>
            <Button onClick={onConfirm}>Confirm</Button>
          </ButtonContainer>
        </Content>
      </Layout>
    </>
  );
}

export default Alert;
