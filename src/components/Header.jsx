import { AppBar, Typography } from '../MUI'

function Header() {
    return (
        <AppBar position="sticky"
            sx={{ backgroundColor: '#977E94', padding: "15px", boxShadow: 0 }}>
            <Typography sx={{ fontSize: { xs: '40px', sm: '50px' } }} color="white" fontWeight="bold" align="center">
                Notes Keeper
            </Typography>
        </AppBar>
    )
}

export default Header