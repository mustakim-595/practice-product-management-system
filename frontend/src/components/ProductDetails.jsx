import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {

    const [product, setProduct] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/products/${id}`
                );
                if (!response.ok) {
                    throw new Error(response.message || "Failed to load produt.");
                }
                const data = await response.json();
                setProduct(data.product);

            } catch (error) {
                console.log(error.message);
            }

        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return (
            <div className='w-full h-screen flex justify-center items-center'>
                Product Loading...
            </div>
        )
    };

    const {
        title,
        category,
        price,
        stock,
        createdAt,
        updatedAt
    } = product;

    return (
        <div className='p-5'>
            <button
                onClick={() => navigate('/')}
                className="bg-cyan-400 py-3 px-4 rounded-xl hover:bg-cyan-400/80 cursor-pointer mb-5"
            >
               {"<"} Back to Home
            </button>
            <div>
                <h3> Title: {title} </h3>
                <h3> Category: {category} </h3>
                <h3> Price: {price} </h3>
                <h3> Stock: {stock} </h3>
                <h3> Create At: {createdAt} </h3>
                <h3> Updated At: {updatedAt} </h3>
            </div>
        </div>
    )
}

export default ProductDetails