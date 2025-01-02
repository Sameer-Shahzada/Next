// ------------ | Navbar - MUI Props for dropdown  | ------------//

import { grey } from "@mui/material/colors";
export const lang_dropdown_menu_props = {
    PaperProps: {
      sx: {
        bgcolor: 'rgba(255, 255, 255, 0.1)', //semi-transparent
        backdropFilter: 'blur(10px)', // blur effect
        
        mt: 2, // margin-top between the input field and popup
        '& .MuiMenuItem-root': {
          color: grey[200],
        },
        '& .MuiMenuItem-root:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.2)', // Add a hover effect if needed
        },
      },
    },
  };