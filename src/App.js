import {
    Avatar,
    Box,
    CssBaseline,
    Divider,
    Drawer,
    IconButton, InputAdornment,
    List,
    ListItem, ListItemButton, ListItemText, Menu, MenuItem, Stack, styled, TextField,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import {useState} from "react";
import {
    AiOutlineMenuUnfold,
    AiOutlineMenuFold,
    AiOutlineDashboard,
    AiFillSetting,
    AiOutlineLogin
} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";
import {IoMdNotifications} from "react-icons/io";
import {blue, blueGrey, deepOrange, grey, indigo, purple, yellow} from "@mui/material/colors";

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function App() {

    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open} sx={{background: "linear-gradient(to right, #7474bf, #348ac7)", zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{mr: 2, ...(open && {display: 'none'})}}
                    >
                        <AiOutlineMenuUnfold/>
                    </IconButton>
                    <Stack sx={{width: "100%"}} direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6" noWrap component="div" sx={{...(open && {visibility: 'hidden'})}}>
                            HRMS
                        </Typography>
                        <TextField
                            id="outlined-start-adornment"
                            placeholder="Search"
                            sx={{m: 1, width: '55ch', bgcolor: "white", borderRadius: "5px"}}
                            size="small"
                            InputProps={{
                                endAdornment: <InputAdornment position="end" sx={{width: "30px"}}>
                                    <IconButton variant="contained"><FiSearch/></IconButton>
                                </InputAdornment>,
                            }}
                        />
                        <Stack direction="row" alignItems="center">
                            <IconButton variant="contained"><IoMdNotifications size={24} color="#FFF"/></IconButton>
                            <Box>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ml: 2}}
                                        aria-controls={menuOpen ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={menuOpen ? 'true' : undefined}
                                    >
                                        <Avatar sx={{width: 32, height: 32, bgcolor: purple[300]}}>M</Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Stack>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={menuOpen}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        >
                            <MenuItem>
                                <Avatar/> My Profile
                            </MenuItem>
                            <MenuItem>
                                <Avatar><AiFillSetting/></Avatar> Account Settings
                            </MenuItem>
                            <Divider/>
                            <MenuItem>
                                <Avatar><AiOutlineLogin/></Avatar> Logout
                            </MenuItem>
                        </Menu>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                PaperProps={{
                    sx:{
                        background: grey[800],
                        color: "white"
                    }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Stack sx={{width: "100%"}} direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6" noWrap component="div">
                            HRMS
                        </Typography>
                        <IconButton onClick={handleDrawerClose}>
                            <AiOutlineMenuFold color={"#FFF"}/>
                        </IconButton>
                    </Stack>
                </DrawerHeader>
                <Divider/>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Stack direction="row" alignItems="center">
                                    <AiOutlineDashboard/>
                                    <Typography sx={{ml: 1}}>Dashboard</Typography>
                                </Stack>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Main open={open} sx={{background: "#f9f9f9", minHeight: "100vh"}}>
                <DrawerHeader/>
                <h1>Hello</h1>
            </Main>
        </Box>
    );
}

export default App;
