import { useCallback } from "react";
import axios from "axios";
import { apiEndPoints } from "../services/apiEndPoints";
import { SignInData } from "../types/SignInData";

export const useSendSignInData = () => {
  const sendSignInData = useCallback((email: string, password: string) => {
    let signInData: SignInData = {
      email: email,
      password: password,
    }
    console.log(signInData);
    axios.post(`${apiEndPoints}/api/login`, signInData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [])
  return { sendSignInData } 
}
