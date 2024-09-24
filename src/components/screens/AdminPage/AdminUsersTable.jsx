import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Box,
  Container,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import Sidebar from "./Sidebar"; // ייבוא של ה-Sidebar
import EditUserDialog from "./Dialogs/EditUserDialog";
import DeleteUserDialog from "./Dialogs/DeleteUserDialog";
import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useEditUserMutation,
} from "../../../redux/rtk/userData";

const AdminUsersTable = () => {
  const { data: users = [], error, refetch } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [editUserMutation] = useEditUserMutation();
  const [editUser, setEditUser] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); //ofir-לצורך שמירת הטקסט שהמשתמש ירצה לחפש לפיו
  const [searchBy, setSearchBy] = useState("name"); //ofir- לצורך שמירת הקרטריון שלפיו המשתמש ירצה לחפש

  const handleEditClick = (user) => {
    setEditUser(user);
  };

  const handleClose = () => {
    setEditUser(null);
  };

  const handleSave = async (updatedUser) => {
    try {
      await editUserMutation({
        id: updatedUser.id,
        userData: {
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          email: updatedUser.email,
          role: updatedUser.role,
        },
      }).unwrap();

      refetch();
    } catch (error) {
      console.error("Failed to edit user:", error);
    }
  };

  const handleDeleteClick = (user) => {
    setDeleteConfirmation(user);
  };

  const handleDeleteConfirm = async () => {
    if (deleteConfirmation) {
      try {
        await deleteUser(deleteConfirmation.id).unwrap();
        setDeleteConfirmation(null);
        refetch();
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    }
  };

  const handleDeleteClose = () => {
    setDeleteConfirmation(null);
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = searchQuery.toLowerCase();
      if (searchBy === "name") {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(searchValue);
      } else if (searchBy === "email") {
        return user.email.toLowerCase().includes(searchValue);
      }
      return false;
    });
  }, [users, searchQuery, searchBy, error]);

  if (error) return <div>Error loading users: {error.message}</div>;

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content container */}
      <Container
        sx={{
          mt: 4,
          ml: "150px",
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 32px)", // Subtracting top margin
          overflow: "hidden", // Prevent scrolling on the container
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mb: 4,
            background: "linear-gradient(45deg, #2196F3, #21CBF3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Users Management
        </Typography>

        {/* ofir- יצירת איזור חיפוש שבו המשתמש יוכל לבחור אופציה שלפיה הוא יחפש ולהקליד את המילה הספציפית שלפיה יחפש */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="email">Email</MenuItem>
            {/*<MenuItem value="lastName">Last Name</MenuItem>*/}
          </Select>
        </Box>
        {/*ofir*/}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              borderRadius: 2,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Edit</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" },
                      "&:hover": { backgroundColor: "#f1f1f1" },
                    }}
                  >
                    <TableCell>{user.id}</TableCell>
                    <TableCell>
                      {user.firstName} {user.lastName}
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#21CBF3",
                          "&:hover": { backgroundColor: "#1e88e5" },
                          borderRadius: "20px",
                          textTransform: "none",
                        }}
                        size="small"
                        onClick={() => handleEditClick(user)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#ff4444",
                          "&:hover": { backgroundColor: "#cc0000" },
                          borderRadius: "20px",
                          textTransform: "none",
                        }}
                        size="small"
                        onClick={() => handleDeleteClick(user)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <EditUserDialog
            open={Boolean(editUser)}
            user={editUser}
            onClose={handleClose}
            onSave={handleSave}
          />
          <DeleteUserDialog
            open={Boolean(deleteConfirmation)}
            onClose={handleDeleteClose}
            onDelete={handleDeleteConfirm}
          />
        </Box>
      </Container>
    </div>
  );
};

export default AdminUsersTable;
