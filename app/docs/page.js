import Link from "next/link";

export default function DocsHome(){
    return(
        <div>
        <h1>Docs home</h1>
        <p><Link href='/docs/routing'>1 Segment</Link></p>
        <p><Link href='/docs/routing/dynamic'>2 Segment</Link></p>
        <p><Link href='/docs/routing/dynamic/catch-all'>3 Segment</Link></p>
        <p><Link href='/docs/routing/dynamic/catch-all/pizza'>4 Segment</Link></p>
        </div>
    )
}