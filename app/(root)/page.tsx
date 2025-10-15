import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";

export const metadata = {
  title: 'Home'
}

const HomePage = async() => {
    const latestProducts = await getLatestProducts()

    return (
        <div>
            <ProductList   
                data={latestProducts} 
                title="Newest Arrival"
                limit={4}
            />
        </div>
    )
}
 
export default HomePage;