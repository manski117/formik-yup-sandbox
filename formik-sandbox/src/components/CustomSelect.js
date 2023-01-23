//this is very similar to custominput component, only with a select tag instead of input
import { useField } from "formik";

const CustomSelect = ({label, ...props}) => {
    const [field, meta, helpers] = useField(props);
    //you must now spread your field obj to spread your helper functions to input so it can be connected to formik


    return (
        <>
          <label>{label}</label>
          <select 
            {...field} 
            {...props}
            className={meta.touched && meta.error ? 'input-error' : ''}
            />
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        
        </>
    )
}

export default CustomSelect;