import React, { HTMLInputTypeAttribute } from "react";
import CustomTextField from "../form/CutomTextField";
import { Box } from "@mui/material";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { mainTheme } from "@/utils/theme/DefaultTheme";

interface CustomFormFieldType<T extends FieldValues> {
  control: Control<T, any>;
  errors: any;
  name: string;
  variant: "outlined" | "standard" | "filled";
  type: HTMLInputTypeAttribute;
  id: string;
  label?: string;
  size?: "small" | "medium";
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string;
  className?: any;
  style?: any;
  InputLabelProps?: any;
  InputProps?: any;
  autoComplete?: string;
  fullWidth?: boolean;
}

const CustomFormTextField = ({
  control,
  errors, 
  name,
  variant,
  type,
  label,
  defaultValue,
  className,
  autoComplete,
  ...otherfields
}: CustomFormFieldType<any>) => (
  <Box>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ...nonRef } }) => {
        return (
          <CustomTextField
            {...nonRef}
            {...otherfields}
            label={
              <div
                style={{
                  fontFamily: mainTheme.typography.fontFamily,
                  width: "100%",
                  textWrap : "nowrap"
                }}
              >
                {label}
                {className?.includes("required") && (
                  <span
                    className="required"
                    style={{ color: "red", marginLeft: "4px" }}
                  >
                    {" "}
                    *
                  </span>
                )}
              </div>
            }
            error={errors[name] ? true : false}
            helperText={
              errors[name] ? (
                <span style={{ color: "#fff", backgroundColor: "transperent" }}>
                  {errors[name]?.message}
                </span>
              ) : (
                ""
              )
            }
            variant={variant}
            fullWidth
            type={type}
            autoComplete={autoComplete}
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              ...otherfields.InputLabelProps,
              style: {
                color: errors[name]
                  ? "red"
                  : mainTheme.palette.primary.contrastText,
                  display: "flex",
                  flexDirection: "row", 
                  justifyContent: "center", 
                  alignItems: "center",
                  textAlign: "center", 
                  fontFamily: mainTheme.typography.fontFamily,
                  width: "100%",
              },
            }}
          />
        );
      }}
    />
  </Box>
);

export default CustomFormTextField;
