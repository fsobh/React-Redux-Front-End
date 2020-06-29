//table, buttons , and icons
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
//dialog imports
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import React, { useEffect } from "react";
import animalHandler from "../AnimalHandler/AnimalHandler";
import { connect } from "react-redux";
//import { fetchAnimals, addAnimal } from "../AnimalReducers/AnimalDataReducer";





const useStyles = makeStyles({
  table: {
    minWidth: 600,
    textAlign: "center",
  },
});

let Home = (props) => {
  useEffect(() => {
    animalHandler.getAllAnimals();
  }, []);
  // Empty --> update on initial render only
  // no array --> updates on neverything

  //for using and closing the add animal modal

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  //Add animal dialog and input
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");
//=========================================================================
  //Edit animal and dialog
  const [selectedAnimal, setSelectedAnimal] = React.useState(null)
  const [editType, setEditTypeInput] = React.useState("")

  const [openEditDialog, setOpenEditDialog] = React.useState(false);

  const handleEditClickOpen = () => {
    setOpenEditDialog(true);
  };

  const handleEditClose = (value) => {
    setOpenEditDialog(false)
    setSelectedAnimal(null)
  };


  const classes = useStyles();

  return (
    <div style={{ marginTop: "60px" }}>
      <h3 style={{ textAlign: "center", color: "#000" }}>
        Available Animals ({props.animals.length})
      </h3>

      <TableContainer component={Paper} style={{ marginBottom: "60px" }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#DCDCDC" }}>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Type
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                ID
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Edit
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.animals.length !== 0 ? (
              props.animals.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">
                    <Button
                      style={{
                        margin: 5,
                        backgroundColor: "#f0ad4e",
                        justifyContent: "center",
                      }}
                      variant="contained"
                      className={classes.button}
                      onClick={() => {
                        
                        handleEditClickOpen()
                        setSelectedAnimal(row.id)
                      }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      style={{
                        margin: 5,

                        justifyContent: "center",
                      }}
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      onClick={() => {                                    // -- HERE
                        animalHandler.delAnimal(row.id);
                        animalHandler.getAllAnimals();
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <h2>No Animals in List</h2>
            )}
          </TableBody>
        </Table>
        <Button
          style={{ margin: 10, width: "90%", justifyContent: "center" }}
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClickOpen}
          endIcon={<AddIcon />}
        >
          Add New Animal
        </Button>
      </TableContainer>

      {/**Dialog for Add new Animal */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new Animal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the corresponding input fields with the necessay data
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Animal Name"
            type="name"
            fullWidth
            value={name}
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
            style={{ margin: 10 }}
          />
          <TextField
            margin="dense"
            id="type"
            label="Animal Type"
            type="name"
            value={type}
            fullWidth
            onChange={(e) => {
              console.log(e.target.value);
              setType(e.target.value);
            }}
            style={{ margin: 10 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              animalHandler.addNewAnimal({ name: name, type: type });

              animalHandler.getAllAnimals();
              handleClose();

              setName("");
              setType("");
              console.log(props.animals.length);
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/*Dialog for edit animal */}

      <Dialog
        open={openEditDialog}
        onClose={handleEditClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Animal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the corresponding input fields with the necessay data
          </DialogContentText>
          
          <TextField
            margin="dense"
            id="typeEdit"
            label="Animal Type"
            type="name"
            value={editType}
            fullWidth
            onChange={(e) => {
              console.log(e.target.value);
              setEditTypeInput(e.target.value);
            }}
            style={{ margin: 10 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              //edit here
              animalHandler.edtAnimal(selectedAnimal,editType)               //here
              animalHandler.getAllAnimals()
              handleEditClose()
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    animals: state.animal.animals,
  };
}

export { Home };
export default connect(mapStateToProps)(Home);
