"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Drawer,
  Menu,
  MenuItem,
  Tooltip,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useSpring, animated } from "@react-spring/web";

import { usePathname } from "next/navigation";
import {
  AdjustmentsHorizontalIcon,
  Bars4Icon,
  ChevronLeftIcon,
  CurrencyDollarIcon,
  HomeIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Link from "next/link";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import AppProvider from "./context";
import { capitalize } from "../lib/utils";
import { HtmlTooltip } from "../ui/tooltips";

interface NavButtonProps {
  text: string;
  icon: React.ReactNode;
  active: boolean;
  hideText: boolean;
}

const NavButton: React.FC<NavButtonProps> = function ({
  icon,
  text,
  active,
  hideText,
}) {
  const textAnimationProps = useSpring({
    opacity: hideText ? 0 : 1,
    width: hideText ? 0 : 150,
    paddingX: hideText ? 0 : 4,
    reverse: hideText,
  });

  return (
    <ListItemButton
      className={`hover:bg-indigo-600/10 hover:text-indigo-700 duration-300`}
      selected={active}
      sx={{
        flexGrow: 0,
        padding: 1,
        display: "flex",
        "&.Mui-selected": {
          backgroundColor: "rgb(79, 70, 229)",
          color: "white",
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          width: 25,
          height: 25,
          color: "inherit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </ListItemIcon>
      <animated.div
        className={`${hideText && "w-0 overflow-hidden"} text-sm`}
        style={textAnimationProps}
      >
        {text}
      </animated.div>
    </ListItemButton>
  );
};

const navItems = [
  { title: "Loans", icon: <CurrencyDollarIcon height={20} />, path: "loans" },
  {
    title: "Users",
    icon: <UsersIcon height={20} />,
    path: "users",
    submenu: {
      items: [
        {
          title: "Administrators",
          icon: <AdminPanelSettingsIcon />,
          path: "users/administrators",
        },
        {
          title: "Loan Officers",
          icon: <ManageAccountsIcon />,
          path: "users/loan-officers",
        },
        {
          title: "Clients",
          icon: <ContactPageIcon />,
          path: "users/clients",
        },
      ],
    },
  },
  {
    title: "Settings",
    icon: <AdjustmentsHorizontalIcon height={20} />,
    path: "settings",
  },
  { title: "Mail", icon: <InboxIcon height={20} />, path: "mail" },
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

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "white",
    color: "rgba(99, 70, 241)",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "white",
    color: "#b23c17",
  },
  "&.notistack-MuiContent-warning": {
    backgroundColor: "white",
    color: "#ffc107",
  },
  "&.notistack-MuiContent-info": {
    backgroundColor: "white",
    color: "#00e5ff",
  },
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  const [hide, setHide] = React.useState(true);
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const pathName = usePathname();

  const segments = pathName.split("/").slice(1);

  const breadcrumbs = segments.map((segment, idx) =>
    idx === segments.length - 1 ? (
      <Typography component="div" className="text-indigo-700" key={idx}>
        {capitalize(segment)}
      </Typography>
    ) : (
      <Link
        className="hover:underline"
        color="inherit"
        href={`/${segments.slice(0, idx + 1).join("/")}`}
        key={idx}
      >
        {capitalize(segment)}
      </Link>
    )
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider
        Components={{
          success: StyledMaterialDesignContent,
          info: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
          warning: StyledMaterialDesignContent,
        }}
      >
        <AppProvider>
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* ============ Top App Bar ============= */}
            <TopAppBar toggleDrawer={setHide} expandSideNav={hide} />

            <Box className="" sx={{ display: "flex", flexGrow: 1 }}>
              {/* ============ Large Screen ============ */}
              <Box
                sx={{
                  display: isMdOrLarger ? "flex" : "none",
                  flexDirection: "column",
                  p: 1,
                  gap: 1,
                  borderRight: "solid 1px rgb(229, 231, 235)",
                }}
              >
                <Link key={"home-tab"} href={`/dashboard`}>
                  <NavButton
                    text="Home"
                    icon={<HomeIcon height={20} />}
                    active={["/dashboard", "/dashboard/"].includes(pathName)}
                    hideText={hide}
                  />
                </Link>
                {navItems.map((navItem, index) =>
                  navItem.submenu ? (
                    <HtmlTooltip
                      key={index}
                      arrow
                      slotProps={{
                        arrow: {
                          sx: {
                            color: "white",
                          },
                        },
                      }}
                      title={
                        <div className="py-2">
                          {navItem.submenu.items.map((subMenuItem, idx) => (
                            <Link
                              style={{
                                display: "block",
                              }}
                              replace={true}
                              key={`${index}#${idx}`}
                              className="text-indigo-800"
                              href={`/dashboard/${subMenuItem.path}`}
                            >
                              <NavButton
                                text={subMenuItem.title}
                                icon={subMenuItem.icon}
                                active={false}
                                hideText={false}
                              />
                            </Link>
                          ))}
                        </div>
                      }
                      placement="right-end"
                    >
                      <div>
                        <NavButton
                          text={navItem.title}
                          icon={navItem.icon}
                          active={pathName.startsWith(
                            `/dashboard${
                              navItem.path ? "/" + navItem.path : ""
                            }`
                          )}
                          hideText={hide}
                        />
                      </div>
                    </HtmlTooltip>
                  ) : (
                    <Link key={index} href={`/dashboard/${navItem.path}`}>
                      <NavButton
                        text={navItem.title}
                        icon={navItem.icon}
                        active={pathName.startsWith(
                          `/dashboard${navItem.path ? "/" + navItem.path : ""}`
                        )}
                        hideText={hide}
                      />
                    </Link>
                  )
                )}
                <div className="flex-grow"></div>
                <NavButton
                  hideText={hide}
                  text={"Logout"}
                  icon={<LogoutIcon sx={{ height: "20px" }} />}
                  active={true}
                />
              </Box>

              {/* ============ Small Screen ============ */}
              <Drawer
                sx={{
                  position: "relative",
                  display: isMdOrLarger ? "none" : "block",
                }}
                onClose={() => setHide(true)}
                open={!hide}
              >
                <div className="flex justify-betweeen items-center pr-4">
                  <Typography
                    className="p-4 font-extrabold text-indigo-600"
                    variant="h4"
                    component="div"
                  >
                    E-Ventures
                  </Typography>
                  <IconButton onClick={() => setHide(true)}>
                    <XMarkIcon className="text-indigo-600" height={20} />
                  </IconButton>
                </div>

                <div className="flex-grow flex flex-col p-2 gap-2">
                  <Link
                    key={"home-tab"}
                    className="border-gray-200"
                    href={`/dashboard`}
                  >
                    <NavButton
                      text="Home"
                      icon={<HomeIcon height={20} />}
                      active={["/dashboard", "/dashboard/"].includes(pathName)}
                      hideText={hide}
                    />
                  </Link>
                  {navItems.map((navItem, index) =>
                    navItem.submenu ? (
                      <HtmlTooltip
                        key={index}
                        arrow
                        slotProps={{
                          arrow: {
                            sx: {
                              color: "white",
                            },
                          },
                        }}
                        title={
                          <div className="py-2">
                            {navItem.submenu.items.map((subMenuItem, idx) => (
                              <Link
                                style={{
                                  display: "block",
                                }}
                                replace={true}
                                key={idx}
                                className="text-indigo-800"
                                href={`/dashboard/${subMenuItem.path}`}
                              >
                                <NavButton
                                  text={subMenuItem.title}
                                  icon={subMenuItem.icon}
                                  active={false}
                                  hideText={false}
                                />
                              </Link>
                            ))}
                          </div>
                        }
                        placement="right-end"
                      >
                        <div>
                          <NavButton
                            text={navItem.title}
                            icon={navItem.icon}
                            active={pathName.startsWith(
                              `/dashboard${
                                navItem.path ? "/" + navItem.path : ""
                              }`
                            )}
                            hideText={hide}
                          />
                        </div>
                      </HtmlTooltip>
                    ) : (
                      <Link
                        key={index}
                        style={{ width: "100%" }}
                        href={`/dashboard/${navItem.path}`}
                      >
                        <NavButton
                          icon={navItem.icon}
                          text={navItem.title}
                          active={pathName.startsWith(
                            `/dashboard/${navItem.path}`
                          )}
                          hideText={false}
                        />
                      </Link>
                    )
                  )}
                  <div className="flex-grow"></div>

                  <NavButton
                    hideText={false}
                    text={"Logout"}
                    icon={<LogoutIcon sx={{ height: "20px" }} />}
                    active={true}
                  />
                </div>
              </Drawer>
              <div className="flex-grow relative bg-gray-100">
                <div className="vertical-scrollbar absolute inset-y-0 left-0 right-1 flex flex-col">
                  <div className="px-4 py-4 sticky top-0 z-50 bg-gray-100">
                    <Breadcrumbs
                      separator={<NavigateNextIcon fontSize="small" />}
                      aria-label="breadcrumb"
                    >
                      {breadcrumbs}
                    </Breadcrumbs>
                  </div>
                  {children}
                </div>
              </div>
            </Box>
          </Box>
        </AppProvider>
      </SnackbarProvider>
    </LocalizationProvider>
  );
}

function TopAppBar({
  toggleDrawer,
  expandSideNav,
}: {
  expandSideNav: boolean;
  toggleDrawer: (flag: boolean) => void;
}) {
  return (
    <div className="border-b">
      <Toolbar
        sx={{
          display: "flex",
        }}
      >
        <IconButton
          aria-label="open drawer"
          onClick={() => toggleDrawer(!expandSideNav)}
          edge="start"
          sx={{
            color: "rgb(79, 70, 229)",
          }}
        >
          {expandSideNav ? (
            <Bars4Icon height={25} />
          ) : (
            <ChevronLeftIcon height={25} />
          )}
        </IconButton>
        <Typography
          className="p-4"
          variant="h5"
          component="div"
          sx={{ fontWeight: "bolder", color: "rgb(79 70 229)" }}
        >
          E-Ventures
        </Typography>
        <div className="flex flex-grow justify-center">
          <div
            className={`-md:hidden relative flex flex-1 flex-shrink-0 mx-12 max-w-lg`}
          >
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              className="peer block w-full border border-gray-200 py-[9px] pl-10 text-sm outline-2 outline-indigo-700 placeholder:text-gray-500"
              placeholder="Search..."
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            <button className="absolute right-1 bottom-1 top-1 bg-indigo-600 px-4 text-[#fff] font-bold hover:bg-indigo-600/10 hover:text-indigo-700 duration-300">
              Go
            </button>
          </div>
        </div>
        <Box sx={{}}>
          <Tooltip title="Account">
            <IconButton onClick={() => {}} sx={{ p: 0 }}>
              <Avatar
                className="border-2 border-indigo-600 text-indigo-600"
                alt="Wemy Sharp"
                src="/static/images/avatar/2.jpg"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
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
          >
            {accountActions.map((action, index) => (
              <MenuItem
                className="pr-[5em] group hover:text-indigo-600"
                title={action.title}
                key={index}
              >
                <IconButton className="group-hover:text-teal-600">
                  {action.icon}
                </IconButton>
                <Typography textAlign="center">{action.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </div>
  );
}
