import Link from "next/link";
export default function Navbar() {
  return (
    <div id="navbar">
      <div className="navbar-background"></div>
      <div className="navbar-text-container">
        <ul className="navbar-list">
          <li>
            <text className="yeah">Kiriyako</text>
          </li>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/projects`}>Projects</Link>
          </li>
          <li>
            <Link href={`/about`}>About</Link>
          </li>
          <li>
            <Link href={`/socials`}>Socials</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
