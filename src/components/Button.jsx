import React from 'react'

function Buttons({ button , filter }) {
    return (
        <div className="buttons">
            {
                button.map((cat, idx)=>{
                    return <button key={idx} type="button" onClick={()=> filter(cat)} className="btn">{cat}</button>
                })
            }
        </div>
    )
}

export default Buttons
