import React from "react"
import IconButton from "../template/iconButton"
import "../template/custom.css"

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                    onClick = {() => props.handleAsDone(todo)}></IconButton>
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                    onClick = {() => props.handleMarkAsPending(todo)}></IconButton>
                     <IconButton style="danger" icon="trash-o" hide={todo.done && !todo.done}
                    onClick = {() => props.handleMarkAsRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )

}