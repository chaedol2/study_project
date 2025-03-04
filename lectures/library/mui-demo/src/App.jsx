import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  styled,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PREFIX = "MyPhotoAlbum";

const classes = {
  container: `${PREFIX}-container`,
  icon: `${PREFIX}-icon`,
  buttons: `${PREFIX}-buttons`,
  cardGrid: `${PREFIX}-cardGrid`,
  card: `${PREFIX}-card`,
  cardMedia: `${PREFIX}-cardMedia`,
  cardContent: `${PREFIX}-cardContent`,
  footer: `${PREFIX}-footer`,
};

const Root = styled("div")(({ theme }) => ({
  [`& .${classes.container}`]: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  [`& .${classes.icon}`]: {
    marginRight: "20px",
  },
  [`& .${classes.buttons}`]: {
    marginTop: "40px",
  },
  [`& .${classes.cardGrid}`]: {
    padding: "20px 0",
  },
  [`& .${classes.card}`]: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  [`& .${classes.cardMedia}`]: {
    paddingTop: "56.25%", // 16:9
  },
  [`& .${classes.cardContent}`]: {
    flexGrow: 1,
  },
  [`& .${classes.footer}`]: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
}));

const App = () => {
  return (
    <>
      <Root>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Hello everyone This is a photo album and I'm trying to make this
                sentence as long as possible so we can see how does it look like
                on the screen
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="http://source.unsplash.com/random"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can this section to describe
                        the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Something here to give the footer a purpose!
          </Typography>
        </footer>
      </Root>
    </>
  );
};

export default App;
