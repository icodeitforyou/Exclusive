import { Link } from "react-router-dom";
export default function DynamicMenu({menuItems}) {
  return (
    <ul className="nav_grid">
      {menuItems.map((item) => (
        <li className="nav_items" key={item.id}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
