'use client'
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import './radio.css'
import { useForm } from 'react-hook-form';

export default function Login(){
    const { register, handleSubmit } = useForm();
    const [ data, setData ] = useState("");

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
    const InputWrapper = styled.form`
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
            <Title>Login</Title>
            <InputWrapper>
                <Input placeholder='Name'  />
                <Input placeholder='Password' type='password' />
                <div>
                    <SmallText>Forgot password?</SmallText>
                </div>
                <Login>Login</Login>
                <SmallText>Don't have an account? <SignUp> sign up here </SignUp></SmallText>
            </InputWrapper>
        </div>
    )
}