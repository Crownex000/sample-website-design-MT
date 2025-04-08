import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Confetti from "react-confetti";
import "./App.css";
import icon from "./assets/surveys-grey-logo.png";
import cash1 from "./assets/cash-bundle-desktop.png";
import cash2 from "./assets/cash-bundle-mobile.png";
import arrow from "./assets/purple-down-arrow.png";
import emailIcon from "./assets/purple-icon-email.svg";

const styles = {
  container: {
    position: "relative",
  },
  emailIcon: {
    mr: 2,
    width: 24,
    height: 24,
  },
  title: {
    my: 5,
    color: "rgb(40, 16, 74)",
  },
  subtitle: {
    mb: 3,
    color: "rgb(40, 16, 74)",
  },
  subtitle2: {
    color: "rgb(149, 74, 255)",
  },
  adornment: {
    backgroundColor: "rgb(61, 61, 61)",
    border: "1px solid rgb(36, 36, 36)",
  },
  button: {
    backgroundColor: { xs: "rgb(1, 237, 65)", md: "rgb(255, 55, 1)" },
  },
  bg: {
    backgroundColor: "rgb(240, 240, 240)",
  },
  bg1: {
    p: { xs: 10, md: 20 },
    color: "rgb(255,255,255)",
    backgroundColor: "rgb(78, 22, 159)",
    clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
  },
  bg2: {
    color: "rgb(255,255,255)",
    backgroundColor: "rgb(40, 16, 74)",
  },
  bg3: {
    zIndex: -1,
    background:
      "linear-gradient(to bottom, rgb(1, 237, 65) 50%, rgb(40, 16, 74) 50%)",
  },
  formContainer: {
    m: 12,
    p: 5,
    backgroundColor: "rgb(255,255,255)",
    border: "10px solid rgb(224, 217, 233)",
    borderRadius: 3,
    position: "relative",
    zIndex: 2,
  },
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    m: { xs: 5, md: 10 },
    p: 5,
    backgroundColor: "rgb(149, 74, 255)",
  },
  img: {
    width: 'auto',
    height: { xs: 500, sm: 'auto', md: "auto" },
    position: { xs: "absolute", md: "relative" },
    zIndex: { xs: 0, md: 1 },

    top: { xs: 300, md: 0 },
    width: { xs: 300, md: "auto" },
  },
  footer: {
    p: 10,
  },
  arrow: {
    position: "absolute",
    top: -10,
  },
};

function App() {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box sx={styles.container}>
      <Confetti
        width={500}
        height={window.innerHeight / 10}
        numberOfPieces={50}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={styles.bg}
      >
        <Grid size={{ xs: 12 }}>
          <Box component="img" src={icon} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="h3" sx={styles.title}>
            Get paid for sharing your opinions.
          </Typography>
        </Grid>
        <Box component="img" src={cash1} sx={styles.img} />
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={styles.formContainer}
            spacing={2}
          >
            <Grid size={{ xs: 12 }}>
              <Typography variant="h4" sx={styles.subtitle2}>
                {isMd ? "Fast, FREE & Easy!" : "Sign Up For Free"}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                placeholder="Email address"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Box
                          component="img"
                          src={emailIcon}
                          sx={styles.emailIcon}
                        />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Typography variant="caption">
                By clicking below, I agree to receive relevant email from
                Super-Surveys and agree to the
                <a href="#">Terms & Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </Typography>
            </Grid>

            <Button fullWidth variant="contained" sx={styles.button}>
              Start Earning Now
            </Button>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box sx={styles.bg3}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              sx={styles.bg1}
            >
              <Grid size={{ xs: 12 }}>
                <Typography variant="h4">How Does It Work?</Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={styles.boxContainer}>
                  <Box component="img" src={arrow} sx={styles.arrow} />
                  <Box>
                    <Typography variant="h6" sx={styles.subtitle}>
                      {" "}
                      Step 1
                    </Typography>
                    <Typography variant="body1">
                      Sign up, it’s free, fast and easy. Sign up in 60 seconds
                      or less!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={styles.boxContainer}>
                  <Box component="img" src={arrow} sx={styles.arrow} />
                  <Box>
                    <Typography variant="h6" sx={styles.subtitle}>
                      {" "}
                      Step 2
                    </Typography>
                    <Typography variant="body1">
                      Complete the user survey and select only opportunities you
                      prefer!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }} sx={styles.bg2}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={styles.footer}
          >
            <Grid size={{ xs: 12, md: 4 }}>
              <Box component="img" src={icon} />
            </Grid>
            <Grid size={{ xs: 4 }}>
              <Grid container textAlign="center">
                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption">Terms & Conditions</Typography>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption">Privacy Policy</Typography>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption">Privacy Notice</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 4 }}>
              <Grid textAlign="center">
                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption">Contact Us</Typography>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption">Unsubscribe</Typography>
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption">
                    CA Consumers: Do Not Sell My Info
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
