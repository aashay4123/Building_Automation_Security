import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  // Container,
  // Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import AppsIcon from "@material-ui/icons/Apps";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: { textDecoration: "none", color: theme.palette.text.primary },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "13.5vw", height: "90vh" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>

            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            </Link>

            <Link to="/products" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary={"Products"} />
              </ListItem>
            </Link>

            <Link to="/contactus" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ContactSupportIcon />
                </ListItemIcon>
                <ListItemText primary={"Contact Us"} />
              </ListItem>
            </Link>

            <Link to="/login" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary={"Log In"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>

        {/* <Switch>
          <Route exact path="/">
            <Container>
              <Typography variant="h3" gutterBottom>
                Home
              </Typography>{" "}
            </Container>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/about">
            <Container>
              <Typography variant="h3" gutterBottom>
                About
              </Typography>
            </Container>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/products">
            <Container>
              <Typography variant="h3" gutterBottom>
                Products
              </Typography>
            </Container>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/contactus">
            <Container>
              <Typography variant="h3" gutterBottom>
                Contact Us
              </Typography>
            </Container>
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/login">
            <Container>
              <Typography variant="h3" gutterBottom>
                Log In
              </Typography>
            </Container>
          </Route>
        </Switch> */}
      </div>
    </Fragment>
  );
};

export default App;
