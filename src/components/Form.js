const Form = () => {
    return (
        <div className="input">

            <input placeholder="Type a new todo" type="text" id="todo" name="todo"/>
            <input type="submit" value="Submit" />
        </div>
    )
}

export default Form;