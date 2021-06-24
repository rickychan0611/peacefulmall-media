import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const ClinicCard = ( {item} ) => {

  return (
    <CardContainer>
        <Pic src={item.pic} />
      <Wrapper>
        <Name>{item.name}</Name>
        <Lang>{item.lang}</Lang>
        <Tel><Icon name="phone" />&nbsp;&nbsp;{item.tel}</Tel>
      </Wrapper>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddbdb;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 0px 20px 20px 20px;
`;

const Pic = styled.img`
  font-weight: 500;
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 10px;
  margin-bottom: 15px;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const Lang = styled.div`
  font-size: 14px;
  color: grey;
  margin-bottom: 5px;
`;
const Tel = styled.div`
  font-size: 14px;
  color: black;
`;

export default ClinicCard;
