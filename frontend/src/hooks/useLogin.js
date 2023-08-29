import {useState} from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin=()=>{
    const [error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(null);
    const {dispatch}= useAuthContext()

    const login =async(email,password,role)=>{
        setIsLoading(true);
        setError(null);

        const response =await fetch('/user/login',{
            method :'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({email,password,role})
        });
        const json= await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json));
            dispatch({type:'LOGIN',payload :json})
        }

    }
    return {login,isLoading,error}
}