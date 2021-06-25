import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Divider, Form, Icon, Image, Modal } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { openSideMenu as openSideMenuAtom } from "../../data/atoms.js";
import { useDropzone } from "react-dropzone";

const QuestionForm = ({ setOpenQuestion, answers, setAnswers }) => {
  const router = useRouter();
  const [newQuestion, setNewQuestion] = useState({});
  const [openImage, setOpenImage] = useState();
  const [openModal, setOpenModal] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      let newfiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      console.log("newfiles", newfiles);
      // setFiles([...files, ...newfiles]);
      let files = newQuestion.files;

      if (files && files[0]) {
        handleChange([...files, ...newfiles], "files");
      } else {
        handleChange([...newfiles], "files");
      }
    },
  });

  const handleChange = (value, name) => {
    setNewQuestion((prev) => ({ ...prev, [name]: value, id: answers.length }));
  };

  const handleQuestionSubmit = () => {
    if (newQuestion.id) {
      // let temp = [...answers];
      // let question = newQuestion;
      // question = { ...question, createAt: moment().format("YYYY-MM-DD"), likes: 0 };
      // temp.unshift(question);
      // console.log("temp", temp);
      // setAnswers(temp);
      setNewQuestion({});
      setOpenModal(true);
    }
  };

  useEffect(() => {
    console.log("newQuestion", newQuestion);
    setNewQuestion((prev) => prev);
  }, [newQuestion]);

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        dimmer="inverted"
        size="tiny"
      >
        <Modal.Content>
          <Header icon>
            <Icon name="check circle outline" />
            谢谢您的咨询。我们会尽快解答您的问题。
          </Header>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              setOpenQuestion(false);
              setOpenModal(false);
            }}
          >
            OK
          </Button>
        </Modal.Actions>
      </Modal>

      <Form onSubmit={handleQuestionSubmit}>
        <Form.Group widths="equal"></Form.Group>
        <Form.Input
          label="您的问题"
          placeholder="请用一句话概括描述您的病情及疑问"
          value={newQuestion.question}
          onChange={(e) => handleChange(e.target.value, "title")}
        />
        <Form.TextArea
          label="详细信息"
          placeholder="请填写您的健康疑问，描述越详细，医生们越容易解答。示例: 鼻子老是流鼻血，是怎么回事？慢性鼻窦炎的危害有哪些？该如何治疗？"
          value={newQuestion.content}
          onChange={(e) => handleChange(e.target.value, "content")}
        />

        <Divider />
        <Title>添加照片</Title>
        <PicRow>
          {newQuestion &&
            newQuestion.files &&
            newQuestion.files[0] &&
            newQuestion.files.map((file, i) => {
              return (
                <div style={{ position: "relative" }}>
                  <CloseIcon
                    onClick={() => {
                      let newQuestionClone = JSON.parse(
                        JSON.stringify(newQuestion)
                      );
                      let files = newQuestion.files;
                      files.splice(i, 1);
                      console.log("close", files);
                      setNewQuestion((prev) => ({ ...prev, files }));
                    }}
                  >
                    <Icon name="times" />
                  </CloseIcon>

                  <ReviewImage
                    src={file.preview}
                    key={i}
                    onClick={() => {
                      setOpenImage(URL.createObjectURL(file));
                      setOpen(true);
                    }}
                  />
                </div>
              );
            })}
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <ReviewImage src="/addPhotoBox-blue.JPG" />
            ) : (
              <ReviewImage src="/addPhotoBox.JPG" />
            )}
          </div>
        </PicRow>
        <Button type="submit">提交咨询</Button>
      </Form>
      <br />
    </>
  );
};

const ReviewImage = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
`;
const CloseIcon = styled.div`
  position: absolute;
  right: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 2px 2px 4px 4px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: white;
  width: 100%;
  padding: 20px 44px 30px 44px;
  border-radius: 10px;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 0;
  gap: 10px;
`;
const PicRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 30px;
`;
const Header = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  color: white;
  /* border: 1px solid ${(p) => p.theme.primary}; */
  background-color: ${(p) => p.theme.primary};;
  width: 100px;
  cursor: pointer;
  border: none;
`;
const AnswerContainer = styled.div``;

const Answer = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 15px;
`;

export default QuestionForm;
