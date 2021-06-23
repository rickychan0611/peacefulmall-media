import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { openSideMenu as openSideMenuAtom } from '../../data/atoms.js';

const Button = ({children}) => {
  const router = useRouter();

  return (
    <Container>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.primary};
  color: white;
`;

export default Button;
