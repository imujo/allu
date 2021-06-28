import React, { useContext, useState } from 'react'
import {BackendContext} from '../../State/BackendState'

function Tabs() {

    const {tabSelectedGlobal} = useContext(BackendContext);
    const [, settabSelected] = tabSelectedGlobal;

    const [readSelected, setreadSelected] = useState(1);
    const [listenSelected, setlistenSelected] = useState(0);


    const tabClick = (tab) => {
        if (tab === 'read'){
            settabSelected('read')
            setreadSelected(1)
            setlistenSelected(0)
        }else{
            settabSelected('listen')
            setlistenSelected(1)
            setreadSelected(0)
        }
    }
    
    return (
        <div className="tabsDiv">
            <h5 onClick={() => tabClick('read')} className={readSelected ? 'selectedTab' : 'notselected'} >Read</h5>
            <h5 onClick={() => tabClick('listen')} className={listenSelected ? 'selectedTab' : 'notselected'} >Listen</h5>
        </div>
    )
}

export default Tabs
