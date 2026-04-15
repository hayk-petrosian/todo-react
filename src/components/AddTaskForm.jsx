import Field from "./field"
import Button from "./Button"

const AddFormTask = (props) => {
    const {
        addTask,
    } = props

    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                className="todo__field"
                label="New task title"
                id="new-task"
            />
            <Button type="submit">Add</Button>
        </form>
    )
}

export default AddFormTask