import Page from "../../Layout/Page";

const metaData = [
    {
        name: "twitter:card",
        content: "summary_large_image",
        property: false
    },
    {
        name: "twitter:image",
        content: "logo512.png",
        property: false
    },
    {
        name: "twitter:title",
        content: "HRMS System Designed With React",
        property: false
    },
    {
        name: "twitter:creator",
        content: "Rakibul Hasan",
        property: false
    },
    {
        name: "twitter:site",
        content: "Rakibul Hasan",
        property: false
    },
    {
        name: "twitter:description",
        content: "A simple Human Resource Management System designed with react to learn and test my skills",
        property: false
    },
    {
        name: "og:type",
        content: "website",
        property: true
    },
    {
        name: "og:url",
        content: "www.google.com",
        property: true
    },
    {
        name: "og:title",
        content: "HRMS System Designed With React",
        property: true
    },
    {
        name: "twitter:description",
        content: "A simple Human Resource Management System designed with react to learn and test my skills",
        property: true
    },
    {
        name: "og:image",
        content: "logo512.png",
        property: true
    },
]

const HomePage = () => {

    return (
        <Page title={"Homepage"} metadata={metaData}>
            <h1>Hello From Homepage</h1>
        </Page>
    )
}
export default HomePage;