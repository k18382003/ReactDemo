import { Divider, Header, Icon } from "semantic-ui-react";

export default function NavBar() {
    return (
        <>
            <Header icon size="small" textAlign='center' style={{marginTop:10}}>
                <a href="/">
                    <Icon name='react' color="blue" circular/>
                </a>
                <Header.Content as='h2' style={{
                    marginTop: '5px', color: '#000080', fontFamily: 'Comic Sans MS'}}>React Components Demo</Header.Content>
            </Header>
            <Divider />
        </>
    )
}