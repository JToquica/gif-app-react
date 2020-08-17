import React from 'react'

export const GifGridItem = ({title, url}) => {
    return (
        <div className="card mb-3" style={{width: 18+ 'rem'}}>
            <img src={url} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    )
}