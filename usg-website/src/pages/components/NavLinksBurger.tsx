import { Link } from "react-router-dom";
import Button from "./Button";

function NavLinksBurger() {
  return (
    <main className="bg-black">
      <ul
        className="flex flex-col align-middle text-white text-xl justify-center child:child:py-1 child:child:rounded child:child:text-center
       child:child-hover:bg-white child:child-hover:text-black child:child:transition-all child:child:duration-200 child:child:child:bg-slate-500 child:child:child:rounded"
      >
        <Button text="Mitglied werden" destination="kontakt/bewerben" />
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

export default NavLinksBurger;
