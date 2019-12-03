import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
    minWidth: 100,
    padding: 6
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: 0,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
});

class Sortby extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orderBy: false
    };

  }

  handleRequestSort = (event) => {
      const isDesc = this.props.order === "desc";
      this.props.updateOrder(isDesc ? "asc" : "desc")
      this.setState({ orderBy: true});
  };

  render(){

    const {classes} = this.props;

    return(
      <Button variant="outlined" color="primary" className={classes.button}>
        <TableSortLabel
          active={this.state.orderBy}
          direction={this.props.order}
          onClick={this.handleRequestSort}
        >
          Hair Rank
            <span className={classes.visuallyHidden}>
              {this.props.order === "desc" ? "sorted descending" : "sorted ascending"}
            </span>
            
        </TableSortLabel>
      </Button>);
  }
}

Sortby.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sortby)