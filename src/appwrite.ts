import { Client, Databases, Storage, Account } from "appwrite";

const client = new Client();
const projectID = import.meta.env.VITE_APPWRITE_PROJECT_ID ?? "";

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(projectID);

export const databases = new Databases(client);

export const storage = new Storage(client);

export const auth = new Account(client);
