import Logo from "../assets/Logo.png";
import Search from "../assets/search.png";
import Wishlist from "../assets/Wishlist.png";
import CartIcon from "../assets/CartIcon.png";
import DynamicMenu from "./DynamicMenu";
import Content from "../assets/HomeContent.json";
let menu = Content[0]['headerMenu'];
export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="headerwp">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <nav className="navigation">
              <DynamicMenu menuItems={menu} />
            </nav>
            <div className="header_utility">
              <div className="searchbox">
                <input type="text" placeholder="What are you looking for?" />
                <img src={Search} alt="search" />
              </div>
              <div className="headericons">
                <div className="wishlist">
                  <img src={Wishlist} alt="Wishlist" />
                </div>
                <div className="carttbn">
                  <img src={CartIcon} alt="Cart Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
