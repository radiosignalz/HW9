import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getChatList} from "../store/chats/selectors";
import {createChat} from "../helpers";
import {
    removeChat,
    addChat,
    addChatWithThunk,
    removeChatWithThunk,
    onTrackingWithThunk,
    onTrackingRemoveChatWithThunk,
    onTrackingAddChatWithThunk,
    offTrackingAddChatWithThunk,
    offTrackingRemoveChatWithThunk
} from "../store/chats/action";
import {removeMessagesByChatIDWithThunk} from "../store/messages/action";



export const withChats = (Component) => {
    return (props)=>{
        const chats=useSelector(getChatList);
        const dispatch=useDispatch();

        const onCreateChat=useCallback(()=>{
            dispatch(addChatWithThunk(createChat('chat name')))
        },[]);

        const onDeleteChat = useCallback((chatId) => {
            dispatch(removeChatWithThunk(chatId))
            dispatch(removeMessagesByChatIDWithThunk(chatId))},[])

        useEffect(()=>{
            dispatch(onTrackingAddChatWithThunk);
            dispatch(onTrackingRemoveChatWithThunk);

            return ()=>{
                dispatch(offTrackingAddChatWithThunk);
                dispatch(offTrackingRemoveChatWithThunk())
            }
        },[])


        return <Component
            {...props} chats={chats} onCreateChat={onCreateChat} onDeleteChat={onDeleteChat}
        />


        }

};

