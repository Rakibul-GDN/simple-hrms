import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Stack, Typography} from "@mui/material";
import {AiOutlineDashboard} from "react-icons/ai";




const Sidebar = ({drawerWidth, open, DrawerHeader}) => {
    return(
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
                    background: "#FFF",
                    color: "white"
                }
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>

            </DrawerHeader>
            <Divider/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText>
                            <Stack direction="row" alignItems="center">
                                <AiOutlineDashboard color={"#0F3F62"} size={22}/>
                                <Typography variant="subtitle1" sx={{ml: 1, fontSize: 20}} color="#0F3F62">Dashboard</Typography>
                            </Stack>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}
export default Sidebar;