// import { Box, FormLabel, TextField } from "@mui/material";
// import React from "react";
// import { useField } from "formik";
// import { colors } from "../constants/theme";

// export const inputStyles = {
//   display: "flex",
//   flexDirection: "row",
//   gap: "4px",
//   alignItems: "center",
//   fontFamily: "Inter",
//   fontSize: "13px",
//   fontWeight: "500",
//   color: "#525252",
//   // maxWidth: '410px',
//   textarea: {
//     background: "white",
//   },
//   "& label.MuiFormLabel-root": {
//     flexShrink: "0",
//     fontSize: "13px",
//     transform: "none",
//     margin: "0",
//   },
//   // },
//   "& .MuiFormLabel-root": {
//     "&.Mui-focused": {
//       color: colors.text.dark,
//     },
//     color: colors.text.dark,
//     position: "initial",
//     fontSize: "20px",
//     marginBottom: "8px",
//     fontWeight: "400",
//     transform: "translate(12px, 4px) scale(0.75)",
//   },
//   "& .MuiInputBase-root": {
//     // padding: '0px !important  ',
//     background: "white",
//     borderRadius: "4px",
//     "&.Mui-disabled": {
//       background: `${colors.tertiary.dark}20`,
//     },
//     "&.MuiInputBase-multiline": {
//       padding: "0",
//     },
//     // background: `${colors.tertiary.light}70`,
//     // background: "white",
//     border: `1.5px solid ${colors.tertiary.light}`,
//     // background: 'red',
//     padding: "10px 56px 10px 12px!important",
//     "& input.MuiInputBase-input": {
//       // padding: "11px 12px",
//       fontSize: "14px",
//       color: "#393939",
//       // background: "transparent",
//       fontWeight: "400",
//       lineHight: "auto",
//       padding: "0px !important",
//     },
//     "&.MuiInputBase-root.Mui-disabled": {
//       // background: "none",
//       color: "#393939",
//       "& > input": {
//         color: "white",
//       },
//     },
//     "&:after, &:before": {
//       display: "none",
//     },
//   },
//   ".MuiFormLabel-asterisk.MuiInputLabel-asterisk": {
//     color: "red",
//   },
//   "& .MuiInputBase-root.MuiFilledInput-root:not(.Mui-disabled):hover": {
//     background: "white",
//   },
//   "& .MuiInputBase-root.MuiInputBase-multiline": {
//     borderRadius: "8px !important",
//   },
// };

// export const inputOutlineStyle = {
//   borderRadius: "5px",
//   "& .MuiInputBase-root": {
//     background: "red",
//     border: `1px solid ${colors.tertiary.light}`,
//     width: "70%",
//     "& .MuiInputBase-input": {
//       fontSize: "14px",
//     },
//     "& .Mui-focused": {
//       color: "white",
//     },
//   },
// };

// export const Input = ({
//   label,
//   name = "",
//   variant = "filled",
//   outline = false,
//   ...otherProps
// }) => {
//   let textFieldConfig = {
//     variant,
//     InputLabelProps: { shrink: true },
//     fullWidth: true,
//     ...otherProps,
//     sx: outline
//       ? { ...inputOutlineStyle }
//       : { ...inputStyles, ...otherProps.sx },
//   };

//   console.log(outline);
//   if (name) {
//     //eslint-disable-next-line
//     const [field, meta] = useField(name || "");
//     textFieldConfig = {
//       ...field,
//       ...textFieldConfig,
//     };

//     if (meta && meta.touched && meta.error) {
//       textFieldConfig.error = true;
//       textFieldConfig.helperText = meta.error;
//     }
//   }
//   return (
//     <Box className="flex gap-x-4 items-center">
//       {label && (
//         <FormLabel
//           sx={{
//             width: "30%",
//             textAlign: "right",
//             fontSize: "13px",
//             color: "#525252",
//             fontWeight: "500",
//             fontFamily: "Inter",
//           }}
//         >
//           {label}
//         </FormLabel>
//       )}
//       <TextField
//         {...textFieldConfig}
//         sx={{ ...textFieldConfig.sx, width: `${label ? "70%" : "100%"}` }}
//       />
//     </Box>
//   );
// };