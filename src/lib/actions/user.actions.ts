'use server';

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwirte";
import { parseStringify } from "../utils";
import { cookies } from "next/headers";


export const signIn = async ({email, password}: signInProps) => {
    try {
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email, password);

        return parseStringify(response);
    } catch (error) {
        console.log('Error', error)
    }
}

export const signUp = async (userData : SignUpParams) => {
    const { email, firstName, lastName, password } = userData;

    try {
        const { account, database } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`
        );
    
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
        path: "/",
        secure: true,
        httpOnly: true,
        sameSite: "strict",
    });
    return parseStringify(newUserAccount);
    } catch (error) {
        console.log('Error', error)
    }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();

        return parseStringify(user);
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const loggoutAccount = async () => {

    try {
        const { account } = await createSessionClient();

        const cookiesResult = await cookies();
        cookiesResult.delete('appwrite-session');
        await account.deleteSession("current");
    } catch (error) {
        return null;
    }
}            
