import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import NotionIcon from '/notion.svg';
// import { ReactComponent as Logo } from '/notion.svg';
import Typography from '@material-ui/core/Typography';

import Cards from './Cards'
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const projects = [
  {
    name: "음성 ChatGPT",
    subtitle: `음성으로 질문을 하면 \nChatGPT의 대답을 음성으로 들려주는 프로그램 `,
    description: `개인 프로젝트로 기획했습니다. OpenAI와 Google Cloud Speech의 API를 이용했습니다`,
    mypart: [
      ` API들을 연결하여 구현`,
      ` OpenAI의 ChatGPT API`,
      ` Google Cloud Speech API`,
      ],
    date: `April-2023-blue`,
    stacks: ['python', 'openai', 'googlespeech'],
    img: "https://user-images.githubusercontent.com/53862911/233826669-2e1a30d3-160b-44d7-9e3f-a9d8b81c46d6.png"
  },
  {
    name: "암세포 분류 AI",
    subtitle: `세포 이미지를 보고 암세포인지 정상세포인지 분류하는 AI`,
    description: `해외 프로그램에서 진행한 탐프로젝트입니다. \nCNN의 ResNet, VGG, Inception-V3의 암세포 분류 성능을 비교했습니다.`,
    mypart: [
      `암세포와 정상세포 이미지 데이터셋 구축`,
      `ResNet 전이학습 모델 구현`,
      `ResNet, VGG, Inception-V3 성능 비교`,
    ],
    date: `February-2023-blue`,
    stacks: ['python', 'pytorch'],
    img: "https://user-images.githubusercontent.com/53862911/233826727-c81b0de8-755d-4a80-acd2-746298044a99.png"
  },
  {
    name: "손동작 인식 스트레칭 가이드",
    subtitle: `카메라에서 손동작을 인식하여 올바른 자세로 \n손 스트레칭을 할 수 있도록 도와주는 서비스`,
    description: `리드미 동아리에서 진행할 프로젝트입니다. 현재 기획 단계에 있습니다`,
    mypart: [
      `손동작 데이터셋 수집`,
      `LSTM 사용해 모델 생성`,
      `데이터셋을 모델에 학습`,
    ],
    date: `May-2023-blue`,
    stacks: ['python', 'numpy', 'opencv', 'tensorflow'],
    img: "https://user-images.githubusercontent.com/53862911/233826701-34e645d9-ef6c-4130-9f67-373b71e2a8af.png"
  },
  {
    name: "강아지 객체 분류 AI",
    subtitle: `강아지 이미지 학습 후 강아지 객체 분류를 하는 AI`,
    description: `연구실 프로젝트로 진행했습니다. 강아지의 이미지를 인공지능 모델에 학습시키고 강아지의 새로운 사진을 입력할 때 강아지 객체를 분류합니다`,
    mypart: [
      ` 강아지 데이터셋 구축`,
      ` Pytorch를 이용하여 전이 학습된 ResNet 모델 생성`,
    ],
    date: `December-2022-blue`,
    stacks: ['python', 'pytorch', 'numpy', 'scikitlearn'],
    img: "https://user-images.githubusercontent.com/53862911/233826449-dce822ba-3a81-4755-92a0-8504ebb78bbd.png"

  },
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  swipeToSlide: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
  ]
};


export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h5"> {"<Project />"} </Typography>
      <Slider {...settings} >
        {projects.map((i, index) =>
          <Box className="custom-slick" key={index.toString()} >
            <Cards  {...projects[index]} />
          </Box>
        )}
      </Slider>
    </div>
  );
}
