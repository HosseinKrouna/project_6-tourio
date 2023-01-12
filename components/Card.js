import Image from "next/image";
import styled from "styled-components";

function Card({ name, location, image }) {
  return (
    <StyledWrapper>
      <Image src={image} width={300} height={300} alt={name} />
      <StyledName>{name}</StyledName>
      <StyledContainer>
        <span>Location</span>
        <span>{location}</span>
      </StyledContainer>
    </StyledWrapper>
  );
}

const StyledName = styled.h2`
  left: 5px;
  bottom: 10px;
  position: absolute;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 0 5px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledContainer = styled.div`
  width: 300px;
  justify-content: space-between;
  display: flex;
`;

export default Card;
