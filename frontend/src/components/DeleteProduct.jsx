import { Trash } from 'lucide-react'

const DeleteProduct = ({ productId, onDelete }) => {

    const handleDelete = async (id) => {
        try {
            if (window.confirm('Are you delete product.')) {
                const response = await fetch(
                    `http://localhost:5000/api/products/${id}`,
                    {
                        method: "DELETE"
                    }
                );
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(response.message || "Failed to delete product.!");
                }

                alert(result.message);
                onDelete(id);
            }

        } catch (error) {
            console.log("Product delete error ", error);
        }
    };

    return (
        <button
            onClick={() => handleDelete(productId)}
            className='border border-gray-500/50 rounded-md bg-gray-500/10 hover:bg-gray-500/20 cursor-pointer p-2 text-red-500'>
            <Trash size={18} />
        </button>
    )
}

export default DeleteProduct