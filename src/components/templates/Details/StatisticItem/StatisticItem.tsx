import React from "react";
import * as Style from "./index.styled";

type StatisticItemProps = {
  icon: JSX.Element;
  text: number | string | undefined;
};
const StatisticItem: React.FC<StatisticItemProps> = (props) => {
  return (
    <Style.StatisticItem>
      <Style.Text>{props.text}</Style.Text>
      <Style.Icon>{props.icon}</Style.Icon>
    </Style.StatisticItem>
  );
};

export default StatisticItem;
