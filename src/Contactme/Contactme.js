import React from 'react';
import { useForm } from '../Shared/Hooks/UseForm';
import classes from '../Shared/Input/Input.module.css';
import logocontact from '../Assets/Images/logo_sign.svg';
import Input from '../Shared/Input/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from '../Shared/Validation/Validator';
import Button from '../Shared/Button/Button';
function Contactme() {
  const [state, InputHandler] = useForm(
    {
      Email: {
        value: '',
        isValid: false,
      },
      Message: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const formSubmitHandler = () => {};
  return (
    <div className={classes.formPrimary}>
      <div className={classes.formSecondary}>
        <img src={logocontact} alt='' />

        <form onSubmit={formSubmitHandler} className={classes.form}>
          {/* // formheader for line after h2 and font size */}
          <h2 className={classes.formHeader}>Contact Me</h2>
          <Input
            id='Email'
            label='EMAIL'
            placeholder='Enter Your Email'
            type='text'
            errorText='please enter a valid '
            elements='input'
            iconName='user'
            validators={[VALIDATOR_EMAIL()]}
            onInput={InputHandler}
          />{' '}
          <Input
            id='Message'
            label='Message'
            placeholder='Enter Your Message'
            type='text'
            errorText='please enter a '
            elements='input1'
            iconName='inbox'
            validators={[VALIDATOR_REQUIRE()]}
            onInput={InputHandler}
          />
          <Button btnType='login' disabled={!state.isValid}>
            Send
          </Button>
          <hr style={{ marginTop: '40px' }} />
        </form>
      </div>
    </div>
  );
}

export default Contactme;
