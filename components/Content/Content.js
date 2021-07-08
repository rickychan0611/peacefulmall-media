import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { selectedArticle as selectedArticleAtom } from '../../data/atoms';
import { useEffect } from "react";
import getColor from "../../util/getColor";
import moment from "moment";

const Content = ({ feeds }) => {
  const router = useRouter();
  const [item, setSelectedArticle] = useRecoilState(selectedArticleAtom);
  const a = {
    title: `卑詩多地高溫破紀錄 熱浪未完 恐要再捱一周 多區斷電 大溫數市宣布停課免中暑`,
    photo: "/new1.jpg",
    cat: "本地",
    content: `卑詩近日氣溫在40攝氏度上下，多地氣溫打破歷來6月高溫歷史紀錄，用電量亦「破表」，但氣候學家提醒，「最糟糕的尚未到來」。熱浪迫使溫哥華、列治文及本那比等校區今天決定停課一天，請家長勿送子女到學校，以免中暑。

    熱浪下亦有倡權者呼籲，政府重開溫東奧本海默公園(Oppenheimer Park)，以便無家可歸人士避暑。
    
    本地氣象學家庫斯(Michael Kuss)表示，周日、周一的氣溫比周六高至少1、2度，濕度則大致相同，而海邊的氣溫會上升到40度。極端高溫可能會在本周二結束，但接下來沿海及內陸地區的氣溫仍將分別保持在23及29度左右。
    
    剛過去的周末，卑詩省不僅打破了高溫記錄，由於許多民眾打開風扇或空調降溫，亦令全省用電量猛增。
    
    卑詩水電公司(BC Hydro)表示，周六晚的用電量創下峰值，用電量達到每小時7,972兆瓦，打破了去年8月創下的7,897兆瓦的最高紀錄。此外，通常工作日的用電量較節假日更高，預計周一用電量將繼續攀升。
    
    卑詩省至少有44個縣市周六錄得高溫峰值。溫哥華測得32度，超過舊紀錄2度；阿博斯福(Abbotsford)為39度，比舊記錄高出9度；維多利亞35度，高出此前最高氣溫6度；奧肯那根(Okanagan)奧索幼斯(Osoyoos)、葛特尼(Kootenays)納庫斯普(Nakusp)分別為39度、35度。
    
    昨天下午6時左右，新西敏市與本那比市交界地區出現大範圍停電，600多戶慘受酷熱下停電之苦。
    
    昨日，利頓(Lytton)以43.2度的高溫打破全國6月最熱氣溫記錄；菲沙河谷(Fraser Valley)錄得40度高溫，位於智利域附近的柯蒂斯湖(Cultus Lake)首次突破40度大關；內陸小鎮卡切溪(Cache Creek)升至42.5度；盧域區(Lillooet)以43.1度破了當地紀錄；此外，由於融雪導致河流水位上升，彭伯頓山谷(Pemberton Valley)已發布疏散令。
    
    熱浪未到頂 至少7月6日始降溫
    
    但氣象學家瓦格斯塔夫(Johanna Wagstaffe)表示，「最糟糕的情況尚未到來」，低陸平原將在周一達到史無前例的45度，最糟糕的內陸地區，酷熱疊加濕熱指數，體感溫度可高達50度，預計全省至少要到7月6日以後才會降溫。
    
    專家預計，目前的高溫紀錄可能很快就會被打破，隨着進入盛夏，未來氣候料將更為炎熱。
    
    另一方面，溫市藥物政策和扶貧顧問沃德(Karen Ward)呼籲政府重開溫東奧本海默公園，以便無家可歸人士有地方避暑，「這是一個令人們可以聚集在一起的社區場所。」
    
    去年5月，原本駐紮在奧本海默公園內的帳篷城露宿者遭省府清場，有一部分人士轉至850米外的士達孔拿公園(Strathcona Park)。上月，士達孔拿公園的搬遷死線到期，溫市府指，已為184名露宿者安排室內住所，但仍有少量帳篷未清走。沃德指出，溫東民眾正遭受「城市熱島效應」的衝擊，該社區建築、街道密集，不成比例地缺乏可達綠地。
    
    沃德說，她向市府詢問重開公園事宜，但沒有得到答复。她又指，許多容納無家可歸人士的單室住所(SRO)裝備簡陋，無法應對極端氣溫的挑戰。
    
    據1130報道，溫市府職員表示，正在努力盡快重新開放奧本海默公園，但同時強調，重開與持續的熱浪無關，公園原本就預備在今年6月中旬向大眾開放。`
  }

  useEffect(() => {
    if (!item) {
      setSelectedArticle(a)
    }
  }, [])

  return (
    <>
      {item && <Container>
        <CoverImg src={item.photo} />
        <Wrapper>
          <Row>
            <Cat getColor={getColor(item.cat)}>{item.cat}</Cat>
            <Credit>撰文：Hello Kitty &nbsp;	&nbsp;	&nbsp;	&nbsp;	
              最後更新日期：{moment().format("DD MMM YYYY")}</Credit>
          </Row>
          <Title>{item.title}</Title>
          <Text>{item.content}</Text>
        </Wrapper>
      </Container>
      }
    </>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  margin-bottom: 60px;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-bottom: 60px;
`;
const Wrapper = styled.div`
  /* display: flex; */
  /* flex-flow: column nowrap; */
  width: 100%;
  padding: 60px 120px 100px 120px;
`;
const CoverImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;
const Title = styled.div`
  font-size: 32px;
  margin-bottom: 50px;
  line-height: 150%;
`;
const Cat = styled.div`
  font-size: 15px;
  background-color: ${p => p.getColor};
  color: white;
  padding: 5px 10px;
`;
const Credit = styled.div`
  font-size: 15px;
  color: grey;
`;
const Text = styled.div`
  font-size: 18px;
  color: grey;
  line-height: 250%;

`;


export default Content;
