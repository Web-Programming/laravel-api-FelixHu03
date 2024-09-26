import React from "react";

function Product() {
    const products = [
        { id: "P001", nama: "Acer", harga: 2000000 },
        { id: "P002", nama: "Lenovo", harga: 3000000 },
        { id: "P003", nama: "Asus", harga: 4000000 },
    ];
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Harga</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((product) =>{
                return(
                <tr key={product.id}>
                    <td>
                        {product.id}
                    </td>
                    <td>
                        {product.nama}
                    </td>
                    <td>
                        {product.harga}
                    </td>
                </tr>
                );
                })}
            </tbody>
        </table>
    );
}

export default Product;