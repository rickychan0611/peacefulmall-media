import { useRouter } from "next/router";
import styled from "styled-components";
import {} from "semantic-ui-react";

const Nav = ({ nav }) => {
  const router = useRouter();

  return (
    <NavWrapper>
      {nav &&
        nav.map((item, i) => {
          let last = nav.length === i + 1;
          return (
            <>
              {!last ? (
                <>
                  <Link onClick={() => router.push(item.link)}> {item.name} </Link> >
                </>
              ): <div>{item.name}</div>}
            </>
          );
        })}
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 30px;
  margin-bottom: 20px;
`;
const Link = styled.div`
  color: #4183c4;
  cursor: pointer;
`;

export default Nav;
