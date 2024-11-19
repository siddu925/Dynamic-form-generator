import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./FormGenerator.css";
import {
  TextField,
  Button,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
} from "@mui/material";

function FormGenerator({ schema }) {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form Submitted Successfully!");
  };

  if (!schema?.fields) {
    return <p className="placeholder">Enter a valid JSON schema to generate the form.</p>;
  }

  return (
    <div className="form-container">
      {/* Render Form Title and Description */}
      {schema.formTitle && <h1 className="form-title">{schema.formTitle}</h1>}
      {schema.formDescription && <p className="form-description">{schema.formDescription}</p>}

      {/* Form Fields */}
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {schema.fields.map((field) => {
          switch (field.type) {
            case "text":
            case "email":
            case "password":
            case "number":
              return (
                <Controller
                  key={field.id}
                  name={field.id}
                  control={control}
                  defaultValue={field.defaultValue || ""}
                  rules={{
                    required: field.required ? `${field.label} is required` : false,
                    pattern: field.validation?.pattern,
                    min: field.validation?.min,
                    max: field.validation?.max,
                  }}
                  render={({ field: controllerField }) => (
                    <TextField
                      {...controllerField}
                      type={field.type}
                      label={field.label}
                      placeholder={field.placeholder}
                      fullWidth
                      error={!!errors[field.id]}
                      helperText={errors[field.id]?.message || ""}
                    />
                  )}
                />
              );
            case "textarea":
              return (
                <Controller
                  key={field.id}
                  name={field.id}
                  control={control}
                  defaultValue={field.defaultValue || ""}
                  rules={{
                    required: field.required ? `${field.label} is required` : false,
                  }}
                  render={({ field: controllerField }) => (
                    <TextField
                      {...controllerField}
                      label={field.label}
                      placeholder={field.placeholder}
                      multiline
                      rows={field.rows || 4}
                      fullWidth
                      error={!!errors[field.id]}
                      helperText={errors[field.id]?.message || ""}
                    />
                  )}
                />
              );
            case "select":
              return (
                <Controller
                  key={field.id}
                  name={field.id}
                  control={control}
                  defaultValue={field.defaultValue || ""}
                  rules={{
                    required: field.required ? `${field.label} is required` : false,
                  }}
                  render={({ field: controllerField }) => (
                    <FormControl fullWidth>
                      <InputLabel>{field.label}</InputLabel>
                      <Select
                        {...controllerField}
                        error={!!errors[field.id]}
                        aria-label={field.label}
                      >
                        {field.options.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
              );
            case "radio":
              return (
                <Controller
                  key={field.id}
                  name={field.id}
                  control={control}
                  defaultValue={field.defaultValue || ""}
                  rules={{
                    required: field.required ? `${field.label} is required` : false,
                  }}
                  render={({ field: controllerField }) => (
                    <FormControl component="fieldset">
                      <label>{field.label}</label>
                      <RadioGroup {...controllerField}>
                        {field.options.map((option) => (
                          <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  )}
                />
              );
            case "checkbox":
              return (
                <Controller
                  key={field.id}
                  name={field.id}
                  control={control}
                  defaultValue={field.defaultValue || false}
                  rules={{
                    required: field.required ? `${field.label} is required` : false,
                  }}
                  render={({ field: controllerField }) => (
                    <FormControlLabel
                      control={<Checkbox {...controllerField} />}
                      label={field.label}
                    />
                  )}
                />
              );
            default:
              return null;
          }
        })}
        <Button type="submit" variant="contained" className="submit-button">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default FormGenerator;
