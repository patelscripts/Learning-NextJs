export default async function ProductDetail({params}) {
    const {category, productId} =await params;
    console.log(await params)
    return(
        <div>
            <h1>
                category : {category}
            </h1>
            <h1>
                productId : {productId}
            </h1>
        </div>
    )
}