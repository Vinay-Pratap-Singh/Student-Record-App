const CreateRecord = (props) => {
    console.log(props.element.name);
    console.log(props.element.dep);
    console.log(props.element.dob);
    console.log(props.element.gender);
    return (
        <>
            <tr key={props.index} className="flex gap-4 px-4 items-center justify-between text-center font-semibold py-1">
                <td className="w-1/4 border bg-cyan-600">{props.element.name}</td>
                <td className="w-1/4 border bg-cyan-600">{props.element.dep}</td>
                <td className="w-1/4 border bg-cyan-600">{props.element.dob}</td>
                <td className="w-1/4 border bg-cyan-600">{props.element.gender}</td>
            </tr>   
        </>
    );
}
export default CreateRecord;