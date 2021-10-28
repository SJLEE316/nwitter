import React from "react";
import { Link } from "react-router-dom"; // React에서는 a 엘리멘트 대신에 Link로 페이지 이동 구현

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
