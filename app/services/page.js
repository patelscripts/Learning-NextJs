import Link from "next/link";

export default function Services(){
    return(
        <div>
            <h1>
                hello from services pages
            </h1>
            <p>
                <Link href='/services/web-dev' >web dev</Link>
            </p>
            <p>
                <Link href='/' >app dev</Link>
            </p>
            <p>
                <Link href='/' >web pages</Link>
            </p>
            
        </div>
    )
}
