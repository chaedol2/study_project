"use client";

import styles from "@/app/(beforeLogin)/_component/signup.module.css";
import {router} from "next/client";

export default function BackButton() {
    const onClickClose = () => {
        router.back();
        // TODO: 뒤로가기가 /home이 아니면 /home으로 보내기
    }
    return (
        <button className={styles.closeButton} onClick={onClickClose}>
            <svg viewBox="0 0 24 24" aria-hidden="true"
                 className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"
                 style={{color: "rgb(239, 243, 244)"}}>
                <g>
                    <path
                        d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
            </svg>
        </button>
    );
}