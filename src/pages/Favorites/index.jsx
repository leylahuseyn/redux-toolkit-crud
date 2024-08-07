import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout';
import { removeFavorite } from '../../redux/Slices/favoritesSlice';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <Layout>
      <div className="favorites container">
        <h1>Favorites</h1>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>
              {favorite.name}
              <button onClick={() => handleRemoveFavorite(favorite.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Favorites;
