import { getCategory } from '../../api';

export const categoryLoader = async ({ params }) => {
  const { categoryId } = params;
  const category = await getCategory(categoryId);
  return category;
};
