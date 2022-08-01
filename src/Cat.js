import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Cat = () => {
  const params = useParams();
  const navigate = useNavigate();
  // useNavigate 훅으로 페이지 이동하기

  console.log(params);

  return (
    <div>
      <h1>고양이 화면입니다!</h1>
      <button
        onClick={() => {
          navigate("/");
          // 메인버튼 누르면 메인("/")으로 이동
        }}
      >
        메인으로 가기
      </button>
    </div>
  );
};

export default Cat;
