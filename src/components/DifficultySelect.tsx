import React from "react";
import "./DifficultySelect.styles.css";

type Props = {
  callback: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const DifficultySelect: React.FC<Props> = ({ callback }) => {
  return (
    <div className="difficulty-select">
      <select defaultValue="easy" onChange={callback}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultySelect;
