import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { ReactComponent as LogoDarkIcon } from '../../assets/images/logos/xtreme-dark-icon.svg';
import { ReactComponent as LogoDarkText } from '../../assets/images/logos/xtreme-dark-text.svg';
import { ReactComponent as LogoWhiteIcon } from '../../assets/images/logos/xtreme-white-icon.svg';
import { ReactComponent as LogoWhiteText } from '../../assets/images/logos/xtreme-white-text.svg';

const Logo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const toggleMiniSidebar = useSelector((state) => state.customizer.isMiniSidebar);
  const activeSidebarBg = useSelector((state) => state.customizer.sidebarBg);
  return (
    <Link to="/" className="d-flex align-items-center gap-2">
      {isDarkMode || activeSidebarBg !== 'white' ? (
        <>
          <LogoWhiteIcon />
          {toggleMiniSidebar ? '' : <LogoWhiteText />}
        </>
      ) : (
        <>
          <LogoDarkIcon />
          {toggleMiniSidebar ? '' : <LogoDarkText />}
        </>
      )}
    </Link>
  );
};

export default Logo;
