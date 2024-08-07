import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import { removeFromBasket } from '../../redux/Slices/basketSlice';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

const BasketPage = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);

  const handleRemoveFromBasket = (id) => {
    dispatch(removeFromBasket(id));
  };

  return (
    <Layout>
      <div className="basket-page container">
        <h1>Basket</h1>
        <ul>
          {basketItems.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleRemoveFromBasket(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default BasketPage;
