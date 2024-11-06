import React, { useState, useMemo, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import Sidebar from "./Sidebar";
import UsersTable from "./UsersTable";
import SearchBar from "./SearchBar";
import { useGetAllUsersQuery, useDeleteUserMutation, useEditUserMutation } from "../../../redux/rtk/userData";
import { useSelector } from "react-redux";

const AdminUsersTable = () => {
  const token = useSelector((state) => state.userData.token);
  const { data: initialUsers = [], error } = useGetAllUsersQuery(token);
  const [deleteUser] = useDeleteUserMutation();
  const [editUserMutation] = useEditUserMutation();
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("name");
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers]);

  const handleSort = (field) => {
    const isAsc = sortField === field && sortDirection === "asc";
    setSortDirection(isAsc ? "desc" : "asc");
    setSortField(field);
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
        token,
      }).unwrap();

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );
    } catch (error) {
      console.error("Failed to edit user:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser({ id: userId, token }).unwrap();
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const filteredSortedUsers = useMemo(() => {
    let sorted = [...users];
    if (sortField) {
      sorted.sort((a, b) => {
        const aValue = a[sortField].toString().toLowerCase();
        const bValue = b[sortField].toString().toLowerCase();
        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
      });
    }

    return sorted.filter((user) => {
      const searchValue = searchQuery.toLowerCase();
      if (searchBy === "name") {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(searchValue);
      } else if (searchBy === "email") {
        return user.email.toLowerCase().includes(searchValue);
      }
      return false;
    });
  }, [users, searchQuery, searchBy, sortField, sortDirection]);

  if (error)
    return (
      <div>
        Error loading page! either you are not admin or there's an error{" "}
        {error.message}
      </div>
    );

    return (
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <Sidebar />
        <Container
          sx={{
            mt: 4,
            ml: "150px",
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 32px)",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
              User Management
            </Typography>
          </div>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchBy={searchBy}
              setSearchBy={setSearchBy}
            />
          </Box>
          <UsersTable
            users={filteredSortedUsers}
            handleSort={handleSort}
            sortField={sortField}
            sortDirection={sortDirection}
            handleEdit={handleSave}
            handleDelete={handleDelete}
          />
        </Container>
      </div>
    );
  };

export default AdminUsersTable;