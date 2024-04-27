// import { SizeNav } from "../ui/dashboard/side-nav";

// export default async function Layout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="h-screen flex bg-gray-100">
//       <div className="flex">
//         <SizeNav />
//       </div>
//       <div className="grow overflow-auto flex">{children}</div>
//     </div>
//   );
// }

"use client";

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import TuneIcon from "@mui/icons-material/Tune";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import { Menu, MenuItem } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Image from "next/image";
import Link from "next/link";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const navItems = [
  { title: "Loans", icon: <EuroSymbolIcon />, path: "loans" },
  { title: "Clients", icon: <SwitchAccountIcon />, path: "clients" },
  { title: "Settings", icon: <TuneIcon />, path: "settings" },
  { title: "Mail", icon: <AttachEmailIcon />, path: "mail" },
];

const accountActions = [
  {
    title: "Profile",
    path: "profile",
    icon: <AccountCircleIcon />,
  },
  {
    title: "Logout",
    path: "logout",
    icon: <LogoutIcon />,
  },
  {
    title: "Logout",
    path: "logout",
    icon: <LogoutIcon />,
  },
  {
    title: "Logout",
    path: "logout",
    icon: <LogoutIcon />,
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar className="bg-green-800" position="fixed" open={open}>
        <Toolbar className="flex">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="w-full" variant="h6" noWrap component="div">
            Entry Ventures
          </Typography>
          <Box className="" sx={{ flexGrow: 0 }}>
            <Tooltip title="Account">
              <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <Avatar alt="Wemy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              // anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={false}
              // open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
            >
              {accountActions.map((action, index) => (
                <MenuItem
                  className="pr-[5em] group hover:text-green-800"
                  title={action.title}
                  key={index}
                >
                  <IconButton className="group-hover:text-green-800">
                    {action.icon}
                  </IconButton>
                  <Typography textAlign="center">{action.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className="">
          <Image alt="" src="/logo.png" width={(500 / 183) * 60} height={60} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          {navItems.map((navItem, index) => (
            <Link href={navItem.path} key={index}>
              <ListItem
                className="group cursor-pointer hover:bg-green-800 hover:text-white duration-300"
                title={navItem.title}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  className=""
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    className="text-green-800 group-hover:text-white"
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {navItem.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={navItem.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>

        <div className="flex-grow"></div>

        <List>
          <ListItem
            className="group hover:bg-green-800 hover:text-white duration-300"
            title={"Logout"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                className="text-green-800 group-hover:text-white"
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
