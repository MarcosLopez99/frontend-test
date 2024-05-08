import React from "react";
import styles from "../page.module.css"

interface ButtonProps {
  type: "submit" | "button";
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, label, onClick }) => {
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;