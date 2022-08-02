import { useState } from 'react';
import Modal from '../Modal/Modal';
import "./Search_agents.css";


function Search_agents(props) {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isActiveSelector, setIsActiveSelector] = useState(false);
    const [isActiveSelector_2, setIsActiveSelector_2] = useState(false);

    let option = ['Мгновенно', '1 раз в день', 'Отключить'];

    function change_point_1() {
        if (props.isOn_5 === true) {
            props.setIsOn_5(false);
        }
        else {
            props.setIsOn_5(true);
        }
    }

    function change_point_2() {
        if (props.isOn_6 === true) {
            props.setIsOn_6(false);
        }
        else {
            props.setIsOn_6(true);
        }
    }

    function change_point_3() {
        if (props.isOn_7 === true) {
            props.setIsOn_7(false);
        }
        else {
            props.setIsOn_7(true);
        }
    }

    function change_point_4() {
        if (props.isOn_8 === true) {
            props.setIsOn_8(false);
        }
        else {
            props.setIsOn_8(true);
        }
    }

    function change_point_5() {
        if (props.isOn_9 === true) {
            props.setIsOn_9(false);
        }
        else {
            props.setIsOn_9(true);
        }
    }

    function change_point_6() {
        if (props.isOn_10 === true) {
            props.setIsOn_10(false);
        }
        else {
            props.setIsOn_10(true);
        }
    }

    function settingDirect(value) {
        props.setDitect_2(value);
        setIsActiveSelector(false);
    }

    function settingDirect_2(value) {
        props.setDitect_3(value);
        setIsActiveSelector(false);
    }

    function setSelector() {
        if (isActiveSelector === true) {
            setIsActiveSelector(false);
        }
        else {
            setIsActiveSelector(true);
        }
    }

    function setSelector_2() {
        if (isActiveSelector_2 === true) {
            setIsActiveSelector_2(false);
        }
        else {
            setIsActiveSelector_2(true);
        }
    }


    const subcategories_business = props.business.map(
        (b) => (
            <div className='subcategory'>
                {b}
                <div className='close' onClick={ev => props.set_business(b)}></div>
            </div>
        ));

    const subcategories_123 = props.one_23.map(
        (b) => (
            <div className='subcategory'>
                {b}
                <div className='close' onClick={ev => props.set_123(b)}></div>
            </div>
        ));

    const subcategories_seo = props.seo.map(
        (b) => (
            <div className='subcategory'>
                {b}
                <div className='close' onClick={ev => props.set_seo(b)}></div>
            </div>
        ));

    const subcategories_link = props.link.map(
        (b) => (
            <div className='subcategory'>
                {b}
                <div className='close' onClick={ev => props.set_link(b)}></div>
            </div>
        ));

    return (
        <div className='block_search'>
            <p className='name_block'>Поисковые агенты</p>


            <p>Бизнес</p>
            <div className='row row--categ'>
                <div className="row_categ">
                    <div className="block_subcategories">
                        {subcategories_business}
                    </div>
                    <div className='detail' onClick={ev => setIsOpenModal(true)}>
                        Детали
                    </div>
                </div>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_5} onClick={change_point_1}></input>
                    <span class="slider round"></span>
                </label>
                <p className='meaning'>Бесплатные вебинары проходят 1 раз в 2 недели.
                    Вы будете получать 2 письма с напоминанием
                    о предстоящем вебинаре</p>
            </div>

            <p className='categ_name'>123</p>
            <div className='row row--categ'>
                <div className="row_categ">
                    <div className="block_subcategories">
                        {subcategories_123}
                    </div>
                    <div className='detail' onClick={ev => setIsOpenModal(true)}>
                        Детали
                    </div>
                </div>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_6} onClick={change_point_2}></input>
                    <span class="slider round"></span>
                </label>
            </div>

            <p>SEO</p>
            <div className='row row--categ'>
                <div className="row_categ">
                    <div className="block_subcategories">
                        {subcategories_seo}
                    </div>
                    <div className='detail' onClick={ev => setIsOpenModal(true)}>
                        Детали
                    </div>
                </div>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_7} onClick={change_point_3}></input>
                    <span class="slider round"></span>
                </label>
            </div>

            <p>Бурж ссылки</p>
            <div className='row row--categ'>
                <div className="row_categ">
                    <div className="block_subcategories">
                        {subcategories_link}
                    </div>
                    <div className='detail' onClick={ev => setIsOpenModal(true)}>
                        Детали
                    </div>
                </div>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_8} onClick={change_point_4}></input>
                    <span class="slider round"></span>
                </label>
            </div>

            <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />

            <p className='name_block'>Рекламные компании</p>
            <div className='row'>
                <p className='control_parameter'>Строительство домов в Москве
                </p>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_9} onClick={change_point_5}></input>
                    <span class="slider round"></span>
                </label>
                <div className="select">
                    <div className={isActiveSelector ? "arrow active" : "arrow"} onClick={setSelector}></div>
                    {props.direct_2}
                    <div className={isActiveSelector ? "block_option active" : "block_option"}>
                        {option.map((currency => (<div className='option' onClick={ev => settingDirect(currency)}>{currency}</div>)))}
                    </div>

                </div>
            </div>

            <div className='row'>
                <p className='control_parameter'>Строительство домов в Москве
                </p>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_10} onClick={change_point_6}></input>
                    <span class="slider round"></span>
                </label>
                <div className="select">
                    <div className={isActiveSelector_2 ? "arrow active" : "arrow"} onClick={setSelector_2}></div>
                    {props.direct_3}
                    <div className={isActiveSelector_2 ? "block_option active" : "block_option"}>
                        {option.map((currency => (<div className='option' onClick={ev => settingDirect_2(currency)}>{currency}</div>)))}
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Search_agents;