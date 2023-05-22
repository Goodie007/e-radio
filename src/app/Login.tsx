'use client'
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function Login(){
    const Title = styled.h1`
        text-align: center;
        padding-top: 5rem;
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
        height: 35vh;
        align-items: center;
        width: 100%;
        padding-top: 5rem;
    `

    return (
        <div>
            <Title>Login</Title>
            <InputWrapper>
                <Input placeholder='Name' />
                <Input placeholder='Password' />
            </InputWrapper>
        </div>
    )
}