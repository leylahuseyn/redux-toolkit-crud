import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCategoriesAsync } from '../../redux/Slices/categoriesSlice';
import Layout from '../../components/Layout';
import './index.scss';

const AddPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = async () => {
    await dispatch(createCategoriesAsync({ name, description }));
    navigate('/');
  };

  return (
    <Layout>
      <div className="add-page">
        <div className="container">
          <h1>Add Category</h1>
          <div className="add ">
            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddPage;
