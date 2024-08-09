import { Account, Avatars, Client, Databases, ID, Storage } from 'react-native-appwrite';

export const appConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.jsm.applearning",
    projectId: "66389ad8002942b7aee4",
    databaseId: "66389e8d001d761eddc1",
    userCollectionId: "66389ec0001c62465125",
    videosCollectionId: "6638a131000a892ffc0e",
    storageId: "6638a4c100292f01d6cc"
}
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appConfig.projectId) // Your project ID
    .setPlatform(appConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
// const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(), 
            email,
            password,
            username
        ) 
        if(!newAccount) throw Error;
        const avatorURL = avatars.getInitials(username);
        await SigninUser(email, password);
        const newUser = await databases.createDocument(
            appConfig.databaseId,
            appConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatorURL,
            }
        )

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

export async function SigninUser(email, password){
    try {
        const session = await 
        account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}