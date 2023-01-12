import Image from "next/image";
import styled from "styled-components";

function TitleBar() {
  return (
    <StyledHeader>
      <h1>Tourio</h1>
      <StyledLogo
        src={
          "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80"
        }
        alt={"Logo"}
        width={30}
        height={30}
      />
    </StyledHeader>
  );
}

const StyledLogo = styled(Image)`
  border-radius: 50%;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 95vw;
  background-color: white;
  padding: 0 20px;
`;

export default TitleBar;
