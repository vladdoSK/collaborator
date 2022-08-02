import React from "react";
import './Footer.css'
import { useState } from 'react';

const Footer_btn = (props) => {

    const [isOpenSure, setIsOpenSure] = useState(false);

    const openSure =() =>{
        setIsOpenSure(true);
    }

    const closeModal =() =>{
        setIsOpenSure(false);
    }

    const yes_funct =() =>{
        setIsOpenSure(false);
        alert("Вітаємо");
    }

    return (
        <div className="btn_footer">
            <button className="btn_default" onClick={props.default_btn}>По умолчанию</button>
            <button className="btn_save" onClick={openSure}>Сохранить изменения</button>
        
            <div className={isOpenSure ? "modal active" : "modal"}>
                <div className="modal_content">
                    <h1>Ви впевнені?</h1>

                    <div className="btn_footer">
                        <button className="btn_yes_no" onClick={yes_funct}>Так</button>
                        <button className="btn_yes_no" onClick={closeModal}>Ні</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer_btn;