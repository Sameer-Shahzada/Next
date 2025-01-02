'use client'
import * as React from "react";
import { useState, useEffect } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
// add imports to connect next-intl
import {  Link, routing, redirect } from "@/i18n/routing";
// import { useRouter } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/routing";


// next
// import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
// framer-motion 
import { motion, AnimatePresence, } from "framer-motion";
// mui components
import {
  AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem,
  styled, alpha, InputBase
} from "@mui/material";
// material-icons
import { Menu as MenuIcon, Search as SearchIcon, Close as CloseIcon, } from '@mui/icons-material';
// mui colors
import { grey } from "@mui/material/colors";
// images or images-icons
// import { website_branding_logo } from "@/utils/icons/common";
// commons
import { pages } from "@/commons/routes";
import { LangDropdownSelect } from "@/commons/common";
import { langList } from "@/commons/constants";
// hooks
// import useMenuAnimation from "@/hooks/useMenuAnimation";
// animation variants 
// import { mobile_menu_box_variants, menu_item_variants } from "@/f-m-custom-variant/f-m-custom-variants";
// mui props 
import { lang_dropdown_menu_props } from "@/commons/common_mui_props";

import "../components/AppBar.css";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/commons/common1";

// mui styled components
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: grey[200],
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '12ch', // Default width

    [theme.breakpoints.up('lg')]: {
      width: '12ch', // Fixed width for md and lg breakpoints
    },
    [theme.breakpoints.down('md')]: {
      width: '12ch',
      '&:focus': {
        width: '16ch', // Expand width on focus for sm and xs breakpoints
      },
    },
  },
}));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('transparent');

  const router = useRouter()

  const pathname = usePathname();
  console.log('pathname - ', pathname)
  const selectedLayoutSegment = useSelectedLayoutSegment();
  console.log('selectedLayoutSegment - ', selectedLayoutSegment)

  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale()
  console.log('locale from hook - ', locale)
  
  // console.log(routing.locales)

  
  const isNavItemActive = (url) => {
    return pathname === url || (pathname.includes(url) && url !== '/');
  };

  const handleOpenNavMenu = (event) => {
    if (anchorElNav) {
      setAnchorElNav(null);
    } else {
      setAnchorElNav(event.currentTarget);
    }
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const locales = routing.locales;
  // const defaultLocale = routing.defaultLocale;
  
  // console.log('path - ', window.location.pathname)
  const [selectedLang, setSelectedLang] = useState();
  
  // console.log('fullurl - ', window.location.pathname)
  const handleLangChange = (event, locale,) => {


    const slocale = locale.props.value.toLowerCase()  
    // console.log('current - ', `/${slocale.toLowerCase()}${pathname}`)  

    const newLocale = event.target.value;
    setSelectedLang(newLocale);
    
    // Redirect to the selected locale's path
    if(pathname === '/') {
      router.push(slocale.toLowerCase());
    } else  {   // /about || -> hi/about -> hi/es/about
      console.log(`${slocale.toLowerCase()}${pathname}`)
      // redirect(`${slocale.toLowerCase()}${pathname}`)
      // redirect({href: pathname, locale: newLocale});


    } 
  }

  // const handleLangChange = (event) => {
   
  //   const newLocale = event.target.value.toLowerCase();
  
  //   setSelectedLang(newLocale);
  
  //   // Check if the current path has a locale
  //   const pathSegments = pathname.split('/').filter(Boolean); // Remove empty segments
  
  //   if (routing.locales.includes(pathSegments[0])) {
  //     // Replace the current locale in the URL
  //     pathSegments[0] = newLocale;
  //   } else {
  //     // Add the locale if there's none
  //     pathSegments.shift(newLocale);
  //   }
  
  //   // Join segments and navigate
  //   const newPath = `/${pathSegments.join('/')}`;
  //   router.replace(newPath);
  // };

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  // const scope = useMenuAnimation(isOpen);

  // useEffect(() => {

  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setIsSticky(true);
  //       setBackgroundColor('black');
  //     } else {
  //       setIsSticky(false);
  //       setBackgroundColor('transparent');
  //     }

  //     // if (window.scrollY > 10) {
  //     //   setBackgroundColor('black');
  //     // } else {
  //     //   setBackgroundColor('transparent');
  //     // }
  //   };

  //   if (pathname === '/') {
  //     window.addEventListener('scroll', handleScroll);
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   } else {
  //     setIsSticky(true);
  //     setBackgroundColor('black');
  //   }
  // }, [pathname]);

  useEffect(() => {
    // Set the header to be sticky by default
    setIsSticky(true);
    setBackgroundColor('black');

    // Cleanup function to ensure no scroll event listener is attached
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <>
      <AppBar
        position="relative"
        color="transparent"
        elevation={0}
        className={`appbar ${isSticky ? 'sticky' : ''} ${backgroundColor === 'black' ? 'bg_black' : ''}`}

      >
        <Container maxWidth="xl">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8, delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          > */}
          <Toolbar disableGutters sx={{
            // border: 2, borderColor: "red" 
          }}>
            {/* invisible on xs breakpoint only brand name & logo */}
            <Box
              sx={{
                display: { xs: "flex", md: "flex" },
                justifyContent: "flex-start",
                mr: 1,
                // border: 1,
              }}
            >
              <Link href="/">
                {/* <Image
                    src={website_branding_logo.BrandLogo} alt="BrandLogo"
                    height="28" width="128"
                    className="brand_logo"
                    style={{filter: pathname === '/' ? 'grayscale(0)' : '-moz-initial'}}
                  /> */}
              </Link>
            </Box>

            {/* mobile version | left side */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                // border: 3,
              }}
            >
              <AnimatePresence>
                {anchorElNav && (
                  <motion.div
                    initial="hidden" animate="visible" exit="hidden"
                    variants={mobile_menu_box_variants}
                  >
                    <Menu
                      className="Menu"
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleOpenNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                      PaperProps={{
                        sx: {
                          width: "100%",
                          height: "90vh",
                          bgcolor: "rgba(0, 0, 0, 0.9)",
                          borderRadius: 5,
                          mt: 1,

                          "& .MuiMenuItem-root": {
                            display: "flex",
                            justifyContent: "center",
                            color: grey[200],
                          },

                          "& .MuiMenuItem-root:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.2)",
                          },
                        },
                      }}
                    >
                      {pages.map((page, index) => (
                        <Link key={index} href={page.url} className="link">
                          <motion.div
                            variants={menu_item_variants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.1 }}
                            className="menuitem"
                          >
                            <MenuItem
                              sx={{ color: "black", my: 1, py: 1.25 }}
                              className="menuitem"
                              onClick={handleOpenNavMenu}
                            >
                              {page.title}
                            </MenuItem>
                          </motion.div>
                        </Link>
                      ))}
                      <motion.div
                        variants={menu_item_variants}
                        initial="hidden" animate="visible"
                        transition={{ delay: 4 * 0.1 }}
                        
                      >
                        <MenuItem>
                            <LangDropdownSelect
                              sx={{
                                color: "white",
                                ".MuiSelect-icon": {
                                  color: "white",
                                },
                                ".MuiInputBase-input": {
                                  color: "white",
                                },
                                "& .MuiInput-underline:before": {
                                  borderBottomColor: "white",
                                },
                                "& .MuiInput-underline:after": {
                                  borderBottomColor: "white",
                                },
                                "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                                  {
                                    borderBottomColor: "white",
                                  },
                              }}
                              label="Language"
                              list={langList}
                              // list={routing.locales}
                              value={selectedLang}
                              onChange={handleLangChange}
                              placeholder={null}
                              MenuProps={lang_dropdown_menu_props}
                              minWidth={62.5} // you can adjust the minWidth if needed
                            />
                          </MenuItem>

                         
                        
                      </motion.div>
                    </Menu>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>

            {/* desktop version */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                },
                // border: 1,
                // borderColor: "white",
              }}
            >
              {pages.map((page, index) => (
                <Link key={index} className="link" href={page.url}>
                  <motion.div
                  // whileHover={{
                  //   scale: 1.3,
                  //   transition: { duration: 0.3, ease: "easeInOut" },
                  // }}
                  >
                    <Typography
                      // variant="body2"
                      className={`typography`}
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: isNavItemActive(`${page.url}`) ? '#d5b66d' : '#fff',
                        // color: isNavItemActive(`${page.url}`) ? '#cd2d2f' : '#fff',
                        backgroundColor: isNavItemActive(`${page.url}`) ? 'rgba(67, 67, 66, 1)' : '',
                        borderRadius: isNavItemActive(`${page.url}`) ? '5px' : ''
                      }}
                    // sx={{ my : 2, display: "block" }}
                    >
                      {page.title}
                    </Typography>
                  </motion.div>
                </Link>
              ))}
            </Box>

            <Box sx={{ mx: 1.5, flexGrow: 0 }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "white" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>

            <Box sx={{ border:1, display: { lg: "flex", md: "flex", xs: "none" } }}>
              {/* <LangDropdownSelect 
                sx={{
                  color: "white",
                  ".MuiSelect-icon": {
                    color: "white",
                  },
                  ".MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "white",
                  },
                }}
                label="Language"
                // label={t('label')}
                // list={langList}
                // value={selectedLang}
                defaultValue={locale} 
                // onChange={handleLangChange}
                placeholder={null}
                MenuProps={lang_dropdown_menu_props}
                minWidth={62.5} // you can adjust the minWidth if needed
              /> */}

              <LocaleSwitcherSelect 
              sx={{
                  color: "white",
                  ".MuiSelect-icon": {
                    color: "white",
                  },
                  ".MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "white",
                  },
                }}
              defaultValue={locale} 
              // label={t('label')}
              label="Language"
              placeholder={null}
              MenuProps={lang_dropdown_menu_props}
              minWidth={62.5} // you can adjust the minWidth if needed
              >
                 {routing.locales.map((cur) => (
                    <MenuItem key={cur} value={cur}>
                      {t('locale', { locale: cur })}
                    </MenuItem>
                  ))}
              </LocaleSwitcherSelect> 
            </Box>

            {/* right side */}
            <AnimatePresence>
              <Box
                // ref={scope}
                sx={{
                  flexGrow: 0,
                  display: { lg: "none", md: "none" },
                  // marginRight:5,
                  // border: 1,
                  // borderColor: "yellow",
                }}
              >
                <motion.div
                  whileTap={{ scale: 1.25 }}
                  onClick={() => setIsOpen(!isOpen)}
                  style={{
                    background: "rgba(0, 0, 0, 0.2)",
                    border: "none",
                    padding: 2,
                    borderRadius: 5,
                    cursor: "pointer",
                    // borderRadius:'50%',
                    outline: "none",
                  }}
                >
                  <IconButton
                    className="arrow"
                    style={{ transformOrigin: "50% 55%" }}
                    sx={{ display: { lg: "none", md: "none" } }}
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    {isMenuOpen ? (
                      <CloseIcon sx={{ color: "white" }} />
                    ) : (
                      <MenuIcon sx={{ color: "white" }} />
                    )}
                  </IconButton>
                </motion.div>
              </Box>
            </AnimatePresence>
          </Toolbar>
          {/* </motion.div> */}
        </Container>
      </AppBar>
    </>
  );
}

export default ResponsiveAppBar;
