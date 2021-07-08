import styled from "styled-components";

const CardContainer = ({ flex, children, fixedHeight }) => {

  return (
    <Container flex={flex} fixedHeight={fixedHeight}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  flex: ${(p) => p.flex};
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  /* padding: 20px 24px 20px 24px; */
  height: ${(p) => p.fixedHeight && "100%"};
  border-radius: 10px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  /* background-color: white; */
`;

export default CardContainer;
