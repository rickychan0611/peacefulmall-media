import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider, Pagination, Icon } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { doctors as doctorsAtom, selectedDoctor as selectedDoctorAtom } from "../../data/atoms";

const DoctorList = ( {noNav}) => {
  const router = useRouter();
  const [doctors] = useRecoilState(doctorsAtom);
  const [selectedDoctor, setSelectedDoctor] = useRecoilState(selectedDoctorAtom);

  const viewDoctor = (item) => {
    console.log("item", item)
    setSelectedDoctor(item)
    router.push('/doctor/' + item.name + '/' + item.id)
  }

  return (
    <Wrapper>
     {!noNav && <span>
        <span style={{ fontWeight: "500" }}>全部科室</span> 儿科 妇科 产科
        泌尿外科 消化内科 口腔科
      </span>}
      {doctors.map((item, i) => {
        return (
          <>
            <Divider />
            <Card>
              <Col3>
                <Img src={item.pic} />
                <div>
                  <Row>
                    <Title>{item.name}</Title>
                    <Des>{item.title}</Des>
                  </Row>

                  <Content>{item.goodAt}</Content>
                  <br />
                  <Bio>{item.bio}</Bio>
                </div>
                <div>
                  <Button onClick={() => viewDoctor(item)}>咨询医生</Button>
                  <br />
                  <Button>网上约诊</Button>
                </div>
              </Col3>
            </Card>
          </>
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
  padding-bottom: 20px;
`;
const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 15px;
`;
const Col3 = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 20px;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
const Des = styled.div`
  font-size: 12px;
  color: grey;
`;
const Img = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 55px;
  object-fit: cover;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
`;
const Content = styled.div`
  font-size: 15px;
  line-height: 28px;
  color: grey;
  font-size: 12px;
  line-height: 16px;
  margin-top: 10px;
`;
const Bio = styled.div`
  font-size: 14px;
  line-height: 24px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  background-color: ${(p) => p.theme.primary};
  color: white;
  min-width: 100px;
`;
export default DoctorList;
