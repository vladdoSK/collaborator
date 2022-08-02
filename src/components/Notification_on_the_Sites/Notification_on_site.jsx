import "./Notification_on_site.css";


function Notification_on_site(props) {

    function change_point_1() {
        if (props.isOn_4 === true) {
            props.setIsOn_4(false);
        }
        else {
            props.setIsOn_4(true);
        }
    }

    return (
        <div className='notification'> 
            <p className='name_block'>Уведомление по Сайтам</p>
            <div className='row'>
                <p className='control_parameter'>Новости</p>
                <label class="switch">
                    <input type="checkbox" checked={props.isOn_4} onClick={change_point_1}></input>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default Notification_on_site;