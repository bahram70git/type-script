import React from "react";

interface DataProps {
    items: {id: string, task: string}[];
    onRemove: (e: string) => void
};

const Todo: React.FC<DataProps> = ({items, onRemove}) => {

    return (
        <React.Fragment>
            {items.map(x => <div key={x.id}>
                {x.task}
                <button onClick={() => onRemove(x.id)}>Remove</button>
            </div>)}
        </React.Fragment>
    )
};

export default Todo;