import React from 'react'
import "./List.css";
import { BsTrash } from "react-icons/bs";
import FlipMove from 'react-flip-move';


function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className='list' key={item.key}>
            <p>
                <input type='text' id={item.key} value={item.text} onChange={(e) => {
                    props.setUpDate(e.target
                        .value, item.key)
                }} />
                <span>
                    <BsTrash className='icon' icon="trash" onClick={() => props.deleteItem(item.key)} />
                </span></p>
        </div>
    })
    return (
        <div>
            <FlipMove duration={300} easing='ease-in-out'>
                {listItems}
            </FlipMove>
        </div>
    )
}

export default ListItems;