import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class AppwriteService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const post = await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
      return post;
    } catch (error) {
      console.log("Error creating post", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const post = await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
      return post;
    } catch (error) {
      console.log("Error updating post", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      const post = await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return post;
    } catch (error) {
      console.log("Error deleting post", error);
      throw error;
    }
  }

  async getPost(slug) {
    try {
      const post = await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      );
      return post;
    } catch (error) {
      console.log("Error getting post", error);
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    //only return posts that have status active (as we have indexed status in appwrite)
    try {
      const posts = await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      );
      return posts;
    } catch (error) {
      console.log("Error getting posts", error);
      throw error;
    }
  }

  async uploadFile(file) {
    try {
      const file = await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
      return file;
    } catch (error) {
      console.log("Error uploading file", error);
      throw error;
    }
  }
  async deleteFile(fileId) {
    try {
      const file = await this.bucket.deleteFile(
        config.appwriteBucketId,
        fileId
      );
      return file;
    } catch (error) {
      console.log("Error deleting file", error);
      throw error;
    }
  }

  async getFilePreview(fileId) {
    try {
      const file = await this.bucket.getFilePreview(
        config.appwriteBucketId,
        fileId
      );
      return file;
    } catch (error) {
      console.log("Error getting file preview", error);
      throw error;
    }
  }
}
const appwriteService = new AppwriteService();

export default appwriteService;
