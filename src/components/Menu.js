import React from 'react'
import { AiOutlineMenu ,AiOutlinePlusCircle, AiOutlineUnorderedList } from 'react-icons/ai'
import { Fab, Action } from 'react-tiny-fab'
import { useHistory } from 'react-router-dom'

function Menu() {
    const history = useHistory();

    return (
        <Fab icon={<AiOutlineMenu />}>
            <Action text="Spendings" onClick={() => history.push("/spendings")}><AiOutlineUnorderedList /></Action>
            <Action text="Add Spending" onClick={() => history.push("/spendings/add")}><AiOutlinePlusCircle /></Action>
        </Fab>
    )
}

export default Menu
