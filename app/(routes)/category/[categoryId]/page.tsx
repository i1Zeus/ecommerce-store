import getProducts from "@/actions/get-products";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParma: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParma,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParma.colorId,
    sizeId: searchParma.sizeId,
  });

  

  return <div></div>;
};

export default CategoryPage;
