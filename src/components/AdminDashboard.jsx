import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  Stack,
  Chip,
  CircularProgress,
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ForumIcon from "@mui/icons-material/Forum";

export default function AdminDashboard() {
  const [me, setMe] = useState(null);
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [visits, setVisits] = useState([]);
  const [followups, setFollowups] = useState([]);
  const [form, setForm] = useState({
    user: "",
    client_name: "",
    shop_name: "",
    phone_number: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 Edit Dialog State
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editType, setEditType] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const loadAll = async () => {
    try {
      setLoading(true);
      const token =
        localStorage.getItem("token") || localStorage.getItem("access");
      if (!token) return navigate("/login");
      const headers = { Authorization: `Bearer ${token}` };

      const [meRes, u, t, v, f] = await Promise.all([
        axios.get("https://zoro-tech-website-backend.onrender.com/api/me/", { headers }),
        axios.get("https://zoro-tech-website-backend.onrender.com/api/admin/users/", { headers }),
        axios.get("https://zoro-tech-website-backend.onrender.com/api/admin/tasks/", { headers }),
        axios.get("https://zoro-tech-website-backend.onrender.com/api/admin/visits/", { headers }),
        axios.get("https://zoro-tech-website-backend.onrender.com/api/followups/", { headers }),
      ]);

      setMe(meRes.data);
      setUsers(u.data);
      setTasks(t.data);
      setVisits(v.data);

      const mappedFollowups = f.data.map((fu) => {
        const parentTask = t.data.find((task) => task.id === fu.task);
        return { ...fu, task_status: parentTask?.status || "pending" };
      });
      setFollowups(mappedFollowups);
    } catch (err) {
      console.error(err);
      localStorage.clear();
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  const validatePhone = (phone) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(phone);
  };

  const assignTask = async (e) => {
    e.preventDefault();
    if (!validatePhone(form.phone_number)) {
      setPhoneError("Phone number must start with 6-9 and be 10 digits long.");
      return;
    }
    setPhoneError("");
    try {
      const token =
        localStorage.getItem("token") || localStorage.getItem("access");
      await axios.post("https://zoro-tech-website-backend.onrender.com/api/admin/assign-task/", form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setForm({
        user: "",
        client_name: "",
        shop_name: "",
        phone_number: "",
        message: "",
      });

      Swal.fire({
        icon: "success",
        title: "Task Assigned!",
        text: "The task has been assigned successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      loadAll();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to assign task. Please try again!",
      });
    }
  };

  const editItem = async (url, payload) => {
    try {
      const token =
        localStorage.getItem("token") || localStorage.getItem("access");
      await axios.patch(url, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Changes saved successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      await loadAll();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Could not update item. Please try again.",
      });
    }
  };

  const updateStatus = (type, id, newStatus) => {
    let url = `https://zoro-tech-website-backend.onrender.com/api/admin/${type}/${id}/`;
    editItem(url, { status: newStatus });
  };

  const getStatusChip = (status) => {
    const map = {
      pending: { label: "Pending", color: "warning" },
      completed: { label: "Completed", color: "success" },
      no_need: { label: "No Need", color: "default" },
    };
    return (
      <Chip
        label={map[status]?.label || "Pending"}
        color={map[status]?.color}
        size="small"
      />
    );
  };

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Box p={2} sx={{ maxWidth: "1300px", mx: "auto" }}>
      {/* Header */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        mt={12}
      >
        <Typography variant="body1" fontWeight="medium">
          Hello, {me.username}
        </Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{ mt: { xs: 1, sm: 0 } }}
        >
          Logout
        </Button>
      </Box>

      {/* Assign Task Form */}
      <Paper
        sx={{
          p: 3,
          mb: 5,
          borderRadius: 3,
          boxShadow: 4,
          background: "#f9f9f9",
        }}
      >
        <Typography variant="h6" mb={2}>
          Assign Task
        </Typography>
        <form onSubmit={assignTask}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Select
                fullWidth
                value={form.user}
                onChange={(e) => setForm({ ...form, user: e.target.value })}
                displayEmpty
                required
              >
                <MenuItem value="">Select User</MenuItem>
                {users
                  .filter((u) => !u.is_staff)
                  .map((u) => (
                    <MenuItem key={u.id} value={u.id}>
                      {u.username}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                placeholder="Client Name"
                value={form.client_name}
                onChange={(e) =>
                  setForm({ ...form, client_name: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                placeholder="Shop Name"
                value={form.shop_name}
                onChange={(e) =>
                  setForm({ ...form, shop_name: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                placeholder="Phone Number"
                value={form.phone_number}
                onChange={(e) =>
                  setForm({ ...form, phone_number: e.target.value })
                }
                required
                error={!!phoneError}
                helperText={phoneError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Notes"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ width: "100%" }}
              >
                Assign Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Sections */}
      {[
        {
          title: "Tasks",
          icon: <TaskAltIcon color="primary" />,
          items: tasks,
          type: "tasks",
          showUser: true,
        },
        {
          title: "Additional Visits",
          icon: <AddBusinessIcon color="secondary" />,
          items: visits,
          type: "visits",
          showUser: true,
        },
        {
          title: "Followups",
          icon: <ForumIcon color="success" />,
          items: followups,
          type: "followups",
          showUser: false,
        },
      ].map((section) => (
        <Box key={section.title} mb={5}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            {section.icon}
            <Typography variant="h6">{section.title}</Typography>
          </Stack>
          <Grid container spacing={2}>
            {section.items.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "translateY(-3px)" },
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      background:
                        "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                      color: "#fff",
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.client_name || item.task_client} —{" "}
                      {item.shop_name || item.task_shop}
                    </Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="body2" mb={1}>
                      {item.message}
                    </Typography>

                    {item.phone_number && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mb={1}
                      >
                        📞 {item.phone_number}
                      </Typography>
                    )}

                    {item.super_message && (
                      <Box
                        sx={{
                          bgcolor: "#E8F5E9",
                          p: 1,
                          borderRadius: 1,
                          mb: 1,
                          border: "1px solid #C8E6C9",
                        }}
                      >
                        <Typography
                          variant="caption"
                          display="block"
                          color="text.secondary"
                          sx={{ fontWeight: "bold" }}
                        >
                          Zoro-Tech:
                        </Typography>
                        <Typography variant="body2">
                          {item.super_message}
                        </Typography>
                      </Box>
                    )}

                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      alignItems="center"
                      mb={1}
                    >
                      {getStatusChip(item.status || item.task_status)}
                      {section.type !== "followups" && (
                        <Select
                          size="small"
                          value={item.status || item.task_status}
                          onChange={(e) =>
                            updateStatus(section.type, item.id, e.target.value)
                          }
                        >
                          <MenuItem value="pending">Pending</MenuItem>
                          <MenuItem value="completed">Completed</MenuItem>
                          <MenuItem value="no_need">No Need</MenuItem>
                        </Select>
                      )}
                      {me.is_staff && section.type !== "followups" && (
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => {
                            setEditData(item);
                            setEditType(section.type);
                            setEditOpen(true);
                          }}
                        >
                          Edit
                        </Button>
                      )}
                    </Stack>

                    <Divider sx={{ my: 1 }} />
                    <Typography
                      variant="caption"
                      display="block"
                      color="text.secondary"
                    >
                      {section.showUser && `By: ${item.user_name}`} <br />
                      {`Created: ${format(
                        new Date(item.created_at),
                        "dd-MM-yyyy hh:mm a"
                      )}`}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      {/* Edit Dialog */}
      <Dialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {editType === "tasks" ? "Edit Task" : "Edit Additional Visit"}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Client Name"
            value={editData?.client_name || ""}
            onChange={(e) =>
              setEditData({ ...editData, client_name: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="normal"
            label="Shop Name"
            value={editData?.shop_name || ""}
            onChange={(e) =>
              setEditData({ ...editData, shop_name: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone Number"
            value={editData?.phone_number || ""}
            onChange={(e) =>
              setEditData({ ...editData, phone_number: e.target.value })
            }
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            value={editData?.message || ""}
            onChange={(e) =>
              setEditData({ ...editData, message: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={async () => {
              if (!editData) return;
              if (!validatePhone(editData.phone_number)) {
                Swal.fire({
                  icon: "error",
                  title: "Invalid Phone",
                  text: "Phone number must start with 6-9 and be 10 digits.",
                });
                return;
              }
              await editItem(
                `http://localhost:8000/api/admin/${editType}/${editData.id}/`,
                editData
              );
              setEditOpen(false);
            }}
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}