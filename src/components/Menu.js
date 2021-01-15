import React from 'react'
import { AiOutlineMenu ,AiOutlinePlusCircle } from 'react-icons/ai'
import { Fab, Action } from 'react-tiny-fab'
import { useHistory } from 'react-router-dom'

function Menu() {
    const history = useHistory();

    const showAddSpendingHandler = () => {
        history.push("/spendings/add")
    }
    return (
        <Fab icon={<AiOutlineMenu />}>
            <Action text="Add Spending" onClick={showAddSpendingHandler}><AiOutlinePlusCircle /></Action>
        </Fab>
    )
}

export default Menu
