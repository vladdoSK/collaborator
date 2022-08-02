import { useState } from 'react';
import './General_notice.css'

function General_notice(props) {

    const [isActiveSelector, setIsActiveSelector] = useState(false);

    let option = ['Мгновенно', '1 раз в день', 'Отключить'];

    function change_point_1() {
        if (props.isOn_1 === true) {
            props.setIsOn_1(false);
        }
        else {
            props.setIsOn_1(true);
        }
    }

    function change_point_2() {
        if (props.isOn_2 === true) {
            props.setIsOn_2(false);
        }
        else {
            props.setIsOn_2(true);
        }
    }

    function change_point_3() {
        if (props.isOn_3 === true) {
            props.setIsOn_3(false);
        }
        else {
            props.setIsOn_3(true);
        }
    }

    function setSelector(){
        if (isActiveSelector === true) {
            setIsActiveSelector(false);
        }
        else {
            setIsActiveSelector(true);
        }
    }

    function settingDirect(value){
        props.setDitect(value);
        setIsActiveSelector(false);
    }


    return (
        <div className='notices'>
            <p className='name_block'>Общие уведомления</p>
            <div className='row'>
                <p className='control_parameter'>Приветственная серия</p>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_1} onClick={change_point_1}></input>
                    <span class="slider round"></span>
                </label>
                <p className='meaning'>4 полезных и емких письма в течение месяца</p>
            </div>

            <div className='row'>
                <p className='control_parameter'>Образовательные вебинары</p>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_2} onClick={change_point_2}></input>
                    <span class="slider round"></span>
                </label>
                <p className='meaning'>Бесплатные вебинары проходят 1 раз в 2 недели.
                    Вы будете получать 2 письма с напоминанием
                    о предстоящем вебинаре</p>
            </div>

            <div className='row'>
                <p className='control_parameter'>Личные сообщения
                    <div className='info'>i
                        <div className='info_block'>Письма об обновлениях <br></br>и улучшениях платформы</div>
                    </div>
                </p>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_3} onClick={change_point_3}></input>
                    <span class="slider round"></span>
                </label>
                <div className="select">
                    <div className={isActiveSelector ? "arrow active" : "arrow"} onClick={setSelector}></div>
                    {props.direct}
                    <div className={isActiveSelector ? "block_option active" : "block_option"}>
                        {option.map((currency => (<div className='option' onClick={ev => settingDirect(currency)}>{currency}</div>)))}
                    </div>

                </div>
            </div>

        </div>
    );
}

export default General_notice;