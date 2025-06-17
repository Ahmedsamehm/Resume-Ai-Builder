import React, { memo, useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { useLogout } from "../../features/Auth/useLogin";

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { LogoutFun, isPending } = useLogout();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const user = localStorage.getItem("user");

  const handleLogout = useCallback(() => {
    LogoutFun();
    navigate("/login");
    localStorage.clear();
  }, [LogoutFun]);

  return (
    <header className="py-4 bg-neutral-950">
      <div className="container flex items-center justify-between gap-10 mx-auto px-3 md:px-5 lg:px-0">
        <div className="flex items-center gap-2">
          <span className="font-heading text-xl font-extrabold">Ai Resume</span>
        </div>
        <div className="flex items-center gap-10">
          {/* Desktop Navigation */}
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            data-slot="navigation-menu"
            data-viewport="false"
            className="group/navigation-menu relative max-w-max flex-1 items-center justify-center gap-2 hidden md:flex"
          >
            <div style={{ position: "relative" }}>
              <ul
                data-orientation="horizontal"
                data-slot="navigation-menu-list"
                className="group flex flex-1 list-none items-center justify-center gap-1"
                dir="ltr"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-accent/50 text-accent-foreground rounded-2xl"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  <span className="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium">
                    Home
                  </span>
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-accent/50 text-accent-foreground rounded-2xl"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  <span className="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium">
                    Dashboard
                  </span>
                </NavLink>
                {user && (
                  <NavLink
                    onClick={handleLogout}
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-accent/50 text-accent-foreground rounded-2xl"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  >
                    <span className="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium">
                      Logout
                    </span>
                  </NavLink>
                )}
              </ul>
            </div>
          </nav>
          <div className="gap-2 hidden md:flex">
            {!user && (
              <Button
                onClick={() => navigate("/login")}
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2"
                type="button"
              >
                Get Started - Free
              </Button>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-900 w-full py-10 px-3 absolute mt-4  ">
          <ul className="flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "bg-accent/50 text-accent-foreground rounded-2xl px-4 py-2"
                  : "text-muted-foreground hover:text-foreground px-4 py-2"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "bg-accent/50 text-accent-foreground rounded-2xl px-4 py-2"
                  : "text-muted-foreground hover:text-foreground px-4 py-2"
              }
            >
              Dashboard
            </NavLink>
            {user && (
              <NavLink
                onClick={handleLogout}
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-accent/50 text-accent-foreground rounded-2xl"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                <span className="inline-flex h-9 items-center justify-center px-4 py-2 text-sm font-medium">
                  Logout
                </span>
              </NavLink>
            )}
            {!user && (
              <Button
                onClick={() => navigate("/login")}
                className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2"
                type="button"
              >
                Get Started - Free
              </Button>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default memo(NavBar);
