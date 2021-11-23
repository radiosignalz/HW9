import {Card,Form,CardImg} from "react-bootstrap";
import {CardContent} from "@material-ui/core";

export const Figure = ({img}) => {
    return (
        <Card>
            {/*<CardImg>{img?.map(({id, text, img})=>(<CardContent key={id}><Form img={img} id={id} label={text}/></CardContent>))}</CardImg>*/}
        </Card>
    );
};

