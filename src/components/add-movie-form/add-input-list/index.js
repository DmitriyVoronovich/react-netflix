import './add-input-list.css'
import InputInfo from "../input-info";

const AddInputList = ({addModuleInput}) => {
    const elements = addModuleInput.map(item => {
        const {id, ...itemProps} = item;
        return (
            <InputInfo
                key={id}
                {...itemProps}/>
        )
    })

    return (
        <form class='add_input_list'>
            {elements}
        </form>
    )
}

export default AddInputList;