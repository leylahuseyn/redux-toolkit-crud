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
          <p className="text-danger">
             Name: <span>{categoryLoader?.name}</span>
          </p>
          <p className="text-danger">
            Description: <span>{categoryLoader?.description}</span>
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default DetailPage;
