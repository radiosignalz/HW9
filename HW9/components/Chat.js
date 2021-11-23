
import {IconButton, ListItem, ListItemSecondaryAction, ListItemText} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from "react-router-dom"
import propTypes from 'prop-types'


const useStyles=makeStyles((theme)=>({
    chatPosition :{
        display:'flex',
        justifyContent:'space-between',
        alignItems:"center",
        paddingLeft: theme.spacing(1),

    },


}));

export const Chat = ({name,id,onClick}) => {
    const classes=useStyles()
    return (
        <ListItem component={Link} to={`/chats/${id}`} className={classes.chatPosition}>
            <ListItemText>{name}</ListItemText>

            <ListItemSecondaryAction>
                <IconButton onClick={onClick} edge={"end"}>
                    Delete
                </IconButton>
            </ListItemSecondaryAction>

        </ListItem>
    );
};

Chat.propTypes={
    id:propTypes.string,
    name:propTypes.string,
}