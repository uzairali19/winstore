import Link from "next/link";

function CategoriesDropdown() {
  return (
    <div className="categories-dropdown">
      <nav className="navbar navbar-expand-lg container navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "black" }}
              >
                {" "}
                Shop By Category{" "}
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Electronics
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Laptops
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Gaming Consoles
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Cameras
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Used Products
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Refurbished
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Electronic Accessories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobile Accessories
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Audio{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Wearable
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Console Accessories
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Laptop Accessories
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        PC Accessories
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        LED Light &amp; Bulb
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Storage
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gadgets
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Printers &amp; Scanners
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Computer Components
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Network Components
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Home Appliances
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        TV &amp; Video Devices
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home Audio
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item dropdown-toggle" href="#">
                        TV Accessories
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Large Appliances
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Kitchen Appliances
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cooling &amp; Air Treatment
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Women store
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Men Store
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Babies Store &amp; Toys
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Electronics
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Health &amp; Beauty
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Watches, Bags &amp; Jewelery
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Home &amp; Lifestyle
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Grocery
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Pharmacy
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Books &amp; Stationery
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Animal Food
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Sports &amp; Outdoor
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Automotive
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="">
                    Hardware &amp; Tools
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobiles Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cordless Phone
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tablets
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="navigation navbar navbar-expand-lg">
            <Link href="/">
              <a className="block text-black hover:text-black">
                Women
              </a>
            </Link>
            <Link href="/">
              <a className="block text-black hover:text-black">
                Men
              </a>
            </Link>
            <Link href="/">
              <a className="block text-black hover:text-black">
                Kids
              </a>
            </Link>
            <Link href="/">
              <a className="block text-black hover:text-black">
                Electronics
              </a>
            </Link>
            <Link href="/">
              <a className="block text-black hover:text-black">
                Accessories
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CategoriesDropdown;
