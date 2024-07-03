import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { scrollToRef } from "../../utils/scrollToRef";

const NavItem: React.FC<{
  pageRef: React.RefObject<HTMLDivElement>;
  route: string;
  children: string;
}> = ({ pageRef, route, children}) => {

  return (
    <li className="hover:text-green-regular transition-all duration-150 ease-in-expo font-mono">
      <RouterLink
        to={route}
        onClick={() =>
          route
            ? scrollToRef(pageRef)
            : scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
      >
        {children}
      </RouterLink>
    </li>
  );
};
export default NavItem;
