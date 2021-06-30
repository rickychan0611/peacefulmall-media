import styled from "styled-components";

const TwoColPage = ({ children, nav }) => {
  return (
    <>
      <NavWrapper>
        <Nav>{nav}</Nav>
      </NavWrapper>

      <TwoCol>{children}</TwoCol>
    </>
  );
};

const NavWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 30px;
`;
const Nav = styled.div`
  margin-bottom: 20px;
`;
const TwoCol = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
export default TwoColPage;
