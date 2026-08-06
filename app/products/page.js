import Link from "next/link"

const products = [
    {category : "electronics", id: 101, name:"Phone"},
    {category : "shoes", id: 205, name:"Sneakers"},
    {category : "books", id: 309, name:"Novel"}
]
export default async function Products({params}) {
    return(
        <div>
            <h1>All Products</h1>
            {products.map((p)=>(
                <p key={p.id}>
                    <Link href={`/products/${p.category}/${p.id}`}>{p.name}</Link>
                </p>
            ))}
        </div>
    )
}