import { AppBar, Typography } from '../MUI'

const date = new Date();
const currentYear = date.getFullYear()

function Footer() {
    return (
        <AppBar position="static"
            sx={{ backgroundColor: '#977E94', padding: "15px", boxShadow: 0 }}>
            <Typography variant="h4" color="white" fontWeight="bold" align="center">
                Copyright {currentYear}
            </Typography>
        </AppBar>
    )
}

export default Footer
