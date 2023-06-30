import { Post } from "../post/post.type";

export interface User {
  id?: string;
  username?: string;
  email?: string;
  bio?: string;
  avatar?: string;
  status?: UserStatus | UserStatus.INACTIVE;
  follower: number | 0;
  followerUsers?: User[];
  following: number | 0;
  followingUsers?: User[];
  post: number | 0;
  posts?: Post[];
  createdAt?: Date;
  updatedAt?: Date;
  bannedAt?: Date;
  deletedAt?: Date;
}

export enum UserStatus {
  ACTIVE = "active",
  BANNED = "banned",
  NOTVALID = "notvalid",
  INACTIVE = "inactive",
}
