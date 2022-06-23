import {Box} from "@mui/material";
import {Helmet} from "react-helmet-async";

const Page = ({children=(<h4>Please add some children</h4>), title = "", metadata=[]}) => {
    return(
        <Box>
            <Helmet>
                <title>{`${title} | HRMS`}</title>
                {metadata.map((meta, index) => (
                    meta?.property ? <meta key={index} property={meta?.name} content={meta?.content} /> : <meta key={index} name={meta?.name} content={meta?.content} />
                ))}
            </Helmet>
            {children}
        </Box>
    )
}

export default Page;