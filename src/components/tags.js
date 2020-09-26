import React from 'react'

export default function Tags (props) {
    const listItems = [...props.list].map((tag, index) => {
        return <li key={index}>{tag}</li>
    });
    return (
        <ul>
            {listItems}
        </ul>
    )
}