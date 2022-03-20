import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined, AccountBalanceSharp, PeopleAltSharp, LibraryBooksSharp, ClassSharp, PersonSharp, TrendingDownSharp, Settings, ExitToAppSharp } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';





const drawerWidth = 240;

const col = '#1D1D1D'
const bcol = '#414141'

const useStyles = makeStyles((theme) => ({
  page: {
    width: '100%'
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: col,
    color: 'white'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: col,
    color: 'white',
    padding: '10px',



  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: 
    {  width: theme.spacing(9.5),  },
    background: col,
    color: 'white',
    padding: '10px',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    color: 'white'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  DrawerIcons: {
    color: 'white'
  },
  active: {
    background: 'grey',
    borderRadius: '10px',
    '&:hover': {
      background: 'grey',
    }
  },
  notactive: {
    borderRadius: '10px',
    '&:hover': {
      background: '#333333',
      color: '#F5F5F5',
    }
  },
  ListItems: {
    width: '100%',

  },
  ListItem: {
    margin: '1rem 0 '
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
  }

}));


const menuItemstop = [
  {
    text: 'Dashbord',
    icon: <AccountBalanceSharp />,
    path: '/'
  },
  {
    text: 'Students',
    icon: <PeopleAltSharp />,
    path: '/students'
  },
  {
    text: 'Courses',
    icon: <LibraryBooksSharp />,
    path: '/courses'
  },
  {
    text: 'Teachers',
    icon: <PersonSharp />,
    path: '/teachers'
  },
  {
    text: 'Classes',
    icon: <ClassSharp />,
    path: '/classes'
  },
  {
    text: 'Expences',
    icon: <TrendingDownSharp />,
    path: '/expences'
  },
];

const menuItemsButtom = [
  {
    text: 'Setting',
    icon: <SettingsIcon />,
    path: '/setting'
  },
  {
    text: 'Logout',
    icon: <ExitToAppIcon />,
    path: '/logout'
  },

];

export default function Layout({ children }) {

  const Navigate = useNavigate()
  const location = useLocation()
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>

      {/* App Bar */}
      <CssBaseline />
      <AppBar
      
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>



      {/* Side Drower */}
      <Drawer

        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <div><Typography variant="h5" color="initial">Logo</Typography></div>
          <div> <IconButton className={classes.DrawerIcons} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <DragHandleIcon /> : <DragHandleIcon />}
          </IconButton>
          </div>

        </div>

        <div className={classes.links}>
          <List className={classes.ListItems}>
            {menuItemstop.map((item) => (
              <div className={classes.ListItem}>
                <ListItem
                  button
                  key={item.text}
                  onClick={() => Navigate(item.path)}
                  className={location.pathname.split('/')[1] == item.path.split('/')[1] ? classes.active : classes.notactive}
                >
                  <ListItemIcon className={classes.DrawerIcons} >{item.icon} </ListItemIcon>
                  <ListItemText primary={item.text} />

                </ListItem>
              </div>

            ))}
          </List>
          <List className={classes.ListItems}>
            {menuItemsButtom.map((item) => (
              <div className={classes.ListItem}>
                <ListItem
                  button
                  key={item.text}
                  onClick={() => Navigate(item.path)}
                  className={location.pathname == item.path ? classes.active : classes.notactive}
                >
                  <ListItemIcon className={classes.DrawerIcons} >{item.icon} </ListItemIcon>
                  <ListItemText primary={item.text} />

                </ListItem>
              </div>

            ))}
          </List>
        </div>

      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.page}>
          {children}
        </div>
      </main>
    </div>
  )
}