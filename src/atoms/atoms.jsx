import { atom } from "recoil";

export const nameState = atom({
    key : 'nameState',
    default : '',
})

export const inputState = atom({
    key:"inputState",
    default : "filling",
})

export const tldState = atom({
    key: 'tldState',
    default :'bh3',
})
