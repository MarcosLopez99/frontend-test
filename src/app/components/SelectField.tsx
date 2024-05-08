import React, { ChangeEvent } from "react";
import styles from "../page.module.css";

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  value,
  required,
  onChange,
}) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.labelForm}>{label}:</label>
      <select
        className={styles.selectForm}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;