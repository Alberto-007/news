import { User } from "../types/User";

type Error = {
    [key:string]: string;
}

export const validate = (data: User) => {
    const errors: Error = {};

    if(!data.name) {
        errors["name"] = "Name is required";
    }

    if(!data.email) {
        errors["email"] = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors["email"] = "Email address is invalid";
    }

    if(!data.agree) {
        errors["agree"] = "You must agree to the terms and conditions";
    }

    return errors;
}