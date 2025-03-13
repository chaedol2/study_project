import {create} from "zustand/react";
import {Post} from "@/model/Post";

interface ModalState {
    mode: 'new' | 'comments';
    data: Post | null;
    setMode(mode: 'new' | 'comments'): void;
    setData(data: Post): void;
    reset(): void;
}

export const useModalStore = create<ModalState>(((set)=>({
    mode: 'new',
    data: null,
    setMode(mode) {
        set({mode});
    },
    setData(data){
        set({data});
    },
    reset(){
        set({
            mode: 'new',
            data: null,
        })
    }
})))