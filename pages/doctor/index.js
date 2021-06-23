import styled from 'styled-components';
import Topic from '../../components/Topic';
import DoctorList from '../../components/DoctorList';
import FeaturedDoctor from '../../components/FeaturedDoctor';

const Doctor = () => {
  return (
    <TwoCol>
      <Topic title="在线问诊" flex={2}>
        <DoctorList />
      </Topic>
      <Topic title="推荐专家" flex={1}>
        <FeaturedDoctor />
      </Topic>
    </TwoCol>
  );
};

const TwoCol = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* justify-content: space-between; */
  gap: 20px;
`;
export default Doctor;
