import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import ForumIcon from "@mui/icons-material/Forum";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [me, setMe] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [visit, setVisit] = useState({
    client_name: "",
    shop_name: "",
    phone_number: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [followups, setFollowups] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    async function loadAll() {
      const token =
        localStorage.getItem("token") || localStorage.getItem("access");
      if (!token) return navigate("/login");

      try {
        const headers = { Authorization: `Bearer ${token}` };

        const [meRes, tasksRes, followupsRes] = await Promise.all([
          axios.get("https://zoro-tech-website-backend.onrender.com/api/me/", { headers }),
          axios.get("https://zoro-tech-website-backend.onrender.com/api/user/tasks/", { headers }),
          axios.get("https://zoro-tech-website-backend.onrender.com/api/followups/", { headers }),
        ]);

        setMe(meRes.data);
        setTasks(tasksRes.data);
        setFollowups(followupsRes.data);
      } catch (err) {
        console.error("Failed to load dashboard:", err);
        localStorage.clear();
        navigate("/login");
      }
    }

    loadAll();
  }, [navigate]);

  // Add Follow-up
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token =
      localStorage.getItem("token") || localStorage.getItem("access");
    if (!token || !selectedTaskId) return;

    try {
      const res = await axios.post(
        "https://zoro-tech-website-backend.onrender.com/api/followups/",
        { task: selectedTaskId, message },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("");
      setSelectedTaskId(null);
      setFollowups((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error("Follow-up save failed:", err);
    }
  };

  // Add Additional Visit
  async function addVisit(e) {
    e.preventDefault();
    const token =
      localStorage.getItem("token") || localStorage.getItem("access");
    if (!token) return;

    // Validate phone number (must start with 6-9 and be 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(visit.phone_number)) {
      alert("Invalid phone number! Must start with 6-9 and be 10 digits.");
      return;
    }

    try {
      await axios.post("https://zoro-tech-website-backend.onrender.com/api/user/add-visit/", visit, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setVisit({ client_name: "", shop_name: "", phone_number: "", message: "" });
    } catch (err) {
      console.error("Failed to add visit:", err);
    }
  }

  if (!me) return null;

  return (
    <Box p={2} sx={{ maxWidth: "1200px", mx: "auto" }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        mt={12}
        flexWrap="wrap"
      >
        <Typography variant="h6" fontWeight="medium">
          Hello, {me.username}
        </Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>

      {/* Tasks */}
      <Paper sx={{ p: 3, mb: 5, borderRadius: 3, boxShadow: 3 }}>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <TaskAltIcon color="primary" />
          <Typography variant="h6">Today’s Tasks / Notifications</Typography>
        </Stack>
        {tasks.length === 0 && (
          <Typography color="text.secondary">No tasks yet.</Typography>
        )}
        <Grid container spacing={2}>
          {tasks.map((t) => (
            <Grid item xs={12} md={6} key={t.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 5, transform: "translateY(-3px)" },
                }}
              >
                <CardContent>
                  <Typography fontWeight="bold">
                    {t.client_name} — {t.shop_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t.message}
                  </Typography>
                  {t.phone_number && (
                    <Typography variant="body2" color="text.primary">
                      📞 {t.phone_number}
                    </Typography>
                  )}
                  <Typography
                    variant="caption"
                    display="block"
                    color="text.disabled"
                    sx={{ mt: 1 }}
                  >
                    Assigned by: {t.admin_name}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mt: 1 }}
                    onClick={() => setSelectedTaskId(t.id)}
                  >
                    Add Follow-up
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Additional Visit */}
      <Paper sx={{ p: 3, mb: 5, borderRadius: 3, boxShadow: 3 }}>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <AddBusinessIcon color="secondary" />
          <Typography variant="h6">Add Additional Visit</Typography>
        </Stack>
        <form onSubmit={addVisit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Client Name"
                value={visit.client_name}
                onChange={(e) =>
                  setVisit({ ...visit, client_name: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Shop Name"
                value={visit.shop_name}
                onChange={(e) =>
                  setVisit({ ...visit, shop_name: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Phone Number"
                value={visit.phone_number}
                onChange={(e) =>
                  setVisit({ ...visit, phone_number: e.target.value })
                }
                required
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                placeholder="Message / Notes"
                value={visit.message}
                onChange={(e) => setVisit({ ...visit, message: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Follow-up form */}
      {selectedTaskId && (
        <Paper sx={{ p: 3, mb: 5, borderRadius: 3, boxShadow: 3 }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <ForumIcon color="success" />
            <Typography variant="h6">Add Follow-up</Typography>
          </Stack>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Add follow-up..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Save Follow-up
            </Button>
          </form>
        </Paper>
      )}

      {/* My Follow-ups */}
      <Paper sx={{ p: 3, mb: 5, borderRadius: 3, boxShadow: 3 }}>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <ForumIcon color="success" />
          <Typography variant="h6">My Follow-ups</Typography>
        </Stack>
        {followups.length === 0 && (
          <Typography color="text.secondary">No follow-ups yet.</Typography>
        )}
        <Stack spacing={2}>
          {followups.map((f) => (
            <Card key={f.id} sx={{ borderRadius: 2, boxShadow: 1 }}>
              <CardContent>
                <Typography variant="body2">{f.message}</Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="caption" color="text.secondary">
                  Task: {f.task_client} — {f.task_shop} | By {f.user_name} |{" "}
                  {new Date(f.created_at).toLocaleString()}
                </Typography>
                {f.phone_number && (
                  <Typography variant="caption" display="block" color="text.primary">
                    📞 {f.phone_number}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}