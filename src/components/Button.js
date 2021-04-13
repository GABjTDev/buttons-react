import React from 'react'

export const Button = ({title, value, clase}) => {

    return (
        <div className="box-btn">
            <p>{title}</p>

            <button className={clase}>
                { value }
            </button>
        </div>
    )
}
