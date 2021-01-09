import React from 'react'
import bean_eater from "../../assets/images/loading.gif"

function Loading() {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center text-center h-100vh">
            <img src={bean_eater} />
        </div>
    )
}

export default Loading
