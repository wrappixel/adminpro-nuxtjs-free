import React, { useEffect } from 'react';
import { Collapse, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const NavSubMenu = ({ icon, title, items, isUrl, suffixColor, suffix }) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    if (isUrl) {
      setCollapsed(!collapsed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavItem>
      <NavLink className="cursor-pointer gap-3" onClick={toggle}>
        <span className="sidebarIcon">{icon}</span>
        <span className="hide-mini w-100">
          <div className="d-flex align-items-center">
            <span className="d-block">{title}</span>
            <span className="ms-auto">
              <span className={`badge me-2 ${suffixColor}`}>{suffix}</span>
              <i className={`bi fs-8 ${collapsed ? 'bi-chevron-down' : 'bi-chevron-right'}`} />
            </span>
          </div>
        </span>
      </NavLink>

      <Collapse isOpen={collapsed} navbar tag="ul" className="subMenu">
        {items.map((item) => (
          <NavItem
            key={item.title}
            className={`hide-mini ${location.pathname === item.href ? 'activeLink' : ''}`}
          >
            <NavLink tag={Link} to={item.href} className="gap-3">
              <span className="sidebarIcon">{item.icon}</span>
              <span className="hide-mini">
                <span>{item.title}</span>
              </span>
            </NavLink>
          </NavItem>
        ))}
      </Collapse>
    </NavItem>
  );
};
NavSubMenu.propTypes = {
  title: PropTypes.string,
  items: PropTypes.func,
  icon: PropTypes.node,
  isUrl: PropTypes.bool,
  suffix: PropTypes.any,
  suffixColor: PropTypes.string,
};
export default NavSubMenu;
