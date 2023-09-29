import { Container, Nav } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SidebarData from '../sidebardata/SidebarData';
import NavSubItem from './NavSubItem';
import NavSingleItem from './NavSingleItem';

const HorizontalSidebar = () => {
  const activeBg = useSelector((state) => state.customizer.sidebarBg);
  const location = useLocation();
  const currentURL = location.pathname.split('/').slice(0, -1).join('/');
  const isFixed = useSelector((state) => state.customizer.isSidebarFixed);
  const isMobileSidebar = useSelector((state) => state.customizer.isMobileSidebar);
  return (
    <div
      className={`horizontalNav shadow bg-${activeBg}  ${isFixed ? 'fixedSidebar' : ''} ${
        isMobileSidebar ? 'showSidebar' : ''
      }`}
    >
      <Container>
        <Nav className={activeBg === 'white' ? '' : 'lightText'}>
          {SidebarData.map((navi) => {
            if (navi.caption) {
              return (
                <div
                  className="navCaption fw-bold mt-4 d-none d-sm-block d-md-none"
                  key={navi.caption}
                >
                  {navi.caption}
                </div>
              );
            }
            if (navi.children) {
              return (
                <NavSubItem
                  key={navi.id}
                  icon={navi.icon}
                  title={navi.title}
                  items={navi.children}
                  suffix={navi.suffix}
                  activeBck={activeBg}
                  suffixColor={navi.suffixColor}
                  isUrl={currentURL === navi.href}
                />
              );
            }
            return (
              <NavSingleItem
                key={navi.id}
                //toggle={() => toggle(navi.id)}
                className={location.pathname === navi.href ? 'activeLink' : ''}
                to={navi.href}
                title={navi.title}
                suffix={navi.suffix}
                suffixColor={navi.suffixColor}
                icon={navi.icon}
              />
            );
          })}
        </Nav>
      </Container>
    </div>
  );
};

export default HorizontalSidebar;
