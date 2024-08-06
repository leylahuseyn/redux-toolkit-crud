import Layout from '../../components/Layout'
import { Button, Form, Input } from 'antd'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createCategories, fetchCategoriesAsync } from '../../redux/Slices/categoriesSlice';
import { useNavigate } from 'react-router-dom';



const AddPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories.value);


    useEffect(() => {
        dispatch(fetchCategoriesAsync());
        }, [dispatch]);

    const onFinish = (values) => {
        dispatch(createCategories({id: categories.length + 1, name: values.name, description: values.description}));
        setTimeout(() => {
            navigate('/', { replace: true });
        }, 1000);
      };

      
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
        <main className="addPage">
            <div className="container">
            <h1>Add Category</h1>

           <div className="add">
           <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input category name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Description"
      name="description"
      rules={[
        {
          required: true,
          message: 'Please input category description!',
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Add category
      </Button>
    </Form.Item>
  </Form>
           </div>

            </div>
        </main>
    </Layout>
  )
}

export default AddPage