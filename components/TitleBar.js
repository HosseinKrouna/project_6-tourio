import Image from "next/image";
import styled from "styled-components";

function TitleBar() {
  return (
    <StyledHeader>
      <h1>Tourio</h1>
      <Image
        src={
          "https://images.unsplash.com/photo-1506792006437-256b665541e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        }
        alt={"Logo"}
        width={30}
        height={30}
      />
    </StyledHeader>
  );
}

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
  width: 100vw;
  background-color: white;
`;

export default TitleBar;
