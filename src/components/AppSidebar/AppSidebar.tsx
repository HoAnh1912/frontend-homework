import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Menu, MenuItem, MenuItemStyles, Sidebar, SubMenu, menuClasses } from 'react-pro-sidebar';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { themes } from 'assets/themes/theme';
import { sidebarConfig } from 'constants/sidebar';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { convertToRem } from 'utils/convert-to-rem';

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div<{ rtl?: boolean }>`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  font-weight: 700;
  background-color: #009fdb;
  background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
  ${({ rtl }) =>
    rtl
      ? `
      margin-left: 10px;
      margin-right: 4px;
      `
      : `
      margin-right: 10px;
      margin-left: 4px;
      `}
`;

export const AppSidebar = ({
  collapsed,
  toggled,
  setToggled,
  setCollapsed,
  setBroken
}: {
  collapsed: boolean;
  toggled: boolean;
  setCollapsed: (toggled: boolean) => void;
  setToggled: (toggled: boolean) => void;
  setBroken: (broken: boolean) => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation()?.pathname;

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400
    },
    SubMenuExpandIcon: {
      color: themes['light'].menu.hover.color
    },
    subMenuContent: ({ level }: { level: number }) => ({
      backgroundColor: level === 0 ? hexToRgba(themes['light'].menu.menuContent, !collapsed ? 0.05 : 1) : 'transparent'
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes['light'].menu.disabled.color
      },
      '&:hover': {
        backgroundColor: '#2c4fd1',
        color: '#ffffff'
      }
    }
  };

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      onBreakPoint={setBroken}
      breakPoint="md"
    >
      <Box className="sidebar-menu-content">
        <Box className="sidebar-header">
          <StyledSidebarHeader>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => navigate('/')}
            >
              <Box>
                <RequestQuoteIcon className="text-[36px]" />
              </Box>
              <Typography variant="h6" sx={{ marginLeft: convertToRem(8), whiteSpace: 'nowrap', fontWeight: 700 }}>
                MicroInvoice
              </Typography>
            </Box>
          </StyledSidebarHeader>
        </Box>
        <Menu menuItemStyles={menuItemStyles}>
          {sidebarConfig?.map(sidebar =>
            sidebar?.child?.length ? (
              <SubMenu
                onClick={() => navigate(sidebar?.path)}
                key={sidebar?.id}
                label={sidebar?.title}
                icon={sidebar?.icon}
              >
                {sidebar?.child?.map(item => (
                  <MenuItem onClick={() => navigate(item?.path)} key={item?.id} active={location.includes(item?.path)}>
                    {item?.title}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                key={sidebar?.id}
                onClick={() => navigate(sidebar?.path)}
                active={location.includes(sidebar?.path)}
                icon={sidebar?.icon}
              >
                {sidebar?.title}
              </MenuItem>
            )
          )}
        </Menu>
      </Box>
      <Box className="sidebar-footer">
        {collapsed ? (
          <Box className="sidebar-footer-closed sidebar-footer-content">
            <MenuIcon onClick={() => setCollapsed(false)} />
          </Box>
        ) : (
          <Box className="sidebar-footer-collapse sidebar-footer-content">
            <MenuOpenIcon onClick={() => setCollapsed(true)} />
          </Box>
        )}
      </Box>
    </Sidebar>
  );
};
