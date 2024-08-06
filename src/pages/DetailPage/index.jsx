import { useLoaderData } from "react-router-dom";
import Layout from "../../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const DetailPage = () => {
  const categoryLoader = useLoaderData();

  return (
    <Layout>
      <main className="detailPage">
        <div className="container">
          <h1>Detail Page</h1>
          <p>
            Category name: <span>{categoryLoader?.name}</span>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default DetailPage;
