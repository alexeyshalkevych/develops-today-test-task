import axios from 'axios';
import { IPost, postIdQuery } from '../interfaces';

axios.defaults.baseURL = 'https://simple-blog-api.crew.red/';

export const fetchPosts = async (): Promise<IPost[]> => {
  const { data } = await axios.get('posts');

  return data;
};

export const fetchPost = async (postId: postIdQuery): Promise<IPost> => {
  const { data } = await axios.get(`posts/${postId}`);

  return data;
};

export const fetchCreatePost = async (post: any): Promise<IPost> => {
  const { newPost } = post;

  const { data } = await axios.post('posts', newPost);

  return data;
};
