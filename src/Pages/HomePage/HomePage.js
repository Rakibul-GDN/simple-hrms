import Page from "../../Layout/Page";
import {Avatar, Grid, Paper, Stack, Typography} from "@mui/material";
import {IoIosPeople, IoIosArrowForward} from "react-icons/io"
import {AiOutlineProject} from "react-icons/ai"
import {FaUserTie, FaAddressCard} from "react-icons/fa"
import {HiViewGridAdd} from "react-icons/hi"
import {GiFamilyTree} from "react-icons/gi"
import {TbReportAnalytics, TbReportMoney} from "react-icons/tb"
import {BsCalendar3, BsFileEarmarkSpreadsheetFill} from "react-icons/bs"
import {ImTree} from "react-icons/im"
import {HiUserAdd} from "react-icons/hi"
import { cyan, green, grey, lightBlue, pink} from "@mui/material/colors";
import {useState} from "react";


const HomePage = () => {
    const[cardHovers, setCardHovers] = useState({card1: 0, card2: 0, card3: 0, card4: 0})
    return (
        <Page title={"Homepage"}>
            <Typography variant="h3" color="#0C1E5B">Welcome Super Admin!</Typography>
            <Typography variant="h5" color="#0F3F62" sx={{mb: 2}}>Dashboard</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Paper elevation={cardHovers.card1} sx={{p: 3}} onMouseOver={() => setCardHovers({card1: 3, card2: 0, card3: 0, card4: 0})} onMouseOut={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 0})}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Avatar variant="rounded" sx={{width: 72, height: 72, background: cyan[600], p: 1.4}}>
                                <FaUserTie size={48}/>
                            </Avatar>
                            <Stack>
                                <Typography variant="h4" color={"0C1E5B"} sx={{textAlign: "right"}}>43</Typography>
                                <Typography variant="h6" color={grey[500]}>Clients</Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={cardHovers.card2} sx={{p: 3}} onMouseOver={() => setCardHovers({card1: 0, card2: 3, card3: 0, card4: 0})} onMouseOut={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 0})}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Avatar variant="rounded" sx={{width: 72, height: 72, background: lightBlue[600], p: 1.4}}>
                                <AiOutlineProject size={48}/>
                            </Avatar>
                            <Stack>
                                <Typography variant="h4" color={"0C1E5B"} sx={{textAlign: "right"}}>108</Typography>
                                <Typography variant="h6" color={grey[500]}>Projects</Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={cardHovers.card3} sx={{p: 3}} onMouseOver={() => setCardHovers({card1: 0, card2: 0, card3: 3, card4: 0})} onMouseOut={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 0})}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Avatar variant="rounded" sx={{width: 72, height: 72, background: green[600], p: 1.4}}>
                                <IoIosPeople size={48}/>
                            </Avatar>
                            <Stack>
                                <Typography variant="h4" color={"0C1E5B"} sx={{textAlign: "right"}}>554</Typography>
                                <Typography variant="h6" color={grey[500]}>Employees</Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper elevation={cardHovers.card4} sx={{p: 3}} onMouseOver={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 3})} onMouseOut={() => setCardHovers({card1: 0, card2: 0, card3: 0, card4: 0})}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Avatar variant="rounded" sx={{width: 72, height: 72, background: pink[600], p: 1.4}}>
                                <ImTree size={48}/>
                            </Avatar>
                            <Stack>
                                <Typography variant="h4" color={"0C1E5B"} sx={{textAlign: "right"}}>64</Typography>
                                <Typography variant="h6" color={grey[500]}>Departments</Typography>
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
            <Typography variant="h6" color="#0F3F62" sx={{mt: 2}}>Quick Actions</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <HiUserAdd size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Add New Client</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <HiViewGridAdd size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Add New Project</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <FaAddressCard size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Add New Employee</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <GiFamilyTree size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Add New Department</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <BsCalendar3 size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Upload Attendance Sheet</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <BsFileEarmarkSpreadsheetFill size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Upload Salary Sheet</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <TbReportMoney size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 18, fontWeight: 500}}>Download Payslip</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper elevation={2} sx={{p: 2, borderRadius: "5px", cursor: "pointer"}}>
                        <Stack direction="row" justifyContent="space-between">
                            <TbReportAnalytics size={24} color="#F57F17"/>
                            <Typography color="#0F3F62" sx={{mx: 2, fontSize: 16, fontWeight: 500, lineHeight: 1.6}}>Download Attendance Report</Typography>
                            <IoIosArrowForward color="#0F3F62" size={24}/>
                        </Stack>
                    </Paper>
                </Grid>

            </Grid>
        </Page>
    )
}
export default HomePage;