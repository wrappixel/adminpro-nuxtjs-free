import { Button, Col, ButtonGroup, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import PropTypes from 'prop-types';
import {
  ChangeTopbarColor,
  ToggleCustomizer,
  ChangeDirection,
  ChangeDarkMode,
  ChangeSidebarColor,
  ToggleTopbar,
  FixedSidebar,
  ToggleHorizontal,
} from '../../store/customizer/CustomizerSlice';
import { ColorsBg, SidebarColorsBg } from './data';

const Customizer = ({ className }) => {
  const dispatch = useDispatch();
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const direction = useSelector((state) => state.customizer.isRTL);
  const customtoggle = useSelector((state) => state.customizer.customizerSidebar);
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const activeSidebarBg = useSelector((state) => state.customizer.sidebarBg);
  const topbarFixed = useSelector((state) => state.customizer.isTopbarFixed);
  const isSidebarFixed = useSelector((state) => state.customizer.isSidebarFixed);
  const LayoutHorizontal = useSelector((state) => state.customizer.isLayoutHorizontal);

  return (
    <aside className={`customizerSidebar shadow ${className}`}>
      <Row>
        <Col>
          <div className="p-3 border-bottom">
            <h5 className="mb-0">Theme Customizer</h5>
            <small>Customize & Preview in Real Time</small>
          </div>
          <SimpleBar style={{ height: 'calc(100vh - 85px)' }}>
            <div className="p-3">
              <br />
              <Button
                color="danger"
                className="custombtn"
                onClick={() => dispatch(ToggleCustomizer())}
              >
                {customtoggle ? <i className="bi bi-x" /> : <i className="bi bi-gear" />}
              </Button>
              <h6>Topbar Color</h6>
              <div className="button-group">
                {ColorsBg.map((colorbg) => (
                  <Button
                    color={colorbg.bg}
                    key={colorbg.bg}
                    size="sm"
                    onClick={() => dispatch(ChangeTopbarColor(`${colorbg.bg}`))}
                  >
                    {topbarColor === colorbg.bg ? (
                      <i className="bi bi-check" />
                    ) : (
                      <i className="bi bi-circle" />
                    )}
                  </Button>
                ))}
              </div>
              <br />
              <br />

              <h6>Change Direction</h6>
              <ButtonGroup>
                <Button
                  outline={!!direction}
                  color="primary"
                  size="sm"
                  onClick={() => dispatch(ChangeDirection(false))}
                >
                  LTR
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  outline={!direction}
                  onClick={() => dispatch(ChangeDirection(true))}
                >
                  RTL
                </Button>
              </ButtonGroup>
              <br />
              <br />
              <br />
              <h6>Change Mode</h6>
              <ButtonGroup>
                <Button
                  outline={!!isDarkMode}
                  color="primary"
                  size="sm"
                  onClick={() => dispatch(ChangeDarkMode(false)) && window.location.reload(false)}
                >
                  Light
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  outline={!isDarkMode}
                  onClick={() => dispatch(ChangeDarkMode(true))}
                >
                  Dark
                </Button>
              </ButtonGroup>
              <br />
              <br />
              <h6>Change Layout</h6>
              <ButtonGroup>
                <Button
                  outline={!!LayoutHorizontal}
                  color="primary"
                  size="sm"
                  onClick={() => dispatch(ToggleHorizontal(false))}
                >
                  Vertical
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  outline={!LayoutHorizontal}
                  onClick={() => dispatch(ToggleHorizontal(true))}
                >
                  Horziontal
                </Button>
              </ButtonGroup>
              <br />
              <br />
              <br />
              <h6>Change sidebar Color</h6>
              <div className="button-group">
                {SidebarColorsBg.map((colorbg) => (
                  <Button
                    color={colorbg.bg}
                    key={colorbg.bg}
                    size="sm"
                    onClick={() => dispatch(ChangeSidebarColor(`${colorbg.bg}`))}
                  >
                    {activeSidebarBg === colorbg.bg ? (
                      <i className="bi bi-check" />
                    ) : (
                      <i className="bi bi-circle" />
                    )}
                  </Button>
                ))}
              </div>
              <br />
              <br />

              <h6>Topbar Type</h6>

              <ButtonGroup>
                <Button
                  outline={!!topbarFixed}
                  color="primary"
                  size="sm"
                  onClick={() => dispatch(ToggleTopbar(false))}
                >
                  Static
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  outline={!topbarFixed}
                  onClick={() => dispatch(ToggleTopbar(true))}
                >
                  Fixed
                </Button>
              </ButtonGroup>
              <br />
              <br />
              <h6>Sidebar Type</h6>

              <ButtonGroup>
                <Button
                  outline={!!isSidebarFixed}
                  color="primary"
                  size="sm"
                  onClick={() => dispatch(FixedSidebar(false))}
                >
                  Static
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  outline={!isSidebarFixed}
                  onClick={() => dispatch(FixedSidebar(true))}
                >
                  Fixed
                </Button>
              </ButtonGroup>
            </div>
          </SimpleBar>
        </Col>
      </Row>
    </aside>
  );
};
Customizer.propTypes = {
  className: PropTypes.string,
};

export default Customizer;
