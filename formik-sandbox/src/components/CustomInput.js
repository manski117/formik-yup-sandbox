//...props becomes a props object with all of the remaining properties
//then spread in those props under the input tag

//import useField hook to let this component have access to formik helpers and state
import { useField } from "formik";

const CustomInput = ({label, ...props}) => {
    const [field, meta, helpers] = useField(props);
    //you must now spread your field obj to spread your helper functions to input so it can be connected to formik

    console.log('field', field);
    console.log('meta', meta);

    return (
        <>
          <label>{label}</label>
          <input 
            {...field} 
            {...props}
            className={meta.touched && meta.error ? 'input-error' : ''}
            />
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        
        </>
    )
}

export default CustomInput;