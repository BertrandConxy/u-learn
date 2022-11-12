import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import { GiTeacher } from 'react-icons/gi';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../assets/u-learn-logo.png';
import useStyles from './styles';

const LeftNav = ({ mobileOpen, handleDrawerToggle }) => {
  const classes = useStyles();
  const drawerWidth = 240;
  const drawer = (
    <>
      <Toolbar
        sx={{
          px: [1],
        }}
      >
        <img src={Logo} alt="logo" style={{ width: '100%' }} />
      </Toolbar>
      <List
        sx={{
          mt: 12,
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              disablePadding
              className={classes.ListIcon}
            >
              <GiTeacher />
            </ListItemIcon>
            <ListItemText
              className={{ Primary: classes.ListText }}
              primary="Tutors"
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <GiTeacher />
            </ListItemIcon>
            <ListItemText primary="Tutors" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon disablePadding>
              <GiTeacher />
            </ListItemIcon>
            <ListItemText primary="Tutors" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon disablePadding>
              <GiTeacher />
            </ListItemIcon>
            <ListItemText primary="Tutors" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon disablePadding>
              <GiTeacher />
            </ListItemIcon>
            <ListItemText primary="Tutors" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderWidth: '3px' },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

LeftNav.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default LeftNav;
