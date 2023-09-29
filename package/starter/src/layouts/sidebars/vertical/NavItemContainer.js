import { NavLink, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavItemContainer = ({
  to,
  icon,
  title,
  toggle,
  className,
  suffix,
  suffixColor,
}) => {
  return (
    <NavItem onClick={toggle} className={className}>
      <NavLink tag={Link} to={to} className="gap-3">
        <span className="sidebarIcon">{icon}</span>
        <span className="hide-mini w-100">
          <div className="d-flex align-items-center">
            <span>{title}</span>
            <span className={`badge ms-auto ${suffixColor}`}>{suffix}</span>
          </div>
        </span>
      </NavLink>
    </NavItem>
  );
};
NavItemContainer.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.node,
  toggle: PropTypes.func,
  className: PropTypes.string,
  suffix: PropTypes.any,
  suffixColor: PropTypes.string,
};

export default NavItemContainer;
