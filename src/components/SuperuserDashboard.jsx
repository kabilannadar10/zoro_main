import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Chip,
  Stack,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function SuperuserDashboard() {
  const [data, setData] = useState({
    tasks: [],
    additional_visits: [],
    followups: [],
  });
  const [loading, setLoading] = useState(true);
  const [adminMessage, setAdminMessage] = useState({});
  const [me, setMe] = useState(null);
  const navigate = useNavigate();

  // Fetch dashboard
  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("access");
      if (!token) return navigate("/login");

      const [dashboardRes, meRes] = await Promise.all([
        axios.get("https://zoro-tech-website-backend.onrender.com/api/superuser/dashboard/", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("https://zoro-tech-website-backend.onrender.com/api/me/", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setData(dashboardRes.data);
      setMe(meRes.data);
    } catch (err) {
      console.error("Failed to fetch dashboard:", err);
      localStorage.clear();
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
    const interval = setInterval(fetchDashboard, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Delete items
  const deleteItem = async (type, id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    let url = "";
    if (type === "task") url = `https://zoro-tech-website-backend.onrender.com/api/admin/tasks/${id}/`;
    else if (type === "visit")
      url = `https://zoro-tech-website-backend.onrender.com/api/admin/visits/${id}/`;
    else if (type === "followup")
      url = `https://zoro-tech-website-backend.onrender.com/api/admin/followups/${id}/`;

    try {
      const token = localStorage.getItem("access");
      await axios.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchDashboard();
    } catch (err) {
      console.error(err);
      alert("Failed to delete item.");
    }
  };

  // Send admin message
  const sendAdminMessage = async (taskId) => {
    if (!adminMessage[taskId]) return alert("Message cannot be empty");
    try {
      const token = localStorage.getItem("access");
      await axios.post(
        `https://zoro-tech-website-backend.onrender.com/api/superuser/tasks/${taskId}/message/`,
        { super_message: adminMessage[taskId] },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAdminMessage({ ...adminMessage, [taskId]: "" });
      fetchDashboard();
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  // Export Excel
  const exportExcel = () => {
    const taskSheet = data.tasks.map((t) => ({
      Client: t.client_name,
      Shop: t.shop_name,
      Phone: t.phone_number,  
      User: t.user_name,
      Message: t.message,
      SuperMessage: t.super_message || "",
      Status: t.status,
      Date: format(new Date(t.created_at), "dd-MM-yyyy hh:mm a"),
    }));

    const visitSheet = data.additional_visits.map((v) => ({
      Client: v.client_name,
      Shop: v.shop_name,
      Phone: v.phone_number,   
      User: v.user_name,
      Message: v.message,
      Status: v.status,
      Date: format(new Date(v.created_at), "dd-MM-yyyy hh:mm a"),
    }));

    const followupSheet = data.followups.map((f) => ({
      Task: f.task_client + " - " + f.task_shop,
      Phone: f.phone_number,   
      User: f.user_name,
      Message: f.message,
      Status: f.status,
      Date: format(new Date(f.created_at), "dd-MM-yyyy hh:mm a"),
    }));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(
      workbook,
      XLSX.utils.json_to_sheet(taskSheet),
      "Tasks"
    );
    XLSX.utils.book_append_sheet(
      workbook,
      XLSX.utils.json_to_sheet(visitSheet),
      "Visits"
    );
    XLSX.utils.book_append_sheet(
      workbook,
      XLSX.utils.json_to_sheet(followupSheet),
      "Followups"
    );

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const fileData = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(
      fileData,
      `superuser-report-${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  };

  // Status Stripe
  const StatusStripe = ({ status }) => {
    const colors = { pending: "#FFD54F", completed: "#4CAF50", no_need: "#BDBDBD" };
    return <Box sx={{ width: 6, height: "100%", borderRadius: 1, backgroundColor: colors[status] || "#FFD54F", mr: 2 }} />;
  };

  // Custom Status Chip
  const StatusChip = ({ status }) => {
    const statusMap = {
      pending: { label: "Pending", bgcolor: "#FFD54F", color: "#000" },
      completed: { label: "Completed", bgcolor: "#4CAF50", color: "#fff" },
      no_need: { label: "No Need", bgcolor: "#BDBDBD", color: "#000" },
    };
    const s = statusMap[status] || statusMap["pending"];
    return <Chip label={s.label} sx={{ backgroundColor: s.bgcolor, color: s.color, fontWeight: "bold", height: 24 }} size="small" />;
  };

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );

  return (
    <Box p={3}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={12} mb={4}>
        <Typography variant="h6">Welcome, {me?.username}</Typography>
        <Button variant="contained" color="error" startIcon={<LogoutIcon />} onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      {/* Export */}
      <Box mb={4}>
        <Button variant="contained" color="success" startIcon={<FileDownloadIcon />} onClick={exportExcel}>
          Export Excel
        </Button>
      </Box>

      {/* Tasks */}
      <Typography variant="h5" mb={2}>Tasks</Typography>
      <Grid container spacing={3} mb={4}>
        {data.tasks.map((task) => (
          <Grid item xs={12} md={6} lg={4} key={task.id}>
            <Card sx={{ display: "flex", borderRadius: 3, overflow: "hidden", boxShadow: 4, transition: "transform 0.2s", "&:hover": { transform: "scale(1.02)" } }}>
              <StatusStripe status={task.status} />
              <Box sx={{ flexGrow: 1 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">{task.client_name} - {task.shop_name}</Typography>
                  <Typography variant="body2" fontStyle="italic" mb={1}>{task.user_name}</Typography>
                  <Typography variant="body2" color="text.secondary"> {task.phone_number}</Typography>

                  <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" color="text.secondary">Task Message:</Typography>
                    <Box sx={{ p: 1, mt: 0.5, bgcolor: "#F0F0F0", borderRadius: 1 }}>{task.message}</Box>
                  </Box>

                  <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" color="text.secondary">Sended Message:</Typography>
                    <Box sx={{ p: 1, mt: 0.5, bgcolor: "#E8F5E9", borderRadius: 1 }}>{task.super_message || "—"}</Box>
                  </Box>

                  <StatusChip status={task.status} sx={{ mt: 1 }} />

                  <Typography variant="caption" display="block" color="text.secondary">Created: {format(new Date(task.created_at), "dd-MM-yyyy hh:mm a")}</Typography>

                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1} mt={2}>
                    <TextField
                      label="Message to Admin"
                      size="small"
                      fullWidth
                      value={adminMessage[task.id] || ""}
                      onChange={(e) => setAdminMessage({ ...adminMessage, [task.id]: e.target.value })}
                    />
                    <Button variant="contained" color="primary" startIcon={<SendIcon />} onClick={() => sendAdminMessage(task.id)} sx={{ px: 3 }}>Send</Button>
                    <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => deleteItem("task", task.id)} sx={{ px: 3 }}>Delete</Button>
                  </Stack>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Additional Visits */}
      <Typography variant="h5" mb={2}>Additional Visits</Typography>
      <Grid container spacing={3} mb={4}>
        {data.additional_visits.map((visit) => (
          <Grid item xs={12} md={6} lg={4} key={visit.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">{visit.client_name} - {visit.shop_name}</Typography>
                <Typography variant="body2" mb={1}>{visit.user_name}</Typography>
                <Typography variant="body2" color="text.secondary"> {visit.phone_number}</Typography>
                <Typography variant="body2" sx={{ bgcolor: "#F3F3F3", p: 1, borderRadius: 1 }}>{visit.message}</Typography>
                <StatusChip status={visit.status} sx={{ mt: 1 }} />
                <Typography variant="caption" display="block" color="text.secondary" mt={1}>Added: {format(new Date(visit.created_at), "dd-MM-yyyy hh:mm a")}</Typography>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />} sx={{ mt: 2 }} onClick={() => deleteItem("visit", visit.id)}>Delete</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* FollowUps */}
      <Typography variant="h5" mb={2}>FollowUps</Typography>
      <Grid container spacing={3}>
        {data.followups.map((fu) => (
          <Grid item xs={12} md={6} lg={4} key={fu.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">{fu.task_client} - {fu.task_shop}</Typography>
                <Typography variant="body2" mb={1}>{fu.user_name}</Typography>
                <Typography variant="body2" color="text.secondary"> {fu.phone_number}</Typography>
                <Typography variant="body2" sx={{ bgcolor: "#FFF3E0", p: 1, borderRadius: 1 }}>{fu.message}</Typography>
                <StatusChip status={fu.status} sx={{ mt: 1 }} />
                <Typography variant="caption" display="block" color="text.secondary" mt={1}>Created: {format(new Date(fu.created_at), "dd-MM-yyyy hh:mm a")}</Typography>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />} sx={{ mt: 2 }} onClick={() => deleteItem("followup", fu.id)}>Delete</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SuperuserDashboard;