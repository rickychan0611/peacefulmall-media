import styled from "styled-components";
import Topic from "../../components/Topic";
import SearchCard from "../../components/SearchCard";
import { Divider } from "semantic-ui-react";
import { useRouter } from 'next/router'

const herbal_wiki = () => {
  const router = useRouter();

  return (
    <>
      <Img>
        <img src="/herb-bg.png" style={{ width: "100%" }} />
      </Img>
      <Container>
        <Wrapper>
          <Title>中草药百科</Title>
          <TwoColRow>
            <div style={{ flex: 2 , paddingBottom: 60}}>
              <Card>
                <h2>{router.query.name}</h2>
                <Text>
                  ({router.query.name}别名:鬼臼、爵犀、马目毒公、九臼、天臼、解毒、害母草、独脚莲、独荷草、羞天花、术律草、琼田草、山荷叶、旱荷、八角盘、金星八角、独叶一枝花、八角连、金魁连、八角乌、白八角莲、金边七)
                </Text>
              </Card>
              <Card>
                <Header>简介</Header>
                <Text>
                {router.query.name}多年生草本，植株高40-150厘米。根状茎粗状，横生，多须根；茎直立，不分枝，无毛，淡绿色。茎生叶2枚，薄纸质，互生，盾状，近圆形，直径达30厘米，4-9掌状浅裂，裂片阔三角形，卵形或卵状长圆形，长2.5-4厘米，基部宽5-7厘米，先端锐尖，不分裂，上面无毛，背面被柔毛，叶脉明显隆起，边缘具细齿；下部叶的柄长12-25厘米，上部叶柄长1-3厘米。花梗纤细、下弯、被柔毛；花深红色，5-8朵簇生于离叶基部不远处，下垂；萼片6，长圆状椭圆形，长0.6-1.8厘米，宽6-8毫米，先端急尖，外面被短柔毛，内面无毛；花瓣6，勺状倒卵形，长约2.5厘米，宽约8毫米，无毛；雄蕊6，长约1.8厘米，花丝短于花药，药隔先端急尖，无毛；子房椭圆形，无毛，花柱短，柱头盾状。浆果椭圆形，长约4厘米，直径约3.5厘米。种子多数。花期3-6月，果期5-9月。为多年生草本植物，地下有横走根茎，根茎粗壮，连续留有老茎枯死后的残痕。茎单一直立，株高30-60厘米，茎顶部具1-2叶。叶盾形，展开呈圆形，直径10-30厘米，四周4-9浅裂，边缘具细齿。花数朵着生于叶柄顶端，花下垂，花瓣6枚，倒卵形，长2-2.5厘米，深红色。上位子房，结椭圆形浆果{" "}
                </Text>
              </Card>
              <Card>
                <Header>归经</Header>
                <Text>甘、味苦，凉。有小毒。 </Text>
                <Divider />
                <Header>孕妇能吃吗</Header>
                <Text>孕妇禁用。含毒性，导致胎儿发育不良。</Text>
                <Divider />
                <Header>适宜人群</Header>
                <Text>
                  1、毒蛇咬伤：八角莲、七叶一枝花、白马骨、飞来鹤、粉防己各3钱，水煎服。外用阴行草、白马骨、柳叶白前、蛇葡萄适量，煎水冲洗；再用鱼腥草、杠板归、星宿菜、葎草等鲜草捣烂敷患处周围。
                  2、疖肿：八角莲研粉，加凡士林90%，调成软膏敷患处。
                  3、乳腺癌：八角莲、黄杜鹃各5钱，紫背天葵1两，加白酒1斤，浸泡7天后内服外搽。每服3钱，每日2～3次。
                </Text>
                <Divider />
                <Header>禁忌人群</Header>
                <Text>孕妇禁服，体质虚弱者慎服。</Text>
                <Divider />
                <Header>经期能吃吗</Header>
                <Text>经期禁用，经期忌寒，本品性凉，不宜服用。</Text>
                <Divider />
                <Header>副作用</Header>
                <Text>孕妇禁服，体质虚弱者慎服。</Text>
                <Divider />
                <Header>禁忌人群</Header>
                <Text>暂无副作用，本品含毒，服用须谨慎。</Text>
                <Divider />
                <Header>怎么保存</Header>
                <Text>晒干后置于阴凉处。</Text>
              </Card>
            </div>
            <Topic
              title="中药房"
              flex={1}
              path="/herbal_wiki"
              noAll
              fixedHeight
            >
              <SearchCard />
            </Topic>
          </TwoColRow>
        </Wrapper>
      </Container>
    </>
  );
};

const Text = styled.div`
  font-size: 14px;
  line-height: 24px;
`;
const Header = styled.h3`
  margin: 10px 0;
  font-weight: bold;
`;
const Card = styled.div`
  flex: ${(p) => p.flex};
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  padding: 20px 24px 20px 24px;
  height: ${(p) => p.fixedHeight && "100%"};
  border-radius: 10px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  background-color: white;
  margin-bottom: 20px;
`;
const Container = styled.div`
  position: relative;
  width: 100vw;
  margin-top: -200px;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 300px;
  max-width: 1100px;
  padding: 20px;
`;
const Title = styled.div`
  font-size: 40px;
  color: white;
  font-weight: bold;
  z-index: 100;
  margin-bottom: 60px;
  text-shadow: 0 0 10px black;
`;
const Img = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 0;
  top: -100px;
`;
const TwoColRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;
export default herbal_wiki;
