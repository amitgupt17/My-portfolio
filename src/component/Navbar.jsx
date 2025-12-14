import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import EmailIcon from '@mui/icons-material/Email';

// Data Structure: Array of Objects
const navItems = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'About', icon: <PersonIcon /> },
    { label: 'Projects', icon: <FolderOpenIcon /> },
    { label: 'Contact', icon: <EmailIcon /> },
];

export default function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    // --- MOBILE DRAWER (Pop-out Menu) ---
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, color: 'var(--color-accent)', fontWeight: 'bold' }}>
                Amit Gupta
            </Typography>
            <List>
                {navItems.map((item) => (
                    // FIX 1: Use item.label for key
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton 
                            component="a" 
                            // FIX 2: Use item.label for href
                            href={`#${item.label.toLowerCase()}`} 
                            sx={{ textAlign: 'left', pl: 4 }}
                        >
                            {/* FIX 3: Render item.icon */}
                            <ListItemIcon sx={{ color: 'var(--color-accent)', minWidth: '40px' }}>
                                {item.icon}
                            </ListItemIcon>
                            {/* FIX 4: Render item.label text */}
                            <ListItemText primary={item.label} sx={{ color: 'var(--color-text-main)' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" position="fixed" sx={{ backgroundColor: 'var(--color-surface)', boxShadow: 3 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: 'var(--color-accent)' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'var(--color-accent)', fontWeight: 'bold' }}
                    >
                        Amit Gupta
                    </Typography>
                    
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button 
                                key={item.label} 
                                component="a"
                                href={`#${item.label.toLowerCase()}`}
                                // FIX 5: Add startIcon prop to show icon on Desktop
                                startIcon={item.icon}
                                sx={{ 
                                    color: '#fff', 
                                    mx: 1,
                                    '&:hover': { color: 'var(--color-accent)' },
                                    // Ensure the icon also turns accent color on hover if needed
                                    '& .MuiButton-startIcon': { color: 'var(--color-accent)' }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { 
                            boxSizing: 'border-box', 
                            width: 240, 
                            backgroundColor: 'var(--color-surface)',
                            borderRight: '1px solid #334155'
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
Navbar.propTypes = { window: PropTypes.func };