import './Form.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';



const Formulario = () => {

  const [sendForm, setSendForm] = useState (false);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        validate= {(values)=>{
          let errors ={}
          if(!values.name){
            errors.name = 'Please entrer a name'
          }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
            errors.name = 'Name only accept letters and spaces'
          }

          if(!values.email){
            errors.email = 'Please entrer an e-mail address'
          }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            errors.email = 'Please provide a correct e-mail account'
          }

          return errors;
        }}
        onSubmit={(values, {resetForm})=>{
          resetForm();
          setSendForm (true);
          setTimeout (()=> setSendForm(false), 2000);
          console.log(values);
          console.log ('Formulario enviado');
        }}
      >
        {({errors})=> (
  
          <Form className="formulario" id='work'>
            <h2>Let's Work Together</h2>
            <div>
              <label htmlFor="nombre">Name</label>
              <Field 
                type='text' 
                id='name' 
                name="name" 
                placeholder='Your Name' 
              />
              <ErrorMessage name='name' component={()=> (<div className='error'>{errors.name}</div>)}/>
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <Field 
                type='text' 
                id='email' 
                name="email"
                placeholder='Your e-mail address'
              />
              <ErrorMessage name='email' component={()=> (<div className='error'>{errors.email}</div>)} />
            </div>
            <div>
              <Field name='message' as='textarea' placeholder='Your Message' />
            </div>
            <button type="submit">Send</button>
            {sendForm && <p className='exito'>Thanks for your message </p>}
          </Form>
        )}
      </Formik> 
    </>
  );
}
export default Formulario;