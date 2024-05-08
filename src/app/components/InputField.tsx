import React, { ChangeEvent } from "react";
import styles from "../page.module.css"

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  pattern?: string;
  step?: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  pattern,
  step,
  required,
  onChange,
}) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.labelForm}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        pattern={pattern}
        step={step}
        required={required}
        className={styles.inputForm}
      />
    </div>
  );
};

export default InputField;