import React, { useState, useEffect, useCallback } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";

import { FormState } from "../Context/StateProvider";

interface FormData {
  name: string;
  address: string;
  email: string;
  phone: string;
}

const generateUserId = (): string => {
  return `user-${Date.now()}`;
};

const UserForm: React.FC = () => {
  const {formData,setFormData,unsavedChanges,setUnsavedChanges} = FormState();

  const [showDialog, setShowDialog] = useState<boolean>(false); 
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Handle changes to the form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData:any) => {
      const newData = { ...prevData, [name]: value };
      setUnsavedChanges(true); // Mark changes as unsaved
      return newData;
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    const userId = generateUserId();
    const userData = { ...formData, userId };

    // Save data to localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    // Reset unsaved changes flag
    setUnsavedChanges(false);

    // Show Snackbar confirmation
    setOpenSnackbar(true);

    // Close the dialog if it's open
    setShowDialog(false);
  };

  const handleBeforeUnload = useCallback(
    (event: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        const message = "You have unsaved changes. Are you sure you want to leave?";
        return message; // Other browsers
      }
    },
    [unsavedChanges]
  );

  // Add event listener to detect browser close
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [handleBeforeUnload]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card
        sx={{
          maxWidth: "500px",
          width: "100%",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            color="primary"
          >
            User Information Form
          </Typography>
          <form noValidate>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              style={{
                marginTop: "20px",
                padding: "10px",
                fontSize: "16px",
                borderRadius: "8px",
              }}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Snackbar for submission confirmation */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: "100%" }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>

      {/* Dialog to show unsaved changes warning */}
      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        aria-labelledby="unsaved-changes-dialog"
      >
        <DialogTitle id="unsaved-changes-dialog">Unsaved Changes</DialogTitle>
        <DialogContent>
          You have unsaved changes. Are you sure you want to leave without saving?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="primary">
            Stay
          </Button>
          <Button onClick={() => handleSubmit()} color="secondary">
            Leave
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserForm;
