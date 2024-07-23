import Link from "next/link";

export default async function Navigation() {
  return (
    <nav className="mb-6">
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
      </ul>
    </nav>
  );
}
