This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```jsx
<AppBar className="bg-teal-800" position="fixed" open={open}>
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
            className="pr-[5em] group hover:text-teal-800"
            title={action.title}
            key={index}
          >
            <IconButton className="group-hover:text-teal-800">
              {action.icon}
            </IconButton>
            <Typography textAlign="center">{action.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  </Toolbar>
</AppBar>
```
