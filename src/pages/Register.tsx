import React, { useState } from "react";
import FormLayout from "common/components/templates/FormLayout";
import Input from "common/components/atoms/Input";
import Text from "common/components/atoms/Text";
import './Register.scss';
import Button from "common/components/atoms/Button";
import axios from "axios";
import qs from 'qs';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const validatePassword = (val: string) =>
    /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/.test(val);
  const validateName = (val: string) => /^[A-Za-z ]+$/.test(val);
  const validatePhone = (val: string) => /^[0-9]{10}$/.test(val);
  const validateAddress = (val: string) => val.trim().length > 0;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    
    if (
      !validateEmail(email) ||
      !validatePassword(password) ||
      !validateName(name) ||
      !validatePhone(phone) ||
      !validateAddress(address)
    ) {
      setEmailError(!validateEmail(email) ? 'Invalid email format' : '');
      setPasswordError(!validatePassword(password) ? 'Password must have 1 capital, 1 symbol & 8+ chars' : '');
      setNameError(!validateName(name) ? 'Name should contain only letters' : '');
      setPhoneError(!validatePhone(phone) ? 'Phone must be 10 numeric digits' : '');
      setAddressError(!validateAddress(address) ? 'Address cannot be empty' : '');
      return;
    }

    try {
      const payload = qs.stringify({ email, password, name, phone, address });

      const { data } = await axios.post(
        'https://asia-northeast1-willeder-official.cloudfunctions.net/api/auth/register',
        payload,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (data?.err) {
        console.log(data?.err);
      } else {
        console.log('Success:', data);
        toast.success('Registration Success!, Please Login')
        navigate('/login')
      }
    } catch (err: any) {
      if (err.response) {
        console.log("Error data:", err.response.data);
        console.log("Status:", err.response.status);
      } else {
        console.log("Error:", err.message);
      }
    }
  };

  return (
    <FormLayout>
      <div className="form-box">
        <div>
          <Text className="heading">Register</Text>
        </div>
        <form
          style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
          onSubmit={handleSubmit}
        >
          <Text className="inputlabel">Email</Text>
          <Input
            onChange={(e) => {
              const val = e.target.value;
              setEmail(val);
              setEmailError(validateEmail(val) ? '' : 'Invalid email format');
            }}
            value={email}
            className="register-input"
            placeholder="Enter your e-mail address"
          />
          {emailError && <Text style={{ color: 'red' }}>{emailError}</Text>}

          <Text className="inputlabel">Password</Text>
          <Input
            type="password"
            onChange={(e) => {
              const val = e.target.value;
              setPassword(val);
              setPasswordError(
                validatePassword(val)
                  ? ''
                  : 'Password must have 1 capital, 1 symbol & 8+ chars'
              );
            }}
            value={password}
            placeholder="Enter your password"
          />
          {passwordError && <Text style={{ color: 'red' }}>{passwordError}</Text>}

          <Text className="inputlabel">Name</Text>
          <Input
            onChange={(e) => {
              const val = e.target.value;
              setName(val);
              setNameError(validateName(val) ? '' : 'Name should contain only letters');
            }}
            value={name}
            placeholder="Enter your name"
          />
          {nameError && <Text style={{ color: 'red' }}>{nameError}</Text>}

          <Text className="inputlabel">Address</Text>
          <Input
            onChange={(e) => {
              const val = e.target.value;
              setAddress(val);
              setAddressError(validateAddress(val) ? '' : 'Address cannot be empty');
            }}
            value={address}
            placeholder="Enter your address"
          />
          {addressError && <Text style={{ color: 'red' }}>{addressError}</Text>}

          <Text className="inputlabel">Phone Number</Text>
          <Input
            onChange={(e) => {
              const val = e.target.value;
              setPhone(val);
              setPhoneError(validatePhone(val) ? '' : 'Phone must be 10 numeric digits');
            }}
            value={phone}
            placeholder="Enter your phone number"
          />
          {phoneError && <Text style={{ color: 'red' }}>{phoneError}</Text>}

          <Button type="submit">
            <Text className="submitbtn">Submit</Text>
          </Button>
        </form>
      </div>
    </FormLayout>
  );
};

export default Register;
