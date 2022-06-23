import {grey} from "@mui/material/colors";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Stack, styled, Typography} from "@mui/material";
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
                    background: grey[800],
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
                                <AiOutlineDashboard/>
                                <Typography sx={{ml: 1}}>Dashboard</Typography>
                            </Stack>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}
export default Sidebar;