import { memo, useContext } from "react";
import { selectedOptionApi, showApi } from "../home-screen/Home";
import { MainNavMenuItems } from "./Data";


const SmallScreenMenu = () => {
  const { setShow } = useContext(showApi);
  const { selectedOption, setSelectedOption } = useContext(selectedOptionApi);

  const handleMenuClick = (label) => {
    setShow(false);
    setSelectedOption(label);
  };
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", zIndex: 1000, position: "fixed", width: "100%"}}>
      {/* <div style={{border: "1px solid green"}}>head</div> */}
      <li className="" style={{display: "flex", justifyContent: "space-between", paddingRight: "10%", marginTop: "0%", alignItems: "center" }}>
        <p style={{ marginTop:'auto'}}>Davidson Onyebuchi</p>
        <p onClick={()=>setShow(false)} style={{ marginTop:'auto'}}>X</p>
      </li>

      <ul className="navitem_Ul" style={{}}>
        {MainNavMenuItems.map((item) => (
          <li
            key={item.label}
            className={`${selectedOption === item.label ? "currentItem" : ""}`}
            onClick={() => handleMenuClick(item.label)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <li className="" style={{}}>two</li>
    </div>
  );
};

export default memo(SmallScreenMenu)
