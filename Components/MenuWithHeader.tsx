import { FC, useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { ListItem, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BsCash, BsCreditCard2Back, BsGearFill, BsHouseDoor } from 'react-icons/bs';
import { darkTheme } from '../Config/config';
import Link from 'next/link';

interface Props {
    children: any
}

interface MenuIterface {
    type: 'list' | 'divider';
    items: Array<MenuItemsInterface>;
}

interface MenuItemsInterface {
    title?: string;
    icon: React.ReactNode;
    linkUrl: string;
}

const drawerWidth = 240;

const menuList: Array<MenuIterface> = [
    { type: 'list', items: [
        { title: 'Home', icon: <BsHouseDoor />, linkUrl: '/'  },
        { title: 'Parcelas', icon: <BsCreditCard2Back />, linkUrl: '/parcelas'  },
        { title: 'Fluxo de Caixa', icon: <BsCash />, linkUrl: '/fluxo-caixa' }
    ] },
    { type: 'divider', items: [] },
    { type: 'list', items: [
        { title: 'Configurações', icon: <BsGearFill />, linkUrl: '/configuracoes' }
    ] },
]


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MenuWithHeader: FC<Props> = ({ children }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                        marginRight: 5,
                        ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Custom Planner App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider /> 

                { menuList.map((menuItems, menuIndex) => {
                    if (menuItems.type === 'list') {
                        return (
                            <List>
                                { menuItems.items.map((items, index) => (
                                     <Link key={index} href={ items.linkUrl } passHref>
                                        <ListItemButton
                                            key={items.title}
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: open ? 'initial' : 'center',
                                                px: 2.5,
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: open ? 3 : 0,
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                { items.icon }
                                            </ListItemIcon>
                                            <ListItemText primary={items.title} sx={{ display: open ? 'block' : 'none' }} />
                                        </ListItemButton>
                                    </Link>
                                )) }
                            </List>
                        );
                    } else {
                        return <Divider />;
                    }
                }) }
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                
                { children }
            </Box>
        </Box>
    )
}

export default MenuWithHeader;