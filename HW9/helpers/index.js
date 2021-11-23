import {nanoid} from 'nanoid'
export const compareById=(targetId)=>(item)=>item.id===targetId;
export const createMessage=(author,text)=>({
    author,text,
})
export const createChat=(name)=>({
    name,

})

export const mapMessageSnapshotToMessage =(snapshot)=>({
    ...snapshot.val(),
    id:snapshot.key,
})

export const mapChatSnapshotToChat =(snapshot)=>({
    ...snapshot.val(),
    id:snapshot.key,
})



