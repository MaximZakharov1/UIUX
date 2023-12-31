import React from "react";
import * as Style from "./index.styled";
import { VscStarFull, VscStarHalf} from "react-icons/vsc";

interface FilledStarsProps {
    count: number | undefined;
    color?: string;
  }  
  const FilledStars: React.FC<FilledStarsProps> = ({count, color}) => {
    const filledCount = count ? Math.trunc(count) : 10; // Проверяем, задано ли значение count
    const stars = Array.from({ length: filledCount }, (_, index) => (
      <VscStarFull key={index} style={{ color }} />
    ));
    // Добавляем звезду наполовину, если условие выполняется
    if ((count || 0) * 10 % 10 >= 5) {
      stars.push(<VscStarHalf key={filledCount} style={{ color }} />);
    }
    return <Style.FilledStars>{stars}</Style.FilledStars>;
  }

export default FilledStars;
