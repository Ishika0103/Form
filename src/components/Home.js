import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";

import "firebase/compat/auth";
import { auth } from "./Firebase";
function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [openSignin, setOpensignin] = useState(false);
  const [openSignup, setOpensignup] = useState(false);

  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpensignin(false);
  };

  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
    setOpensignup(false);
  };

  return (
    <div className="app">
      <Modal open={openSignup} onClose={() => setOpensignup(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                // src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
                src="https://th.bing.com/th?id=OIP.eSP3yd3r7Ii1k12X-EpaoAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
                alt=""
                width={"180"}
                height={"60"}
              />
            </center>
            <br></br>
            <Input
              placeholder="Name"
              type="text"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <br></br>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <Input
              placeholder="Contact Number"
              type="number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <br></br>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <Button type="submit" onClick={signup}>
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>

      <Modal open={openSignin} onClose={() => setOpensignin(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                // src="https://upload.wikimedia.org/wikipedia/commons/0/06/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1.png"
                src="https://clipground.com/images/signin-clipart-4.png"
                alt=""
                width={"180"}
                height={"60"}
              />
            </center>
            <br></br>

            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>

            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <Button type="submit" onClick={signin}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://static.vecteezy.com/system/resources/previews/000/176/200/original/vector-abstract-company-logo-template-design-illustration.jpg"
          alt=""
          width={"180"}
          height={"80"}
        />

        {/* onclick onchange is arrow functions used with usestate */}

        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpensignin(true);
            }}
          >
            Sign In
          </Button>
          <span>&nbsp;&nbsp;</span>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpensignup(true);
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
