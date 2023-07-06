import { Divider, Header, Icon } from "semantic-ui-react";

export default function NavBar() {
    return (
        <>
            <Header as='h2' icon size="small" textAlign='center' style={{marginTop:10}}>
                <a href="/">
                    <Icon name='react' color="blue" circular/>
                </a>
                <Header.Content>React Components Demo</Header.Content>
            </Header>
            <Divider />
        </>
    )
}