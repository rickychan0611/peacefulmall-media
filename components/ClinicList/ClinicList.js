import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider, Pagination, Icon } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import {
  clinics as clinicsAtom,
  selectedClinic as selectedClinicAtom,
} from "../../data/atoms";

const DoctorList = () => {
  const router = useRouter();
  const [clinics] = useRecoilState(clinicsAtom);
  const [selectedClinic, setSelectedClinic] = useRecoilState(
    selectedClinicAtom
  );

  const viewClinic = (item) => {
    console.log("clinic item", item);
    setSelectedClinic(item);
    router.push("/clinic/" + item.name + "/" + item.id);
  };

  return (
    <Wrapper>
      <span style={{ marginBottom: 10 }}>
        <span style={{ fontWeight: "500" }}>全部地区&nbsp;&nbsp;&nbsp;</span>
        列治文&nbsp;&nbsp;&nbsp;本拿比&nbsp;&nbsp;&nbsp;温西&nbsp;&nbsp;&nbsp;
        温东&nbsp;&nbsp;&nbsp;北温&nbsp;&nbsp;&nbsp;枫树岭
      </span>
      {clinics.map((item, i) => {
        return (
          <CardContainer onClick={() => viewClinic(item)}>
            <PicWrapper>
              <Pic src={item.pic} />
            </PicWrapper>
            <CardWrapper>
              <Name>{item.name}</Name>
              <Lang>{item.lang}</Lang>
              <Tel>
                <Icon name="phone" />
                &nbsp;&nbsp;{item.tel}
              </Tel>
            </CardWrapper>
          </CardContainer>
        );
      })}
      <Row style={{ justifyContent: "center", marginTop: 30 }}>
        <Pagination
          defaultActivePage={5}
          ellipsisItem={{
            content: <Icon name="ellipsis horizontal" />,
            icon: true,
          }}
          firstItem={{ content: <Icon name="angle double left" />, icon: true }}
          lastItem={{ content: <Icon name="angle double right" />, icon: true }}
          prevItem={{ content: <Icon name="angle left" />, icon: true }}
          nextItem={{ content: <Icon name="angle right" />, icon: true }}
          totalPages={10}
        />
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
`;
const CardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
  background-color: white;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddbdb;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;
const PicWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;
const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 0px 20px 0px 20px;
  gap: 10px;
`;
const Pic = styled.img`
  font-weight: 500;
  width: 100%;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
  border-bottom: 10px;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const Lang = styled.div`
  font-size: 14px;
  color: grey;
`;
const Tel = styled.div`
  font-size: 14px;
  color: black;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export default DoctorList;
