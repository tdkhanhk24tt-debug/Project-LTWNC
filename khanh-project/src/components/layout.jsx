import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Trang chủ</Link> |{" "}
        <Link to="/about">Giới thiệu</Link> |{" "}
        <Link to="/contact">Liên hệ</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;