import { Link } from "react-router-dom";

function NavLinks() {
  return (
    <main className="bg-black">
      <ul
        className=" flex flex-row align-middle space-x-5 text-white text-xl
                      divide-x-2 divide-gray-600 child:pl-5 child:child:py-1
                      child:child:px-2 child:child:rounded child:child:text-center
                      child:child-hover:bg-white child:child-hover:text-black
             
             child:child:transition-all child:child:duration-200 "
      >
        <Link to="/">
          <li>
            <div>Home</div>
          </li>
        </Link>
        <Link to="feed">
          <li>
            <div>Feed</div>
          </li>
        </Link>
        <Link to="kontakt">
          <li>
            <div>Kontakt</div>
          </li>
        </Link>
        <Link to="ueber-uns">
          <li>
            <div>Über Uns</div>
          </li>
        </Link>
        <Link to="unser-team">
          <li>
            <div>Unser Team</div>
          </li>
        </Link>
      </ul>
    </main>
  );
}

export default NavLinks;
