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
        <Flip>
          <h1 className="MM00_v__title">GJ Community</h1>
        </Flip>

        <div className="MM00_v__menuBox">
          {menus.map((menu, idx) => {
            return (
              <Bounce bottom delay={idx * 250} key={idx}>
                <div className="MM00_v__menuBox__menu">{menu.menuName}</div>
              </Bounce>
            );
          })}
        </div>
      </main>
    );
  }
}

export default MM00_v;
