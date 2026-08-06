export default async function DocsPage({params}) {
    const {slug} = await params;
    return(
        <div>
            <h1>Docs Page</h1>
            <p>URL Segments (array) : {JSON.stringify(slug)}</p>
            <p>Full path:docs/{slug.join('/')}</p>
        </div>
    );
}