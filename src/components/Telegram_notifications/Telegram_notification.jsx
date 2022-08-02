import React from "react";
import './Telegram_notification.css'
import { useState } from 'react';

const Telegram_notification = (props) => {

    function change_point_1() {
        if (props.isOn_11 === true) {
            props.setIsOn_11(false);
        }
        else {
            props.setIsOn_11(true);
        }
    }

    return (
        <div className='notification notification--teleg'> 
            <p className='name_block'>Уведомления по Телеграму</p>
            <div className='row'>
                <p className='control_parameter'>Новости</p>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_11} onClick={change_point_1}></input>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default Telegram_notification;