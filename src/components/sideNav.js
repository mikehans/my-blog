import React from 'react'
import Tags from './tags'
import Archive from './archive'

export default function SideNav() {
    return (
        <aside className="additionalNav">
            <Tags />
            <Archive />
        </aside>
    )
}
