import React from 'react'

const Notification = ({ message }) => {
    if (message === null) return null

    const style = {
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px 5px 10px 5px'
    }

    let colorStyle = null
    message.type === 'error' ? colorStyle = { ...style, color: 'red' } : colorStyle = { ...style, color: 'green' }

    return <div style={colorStyle}>{message.text}</div>

}

export default Notification