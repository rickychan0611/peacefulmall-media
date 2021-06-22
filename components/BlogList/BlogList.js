import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
import { useRecoilState } from "recoil";

const blogs = [
  {
    id: 1,
    pic: "/pic-1.jpg",
    title: "你了解黄芪籽吗 它有这些功效和副作用",
    content:
      "大家对黄芪这种中药药材比较了解，知道它的功效，也知道它可以泡水喝，而且人们喝了对身体有极大的好处。但是你知道吗，黄芪的种子黄芪",
  },
  {
    id: 2,
    pic: "/pic-3.jpg",
    title: "黄芪外敷有这么多的功效和作用 赶紧了解一下",
    content:
      "黄芪是一种中药药材，这是很多人都知道的一个常识。黄芪作为中药药材可以补中益气，缓解人体体虚增强人体素质。不过在平时人们用黄芪多为内服，其",
  },
  {
    id: 3,
    pic: "/pic-4.jpg",
    title: "中医教你艾叶灰的五大妙用 不来看看真的很可惜",
    content:
      "说起中国的中医，很多人都特别的信任，因为人们身体如果出现某种基本，采用中医疗法不仅可以治标还可以治本。生活中人们养生过程中会用到各种各样的中医药材，比如将艾叶制作成艾叶灰就有很多的妙用，下面小编就详细给大家介绍一下。",
  },
  {
    id: 4,
    pic: "/pic-2.jpg",
    title: "带你了解金蝉花的功效作用和相关禁忌 值得你看一看",
    content:
      "金蝉花可能很多人都没听说过，这里说的金蝉花其实是一种可以增强人体免疫力的中药药材，它可以保护人类肝脏也可以预防和缓解痛风，对维持人体健康",
  },
];

const BlogList = () => {
  const router = useRouter();

  return (
    <Wrapper>
      {blogs.map((item, i) => {
        return (
          <>
            <Divider />
            <Card>
              <Img src={item.pic} />
              <div>
                <Title>{item.title}</Title>
                <Content>{item.title}</Content>
              </div>
            </Card>
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 10px;
`;
const Card = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  gap: 15px;
`;
const Img = styled.img`
  width: 120px;
  height: 90px;
  border-radius: 5px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
`;
const Content = styled.div`
  font-size: 15px;
  line-height: 28px;
  color: grey;
`;

export default BlogList;
