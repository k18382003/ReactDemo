import NavBar from '../Layout/NavBar'
import { Container } from 'semantic-ui-react';
import { Outlet } from 'react-router-dom';
import DisplayPage from '../Features/DisplayPage';


function App() {

    return (
        //Need to have <> </> to let react know its fragment = <React.fragment>
        <>
            <>
                <NavBar />
                <Container style={{ marginTop: '5em' }} >
                    <Outlet />
                </Container>
            </>
        </>
    );
}

export default App;

