import { getCategory } from "../../api"


export async function categoryLoader({ params }) {
    const { categoryId } = params
    const resp = await getCategory(categoryId);
    return resp.data
}