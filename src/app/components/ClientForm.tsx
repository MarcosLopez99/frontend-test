"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "../page.module.css";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "./Button";
import {Client} from "../models"

const professions = ["Engineer", "Doctor", "Teacher", "Artist", "Other"];

interface Form {
    onSubmit: (newClient: Client) => void;
}

interface FormField {
  name: string;
  label: string;
  type: string;
  pattern?: string;
  step?: string;
  required: boolean;
  options?: string[];
}

const ClientForm = ({ onSubmit }: Form) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    cellphone: "",
    homePhone: "",
    addressHome: "",
    profession: "",
    incomes: "",
  });

  const formFields: FormField[] = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      pattern: "[A-Za-z]+",
      required: true,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      pattern: "[A-Za-z]+",
      required: true,
    },
    { name: "birthday", label: "Birthday", type: "date", required: true },
    { name: "gender", label: "Gender", type: "text", required: true },
    {
      name: "cellphone",
      label: "Cellphone",
      type: "tel",
      pattern: "[0-9]{8}",
      required: true,
    },
    {
      name: "homePhone",
      label: "Home Phone",
      type: "tel",
      pattern: "[0-9]{8}",
      required: true,
    },
    {
      name: "addressHome",
      label: "Home Address",
      type: "text",
      required: true,
    },
    {
      name: "profession",
      label: "Profession",
      type: "select",
      options: professions,
      required: true,
    },
    {
      name: "incomes",
      label: "Incomes",
      type: "number",
      step: "any",
      pattern: "\\d+(\\.\\d{1,2})?",
      required: true,
    },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCleanData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      birthday: "",
      gender: "",
      cellphone: "",
      homePhone: "",
      addressHome: "",
      profession: "",
      incomes: "",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData)
    handleCleanData();
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div key={index} className={styles.formGroup}>
          {field.type === "select" ? (
            <SelectField
              label={field.label}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              required={field.required}
              options={field.options!}
            />
          ) : (
            <InputField
              label={field.label}
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              pattern={field.pattern}
              step={field.step}
              required={field.required}
            />
          )}
        </div>
      ))}
      <div className={styles.btnGroup}>
        <Button type="submit" label="Guardar" />
        <Button type="button" label="Limpiar" onClick={handleCleanData} />
        <Button
          type="button"
          label="Cancelar"
          onClick={() => window.location.reload()}
        />
      </div>
    </form>
  );
};

export default ClientForm;
