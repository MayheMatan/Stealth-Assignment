import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style.css";
import { getPrettifiedTime, getStatusColor } from "../../../Utils/helpers";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, green, grey } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Label } from "../../Atoms";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  red: {
    backgroundColor: red[500],
  },
  grey: {
    backgroundColor: grey[500],
  },
  green: {
    backgroundColor: green[500],
  },
  white: {
    color: "white",
  },
}));

const pullRequest = ({
  pullRequest: { number, title, body, user, state, labels, created_at },
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={styles.pullRequest}>
      <CardHeader
        avatar={
          <Fab className={classes[getStatusColor(state)]}>{state[0]}</Fab>
        }
        title={`#${number} | ${user.login}`}
        subheader={title}
      />
      <CardMedia
        className={classes.media}
        image={user.avatar_url}
        title="PR Owner"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {labels.map(({ name, id }) => (
            <Label key={id} name={name} />
          ))}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
          {getPrettifiedTime(created_at)}
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography style={{ overflowWrap: "break-word" }} paragraph>
            {body}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default pullRequest;
