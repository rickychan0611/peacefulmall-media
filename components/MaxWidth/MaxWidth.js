import styled from "styled-components";
import { useIsDesktop } from "../../util/useScreenSize";

const MaxWidth = ({ children }) => {
  const isDesktop = useIsDesktop();

  return (
    <Container isDesktop={isDesktop}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
export default MaxWidth;
