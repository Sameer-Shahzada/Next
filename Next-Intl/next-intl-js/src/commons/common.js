'use client';
import { React, useTransition } from "react";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";
import { FormControl, Select, MenuItem, TextField, Dialog, Box, IconButton, Tooltip, } from "@mui/material";

export const LangDropdownSelect = ({ children = [], defaultValue, MenuProps, list = [], value, onChange, label, placeholder, minWidth = 120, sx = {}, ...props }) => {

  const router = useRouter();
  // const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    // startTransition(() => {
      router.replace(
        { pathname, params },
        { locale: nextLocale }
      );
    // });
  }

  return (
    <FormControl variant="standard" sx={{
      m: 1, minWidth,
      ...sx
    }} {...props}>
      {/* <InputLabel id="lang-dropdown-label">{label}</InputLabel> */}
      <Select
        labelId="lang-dropdown-label"
        id="lang-dropdown"
        label={label}
        // list={list || []}
        value={value}
        onChange={onSelectChange}
        placeholder={placeholder || 'Select an option'}
        MenuProps={MenuProps}
      >
        {/* <MenuItem value="">
          <em>{placeholder || "Select an option"}</em>
        </MenuItem> */}

        {children.map((child, index) => (
            
            <MenuItem key={index} value={child.props.value}>
              {child.props.value}
            </MenuItem>
        ))}

        {/* {list.map((locale) => (
          <MenuItem key={locale} value={locale}>
             {locale.toUpperCase()} 
            {locale}
          </MenuItem>
        ))} */}

      </Select>
    </FormControl>
  );
};
