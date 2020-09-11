import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { INewPost, fetchAddPostActionTypes } from '../../interfaces/index';

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

    setForm(initialForm);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={form.title}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="body"
            name="body"
            value={form.body}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <button type="submit">Create post</button>
      </form>
    </>
  );
};

export default FormNewPost;
