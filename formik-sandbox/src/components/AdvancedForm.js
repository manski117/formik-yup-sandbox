//this is how you do it with formik components
//Formik props are identical to what we passed to the useFormik hook (initial values, onsubmit, validation schema)
//All these things will now be passed through props
//to render children, it will now use a render props pattern (a fn that returns some JSX)
//in the props parameter, we have access to everything the useFormik hook returned

//we don't actually have to link Form to handleSubmit, as it does that automatically. 
//when we submit, it will run our onSubmit function that we passed by default


import { Field, Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) =>{
  console.log('values', values)
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  });
  actions.resetForm();
}

const AdvancedForm = () => {
    

    return (
      //Field will automatically hook up inputs to Formik
      //Field uses name attribute to match with Formik state
      //Field also naturally uses the helper methods as well. 
      <Formik 
        initialValues={{username: '', jobType: '', acceptedTos: false}}
        validationSchema={advancedSchema}
        onSubmit={onSubmit}
      >
        {({isSubmitting}) => (
          <Form>
            <CustomInput 
              label="Username"
              name='username'
              type='text'
              placeholder='Enter the username'
            />
            <CustomSelect 
              label='Job Type'
              name='jobType'
              placeholder='Please select a job'
            >
              <option value="">Please select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Product Manager</option>
              <option value="other">Other</option>
            </CustomSelect>
            <CustomCheckbox 
              type='checkbox'
              name='acceptedTos'
            />
            <button disabled={isSubmitting} type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
  };
  export default AdvancedForm;