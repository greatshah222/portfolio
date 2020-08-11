import React, { useState } from 'react';
import { useForm } from '../Shared/Hooks/UseForm';
import classes from '../Shared/Input/Input.module.css';
import logocontact from '../Assets/Images/contact.svg';
import Input from '../Shared/Input/Input';
import axios from 'axios';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from '../Shared/Validation/Validator';
import Button from '../Shared/Button/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
function Contactme() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [state, InputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      message: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios({
        method: 'POST',
        data: {
          email: state.inputs.email.value,
          message: state.inputs.message.value,
        },
        url: `${process.env.REACT_APP_BACKEND_URL}/email`,
      });

      await toast.success('Thankyou for the Message');
      setLoading(false);
      history.push('/');
    } catch (error) {
      await toast.error(error.response.data.error.response);
      console.log(error);
      console.log(error.response.data.error.response);
      setLoading(false);
    }
  };

  return (
    <div className={classes.formPrimary}>
      <div className={classes.formSecondary}>
        <img src={logocontact} alt='' />

        <form onSubmit={formSubmitHandler} className={classes.form}>
          {/* // formheader for line after h2 and font size */}
          <h2 className={classes.formHeader}>Contact Me</h2>
          <Input
            id='email'
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
            id='message'
            label='Message'
            placeholder='Enter Your Message'
            type='text'
            errorText='please enter a '
            elements='input1'
            iconName='inbox'
            validators={[VALIDATOR_REQUIRE()]}
            onInput={InputHandler}
          />
          <Button btnType='login' disabled={!state.isValid || loading}>
            {loading ? 'Sending....' : 'Send'}
          </Button>
          <hr style={{ marginTop: '40px' }} />
        </form>
      </div>
    </div>
  );
}

export default Contactme;
