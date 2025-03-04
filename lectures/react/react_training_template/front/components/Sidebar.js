import styled from "@emotion/styled";
import React from "react";

const Sidebar = () => {
  const Side = styled.div`
    display: flex;
    border-right: 1px solid #e0e0e0;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 20%;
  `;

  return (
    <Side>
      <ul>
        <li>Gantt Chart</li>
        <li>프로젝트</li>
        <li>영업 본부</li>
        <li>영업정보 관리</li>
        <li>영업DB분석</li>
        <li>수금 관리</li>
        <li>수주 관리</li>
        <li>기술 본부</li>
        <li>프로젝트 관리</li>
        <li>인사카드 관리</li>
        <li>WBS 관리</li>
        <li>관리자 메뉴</li>
        <li>사용자 관리</li>
        <li>조직 관리</li>
        <li>견적서 관리</li>
        <li>용역항목 관리</li>
        <li>견적서 내용 관리</li>
        <li>계약서 관리</li>
        <li>기본정보 관리</li>
        <li>기성단계 관리</li>
        <li>계약조건 관리</li>
        <li>사용자 로그</li>
        <li>권한 관리</li>
      </ul>
    </Side>
  );
};

export default Sidebar;
