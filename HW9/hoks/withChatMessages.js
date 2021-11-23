import React, {useEffect} from 'react';
import {useParams,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getChatMessagesListById} from "../store/messages/selectors";
import {offTrackingAddMessageWithThunk, onTrackingAddMessageWithThunk, offTrackingRemoveMessageWithThunk,onTrackingRemoveMessageWithThunk} from "../store/messages/action";
import {USER_AUTHOR} from "../constants/authors";
import {hasChatById} from "../store/chats/selectors";
import {getUserId} from "../store/user/reducers";
import {createMessage} from "../helpers";
import {
   addMessageWithThunk
} from "../store/messages/action";




export const withChatMessages = (Component) => {
    return (props) => {
        const {chatId} = useParams();
        const dispatch = useDispatch();
        const userId = useSelector(getUserId)
        const messageList = useSelector(getChatMessagesListById(chatId));
        const hasChat = useSelector(hasChatById(chatId));

        const onSendMessage = (text) => {
            const message=createMessage(userId,text)
            dispatch(addMessageWithThunk(message, chatId))}

        useEffect(()=>{
            dispatch(onTrackingAddMessageWithThunk(chatId))
            dispatch(onTrackingRemoveMessageWithThunk(chatId))


            return ()=>{
                dispatch(offTrackingAddMessageWithThunk(chatId))
                dispatch(offTrackingRemoveMessageWithThunk(chatId))
            }
        },[chatId])

        return <Component
            {...props}
            messageList={messageList}
            hasChat={hasChat}
            onSendMessaage={onSendMessage}
        />

    }

}
