import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { INewPost, fetchAddPostActionTypes } from '../../interfaces/index';
import { Form, InputField, FormButton } from './FormNewPost.styled';

const initialForm: INewPost = {
  title: '',
  body: '',
};

const FormNewPost: React.FC = () => {
  const [form, setForm] = useState<INewPost>(initialForm);
  const dispatch = useDispatch();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = form;

    dispatch({
      type: fetchAddPostActionTypes.FETCH_ADD_POST,
      newPost,
    });

    Router.push('/');

    setForm(initialForm);
  };

  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <InputField
          type="text"
          placeholder="Title"
          name="title"
          value={form.title}
          onChange={inputChangeHandler}
          required
        />
        <InputField
          type="text"
          placeholder="Body"
          name="body"
          value={form.body}
          onChange={inputChangeHandler}
          required
        />
        <FormButton type="submit">Create post</FormButton>
      </Form>
    </>
  );
};

export default FormNewPost;
