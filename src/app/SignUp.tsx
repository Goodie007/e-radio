'use client'
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import './radio.css'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../components/modules/authAction';
import { ClipLoader } from 'react-spinners';
import Link from 'next/link';


export default function SignUp(){
    const { register, handleSubmit } = useForm();
    const [ data, setData ] = useState("");
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.auth
    )

    console.log(loading, 'hello')

    const dispatch = useDispatch()

    const submitAction = (data:any) => {
        if(data.password !== data.confirmPassword){
            alert('Password Mismatched')
        }
        dispatch(registerUser(data))
        console.log("hello")
    }

    const Title = styled.h1`
        text-align: center;
        padding-top: 0rem;
        font-size: 4em;
    `

    const Input = styled.input`
        border: 1px solid;
        border-radius: 10px;
        box-shadow: none;
        float: none;
        background-color: transparent;
        background-position: center bottom, center calc(100% - 1px);
        background-repeat: no-repeat;
        background-size: 0 2px, 100% 1px;
        padding: 10px;
        transition: background 0s ease-out 0s;
        color: #ffffff;
        min-height: 50px;
        display: initial;
        width: 80%;
        outline: none;
        font-size: 20px;
        font-family: "Architects Daughter", cursive;
        &:focus {
            background-size: 100% 2px, 100% 1px;
            outline: 0 none;
            transition-duration: 0.3s;
            color: #ffffff;
        }
    `
    const InputWrapper = styled.div`
        display: flex;  
        flex-direction: column;
        justify-content: space-between;
        height: 50vh;
        align-items: center;
        width: 100%;
        padding-top: 1rem;
    `

    const Login = styled.button`
        border-radius: 10px;
        box-shadow: none;
        float: none;
        background: linear-gradient(to bottom right, #e36bae, #fb743e);
        background-position: center bottom, center calc(100% - 1px);
        background-repeat: no-repeat;
        background-size: 0 2px, 100% 1px;
        padding: 10px;
        transition: background 0s ease-out 0s;
        color: #ffffff;
        min-height: 50px;
        display: initial;
        width: 80%;
        outline: none;
        font-size: 20px;
        font-family: "Architects Daughter", cursive;
        &:hover {
            background-size: 100% 2px, 100% 1px;
            outline: 0 none;
            transition-duration: 0.3s;
            color: #ffffff;
            background: linear-gradient(to bottom right, #e36bae, #fb743e);
        }
    `

    const SmallText = styled.p`
        font-size: 12px;
        display: flex;
        flex-direction: row;
    `
    const SignUp = styled.p`
        color:  #e36bae;
        padding-left: 10px;
    `

    return (
        <div>
            <Title>Sign Up</Title>
            <InputWrapper onSubmit={handleSubmit(submitAction)} >
                {error && <div>{error}</div>}
                <Input placeholder='Name' {...register("name")}  />
                <Input placeholder='Password' type='password' {...register("password")}  />
                <Input placeholder='Confirm Password' type='password' {...register("confirmPassword")}  />
                <div>
                    <SmallText>Sign up with google</SmallText>
                </div>
                <Login>
                    { loading? <ClipLoader /> : 'Register' }
                </Login>
                <SmallText>Already have an account? <SignUp>Login</SignUp></SmallText>
            </InputWrapper>
        </div>
    )
}