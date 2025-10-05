import config from "../config/config";
import { Client, Account, Databases, Storage, Avatars, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    //creating client and account only when the object of this class is created
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (!userAccount) {
        throw new Error("Account not created");
      }
      // Auto-login the user and return the session
      return await this.login({ email, password });
    } catch (error) {
      console.log("Error creating account", error);
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      const session = await this.account.createEmailSession(email, password);
      if (!session) {
        throw new Error("Invalid credentials");
      }
      return session;
    } catch (error) {
      console.log("Error logging in", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return this.account.get();
    } catch (error) {
      console.log("Error getting current user", error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}
const authService = new AuthService();

export default authService;
