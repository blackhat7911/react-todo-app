import React from 'react';

function Form({todos}) {

    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        todos(value);
        setValue("");
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit} className="form">
                <input 
                    type="text" 
                    placeholder="todo here..." 
                    value={value} 
                    className="form-control" 
                    onChange={e => setValue(e.target.value)}
                />     
            </form>
        </div>
    )
}

export default Form;
