import {chatsRef} from "../../API/firebase";
import {mapChatSnapshotToChat} from "../../helpers"


export const CREATE_CHAT = 'CREATE_CHAT'
export const SET_CHATS ='SET_CHATS'
export const REMOVE_CHAT = 'REMOVE_CHAT'

export const addChat = (chat) => ({
    type: CREATE_CHAT,
    payload: chat,
})
export const setChats = (chats) => ({
    type: SET_CHATS,
    payload: chats,
})
export const removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    payload: chatId,
})
export const removeChatWithThunk=(chatId)=>(dispatch)=>{
    chatsRef.child(chatId).remove(()=>{
        dispatch(removeChat(chatId))
    });
}

export const addChatWithThunk=(chat)=>()=>{
   chatsRef.push(chat);

}
export const onTrackingAddChatWithThunk=(dispatch)=>{
    chatsRef.on("child_added",(snapshot)=>{
    dispatch(addChat(mapChatSnapshotToChat(snapshot)))
})

}
export const offTrackingAddChatWithThunk=()=>()=>{
    chatsRef.off("child_added");

}
export const onTrackingRemoveChatWithThunk=(dispatch)=>{
    chatsRef.on("child_removed",(snapshot)=>{
        dispatch(removeChat(snapshot.key))
    });

}

export const offTrackingRemoveChatWithThunk=()=>{
    chatsRef.off("child_removed")


}

