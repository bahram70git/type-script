import React, {useRef} from "react";

interface TodoProps {
    onAdd: (e: string) => void
}

// const NewTodo: React.FC<{onAdd: (e: string) => void}> = (props) => {   // Both types are valid
const NewTodo: React.FC<TodoProps> = ({onAdd}) => {
    const refHandler = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd(refHandler.current!.value)
    };

    return (
        <form onSubmit={submitHandler}>
            <input type='text' placeholder="Enter new todo" ref={refHandler} />
            <button type="submit">+ADD</button>
        </form>
    )
};

export default NewTodo