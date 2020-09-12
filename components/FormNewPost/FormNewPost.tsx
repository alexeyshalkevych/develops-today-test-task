import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { INewPost, fetchAddPostActionTypes } from '../../interfaces/index';
import { Form, InputField, FormButton, MissField } from './FormNewPost.styled';

const initialForm: INewPost = {
  title: '',
  body: '',
};

const FormNewPost: React.FC = () => {
  const [form, setForm] = useState<INewPost>(initialForm);
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const inputBlurHandler = () => {
    if (!form.body.trim() || !form.title.trim()) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = form;

    if (!error) {
      dispatch({
        type: fetchAddPostActionTypes.FETCH_ADD_POST,
        newPost,
      });

      Router.push('/');

      setForm(initialForm);
    }
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
          onBlur={inputBlurHandler}
          required
        />
        <InputField
          type="text"
          placeholder="Body"
          name="body"
          value={form.body}
          onChange={inputChangeHandler}
          required
          onBlur={inputBlurHandler}
        />
        {error && <MissField>Field must be required</MissField>}
        <FormButton type="submit">Create post</FormButton>
      </Form>
    </>
  );
};

export default FormNewPost;
