import React from "react";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

class MM00_v extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          menuName: "FREEBOARD",
          link: "",
        },
        {
          menuName: "DOCUMENTS BOARD",
          link: "",
        },
        {
          menuName: "GALLARY",
          link: "",
        },
      ],
    };
  }
  render() {
    const { menus } = this.state;
    return (
      <main className="MM00_v">
        <header className="header">주문하려면 메뉴를 클릭해 주세요.</header>
        <ul className="nav-bar">
          <li className="hot">인기메뉴</li>
          <li className="new">신메뉴</li>
          <li className="set">세트메뉴</li>
          <li className="dduk">떡볶이</li>
          <li className="kim">김밥</li>
          <li className="drink">커피&음료</li>
          <li className="guitar">기타</li>
        </ul>
        <div className="reference">※쿠폰 이용시 결재 후 사용하세요.※</div>

        <div className="MM00_v__menuBox">
          {menus.map((menu, idx) => {
            return <div className="MM00_v__menuBox__menu">{menu.menuName}</div>;
          })}
        </div>
      </main>
    );
  }
}

export default MM00_v;
