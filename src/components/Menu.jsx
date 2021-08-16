import React from 'react'

function Menu({ menuItem }) {
    return (
        <div className="itemSection">
            {
                menuItem.map((item) => (
                    <div className="itemContainer" key={item.id}>
                        <div className="item">
                            <img src={item.image} alt="" />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Menu
