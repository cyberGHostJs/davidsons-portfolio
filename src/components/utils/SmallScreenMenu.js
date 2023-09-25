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
    <>
      <ul className="navitem_Ul">
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
      <li>two</li>
    </>
  );
};

export default memo(SmallScreenMenu)
