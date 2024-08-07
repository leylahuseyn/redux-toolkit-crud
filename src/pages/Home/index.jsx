import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import "./index.scss";
import { useEffect } from "react";
import {
  deleteCategories,
  fetchCategoriesAsync,
} from "../../redux/Slices/categoriesSlice";
import { addFavorite, removeFavorite } from "../../redux/Slices/favoritesSlice";
import { faCircleInfo, faTrash, faPenToSquare, faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.value);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);
  const favorites = useSelector((state) => state.favorites.items);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  const handleAddFavorite = (category) => {
    const existingItem = favorites.find(item => item.id === category.id);
    if (existingItem) {
      alert('This item is already in your favorites.');
    } else {
      dispatch(addFavorite(category));
    }
  };

  return (
    <Layout>
      <main className="home">
        <div className="container">
          <h1>Categories list</h1>

          <table className="table table-bordered ">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {status === "loading" ? (
                <tr>
                  <td colSpan={"4"}>
                    <span className="loader"></span>
                  </td>
                </tr>
              ) : null}
              {status === "failed" ? (
                <tr>
                  <td>
                    <h1>{error}</h1>
                  </td>
                </tr>
              ) : null}
              {status === "succeeded" && Array.isArray(categories) 
                ? categories.map((category) => (
                    <tr key={category.id}>
                      <td>{category.id}</td>
                      <td>{category.name}</td>
                      <td>{category.description}</td>
                      <td>
                        <Link to={`/${category.id}`}>
                          <FontAwesomeIcon icon={faCircleInfo} />
                        </Link>
                        <button
                          onClick={() =>
                            dispatch(deleteCategories(category.id))
                          }
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button
                          onClick={() => navigate(`/edit/${category.id}`)}
                        >
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                        <button
                          onClick={() => handleAddFavorite(category)}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
