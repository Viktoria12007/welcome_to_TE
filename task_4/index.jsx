import { useState } from "react";

export const BlockWrap = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
      <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
        {children}
      </div>
  );
};

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {
  return (
    <BlockWrap mouseEnterCallbak={mouseEnterCallbak}>
      <img src={imgSrc} alt={imgAlt} />
    </BlockWrap>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {
  return (
    <BlockWrap mouseEnterCallbak={mouseEnterCallbak}>
      <p>{content}</p>
    </BlockWrap>
  );
};

export const Block3 = ({ mouseEnterCallbak, userData }) => {
  return (
    <BlockWrap mouseEnterCallbak={mouseEnterCallbak}>
      <address>
        country: {userData.country}, street: {userData.street}
      </address>
    </BlockWrap>
  );
};
