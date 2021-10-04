import { Container } from "@material-ui/core/";
import { Grid } from "@material-ui/core/";
import { Box } from "@material-ui/core/";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="text.secondary" color="white">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid className="gridContainer" item xs={12} sm={4}>
              <Box className="boxTitle" borderBottom={1}>
                Help
              </Box>
              <Box>
                <Link className="classFooter" to="/" color="white">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link className="classFooter" to="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link className="classFooter" to="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="boxTitle" borderBottom={1}>
                Account
              </Box>
              <Box>
                <Link className="classFooter" to="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link className="classFooter" to="/" color="inherit">
                  Register
                </Link>
              </Box>
              <Box>
                <Link className="classFooter" to="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="boxTitle" borderBottom={1}>
                Messages
              </Box>
              <Box>
                <Link className="classFooter" to="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link className="classFooter" to="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link className="classFooter" to="/" color="inherit">
                  Media
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Shinji Sato &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
