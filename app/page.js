import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className="text-2xl font-bold">Hello Next.js</h1>
    <Link href='/docs'>Docs</Link>
    </>
  );
}
