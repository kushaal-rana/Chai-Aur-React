import React from "react";

import { Logo, LogoutBtn, Container } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const navItems = [
    {
      label: "Home",
      slug: "/",
      active: true,
    },
    {
      label: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="shadow sticky z-50 top-0">
      <Container>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="mr-4">
            <Link to="/">
              <Logo width="100px" />
            </Link>
          </div>
          <ul className="flex items-center gap-2">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                      setIsActive(true);
                    }}
                    className={`block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
