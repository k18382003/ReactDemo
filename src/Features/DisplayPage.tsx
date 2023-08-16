import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import {CardContent} from '../Features/CardContent'

export default function DisplayPage() {
    return (
        <>       
            <Card.Group itemsPerRow={3} stackable>
                {CardContent.map((card, i) => (
                    <Card key={i} color="teal" >
                        <Card.Content className="img-block">
                            <Image src={card.imgUrl || require('../Images/logo192.png')} wrapped ui={false}/>
                        </Card.Content>
                        <Card.Content>
                            <Card.Header>{card.header || 'Coming soon'}</Card.Header>
                            <Card.Description>
                                {card.description}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button as={Link} to={card.linkUrl} fluid color="teal">Demo</Button>
                        </Card.Content>              
                    </Card>
                ))}
            </Card.Group>
        </>
    )
}