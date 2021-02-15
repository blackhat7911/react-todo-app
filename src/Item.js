import React from 'react';

function Item({title, index, completeTodo, removeTodo}) {
    return (
        <div className="item">
            <div className="list-group-item" style={{ textDecoration: title.isCompleted ? "line-through" : "" }}>
                {title} 
                <div>
                    <button className="btn btn-success" onClick={() => completeTodo(index)}>
                    Complete
                    </button>
                    <button className="btn btn-danger" onClick={() => removeTodo(index)}>
                        x
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Item;
