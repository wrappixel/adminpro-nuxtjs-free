import React from 'react';
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Container,
} from 'reactstrap';
import { Bell, MessageSquare } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import MessageDD from './MessageDD';
import NotificationDD from './NotificationDD';
import user1 from '../../assets/images/users/user1.jpg';

import { ToggleMobileSidebar } from '../../store/customizer/CustomizerSlice';
import ProfileDD from './ProfileDD';

import HorizontalLogo from '../logo/HorizontalLogo';

const HorizontalHeader = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const isMobileSidebar = useSelector((state) => state.customizer.isMobileSidebar);
  const dispatch = useDispatch();

  return (
    <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="shadow HorizontalTopbar p-0"
    >
      <Container className="d-flex align-items-center">
        {/******************************/}
        {/**********Logo**********/}
        {/******************************/}
        <div className="pe-4 py-3 ">
          <HorizontalLogo />
        </div>
        {/******************************/}
        {/**********Toggle Buttons**********/}
        {/******************************/}

        <Nav className="me-auto" navbar>
          <Button
            color={topbarColor}
            className="d-sm-block d-lg-none"
            onClick={() => dispatch(ToggleMobileSidebar())}
          >
            <i className={`bi ${isMobileSidebar ? 'bi-x' : 'bi-list'}`} />
          </Button>
        </Nav>
        {/******************************/}
        {/**********Notification DD**********/}
        {/******************************/}
        <UncontrolledDropdown>
          <DropdownToggle color={topbarColor}>
            <Bell size={18} />
          </DropdownToggle>
          <DropdownMenu className="ddWidth" end>
            <DropdownItem header>
              <span className="mb-0">Notifications</span>
            </DropdownItem>
            <DropdownItem divider />
            <SimpleBar style={{ maxHeight: '350px' }}>
              <NotificationDD />
            </SimpleBar>
            <DropdownItem divider />
            <div className="p-2 px-3">
              <Button color="primary" size="sm" block>
                Check All
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        {/******************************/}
        {/**********Message DD**********/}
        {/******************************/}
        <UncontrolledDropdown className="mx-1">
          <DropdownToggle color={topbarColor}>
            <MessageSquare size={18} />
          </DropdownToggle>
          <DropdownMenu className="ddWidth" end>
            <DropdownItem header>
              <span className="mb-0">Messages</span>
            </DropdownItem>
            <DropdownItem divider />
            <SimpleBar style={{ maxHeight: '350px' }}>
              <MessageDD />
            </SimpleBar>
            <DropdownItem divider />
            <div className="p-2 px-3">
              <Button color="primary" size="sm" block>
                Check All
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        {/******************************/}
        {/**********Profile DD**********/}
        {/******************************/}
        <UncontrolledDropdown>
          <DropdownToggle tag="span" className="p-2 cursor-pointer ">
            <img src={user1} alt="profile" className="rounded-circle" width="30" />
          </DropdownToggle>
          <DropdownMenu className="ddWidth" end>
            <ProfileDD />

            <div className="p-2 px-3">
              <Button color="danger" size="sm">
                Logout
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Container>
    </Navbar>
  );
};

export default HorizontalHeader;
