import React from "react";

interface DataProps {
    items: {id: string, task: string}[]
};

const Todo: React.FC<DataProps> = (props) => {

    return (
        <React.Fragment>
            {props.items.map(x => <div key={x.id}>{x.task}</div>)}
        </React.Fragment>
    )
};

export default Todo;