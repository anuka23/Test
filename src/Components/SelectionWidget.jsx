import React, { useState } from 'react'


export const SelectionWidget = () => {
    const [ items, setItems] = useState ([
        {value : "Red", id:1},
        {value : "Blue", id:1},
        {value : "Green", id:1},
    ]);
      
    const handleClick = (items) =>{
        setItems ([]);
    }

  return (
    <div>
            {
                items.map(items => 
                    <div key = {items.id} onClick = {() => handleClick(items)}>{items.value}</div>)
            }
    </div>
  )
}
