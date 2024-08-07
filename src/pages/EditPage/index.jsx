import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editCategoriesAsync } from '../../redux/Slices/categoriesSlice';
import Layout from '../../components/Layout';
import './index.scss';

const EditPage = () => {
  const { id } = useParams();
  const category = useSelector(state => state.categories.value.find(cat => cat.id === parseInt(id)));
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description);
    }
  }, [category]);

  const handleSave = async () => {
    await dispatch(editCategoriesAsync({ id: parseInt(id), name, description }));
    navigate('/');
  };

  return (
    <Layout>
      <div className="edit-category">
        <h1>Edit Category</h1>
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
        <button onClick={handleSave}>Save</button>
      </div>
    </Layout>
  );
};

export default EditPage;
