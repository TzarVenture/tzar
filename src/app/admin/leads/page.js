"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
const logoImg = "/tzar.adce704f.png";
import "./adminLeads.css";

import {
  Search,
  Download,
  Lock,
  RefreshCw,
  LogOut,
  Mail,
  Phone,
  FileText,
  Briefcase,
  Users,
  CheckCircle,
  AlertCircle,
  Eye,
  Trash2,
  X,
  ExternalLink,
  Calendar,
  ArrowUpDown,
  Copy,
  Check,
  Globe,
  MessageCircle,
  ShieldCheck,
  QrCode,
  Smartphone,
} from "lucide-react";

export default function AdminLeadsPage() {
  const [passcode, setPasscode] = useState("");
  const [authMode, setAuthMode] = useState("passcode"); // "passcode" or "2fa"
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [copiedField, setCopiedField] = useState("");

  // 2FA Setup State
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);
  const [test2FACode, setTest2FACode] = useState("");
  const [test2FAResult, setTest2FAResult] = useState(null);

  const [allLeads, setAllLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Date Filtering & Sorting States
  const [sortOrder, setSortOrder] = useState("desc");
  const [datePreset, setDatePreset] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [selectedLead, setSelectedLead] = useState(null);

  // Check stored passcode on mount
  useEffect(() => {
    const savedPass = localStorage.getItem("tzar_admin_pass");
    if (savedPass) {
      fetchLeads(savedPass);
    }
  }, []);

  const fetchLeads = async (passParam) => {
    const passToUse =
      passParam || passcode || (typeof window !== "undefined" && localStorage.getItem("tzar_admin_pass"));

    if (!passToUse) return;

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: passToUse }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setError(json.error || "Invalid passcode or 6-digit Authenticator code");
        setIsAuthenticated(false);
        if (typeof window !== "undefined") {
          localStorage.removeItem("tzar_admin_pass");
        }
        setLoading(false);
        return;
      }

      setIsAuthenticated(true);
      setPasscode(passToUse);
      if (typeof window !== "undefined") {
        localStorage.setItem("tzar_admin_pass", passToUse);
      }

      const combined = [
        ...(json.data.contacts || []),
        ...(json.data.hireus || []),
        ...(json.data.webdevs || []),
      ];

      setAllLeads(combined);
    } catch (err) {
      console.error(err);
      setError("Network error. Please check connection.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch 2FA Setup QR Code
  const open2FASetup = async () => {
    setShow2FAModal(true);
    setTest2FAResult(null);
    try {
      const res = await fetch("/api/admin/2fa");
      const json = await res.json();
      if (json.success) {
        setQrCodeData(json);
      }
    } catch (e) {
      console.error("Failed to load 2FA QR code", e);
    }
  };

  // Test 2FA Verification inside Setup Modal
  const handleTest2FA = async (e) => {
    e.preventDefault();
    setTest2FAResult(null);
    try {
      const res = await fetch("/api/admin/2fa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: test2FACode }),
      });
      const json = await res.json();
      if (json.success) {
        setTest2FAResult({ success: true, message: "Code Verified! Google Authenticator 2FA is working correctly." });
      } else {
        setTest2FAResult({ success: false, message: json.error || "Invalid 6-digit code. Try again." });
      }
    } catch (err) {
      setTest2FAResult({ success: false, message: "Error verifying code." });
    }
  };

  // Delete Lead Handler
  const handleDeleteLead = async (lead) => {
    if (!lead || !lead.id) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete lead entry for "${lead.name}"? This action cannot be undone.`
    );
    if (!confirmed) return;

    setDeletingId(lead.id);
    setError("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/admin/leads", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: lead.id,
          type: lead.type,
          passcode: passcode || localStorage.getItem("tzar_admin_pass"),
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setError(json.error || "Failed to delete lead");
        return;
      }

      setAllLeads((prev) => prev.filter((item) => item.id !== lead.id));
      if (selectedLead && selectedLead.id === lead.id) {
        setSelectedLead(null);
      }
      setSuccessMsg(`Lead "${lead.name}" deleted successfully.`);
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err) {
      console.error(err);
      setError("Error deleting lead from MongoDB.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleCopyText = (text, fieldName) => {
    if (!text) return;
    navigator.clipboard.writeText(typeof text === "object" ? JSON.stringify(text, null, 2) : text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(""), 2500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchLeads(passcode);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode("");
    if (typeof window !== "undefined") {
      localStorage.removeItem("tzar_admin_pass");
    }
  };

  // Filtering & Sorting Effect
  useEffect(() => {
    let result = [...allLeads];

    if (activeTab === "contacts") {
      result = result.filter((item) => item.type === "Contact Form");
    } else if (activeTab === "hireus") {
      result = result.filter((item) => item.type === "Hire Us / Enquiry");
    } else if (activeTab === "webdevs") {
      result = result.filter((item) => item.type === "WebDev Form");
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.email.toLowerCase().includes(q) ||
          item.phone.toLowerCase().includes(q) ||
          (item.details && item.details.toLowerCase().includes(q))
      );
    }

    const now = new Date();
    if (datePreset === "today") {
      const todayStr = now.toISOString().slice(0, 10);
      result = result.filter(
        (item) => item.createdAt && new Date(item.createdAt).toISOString().slice(0, 10) === todayStr
      );
    } else if (datePreset === "7days") {
      const past7 = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      result = result.filter((item) => new Date(item.createdAt) >= past7);
    } else if (datePreset === "30days") {
      const past30 = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      result = result.filter((item) => new Date(item.createdAt) >= past30);
    } else if (datePreset === "custom") {
      if (startDate) {
        const start = new Date(startDate);
        result = result.filter((item) => new Date(item.createdAt) >= start);
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        result = result.filter((item) => new Date(item.createdAt) <= end);
      }
    }

    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    setFilteredLeads(result);
  }, [activeTab, searchQuery, datePreset, startDate, endDate, sortOrder, allLeads]);

  // Export to CSV
  const exportToCSV = () => {
    if (!filteredLeads.length) return;

    const headers = ["Date", "Lead Type", "Name", "Email", "Phone", "Details"];
    const rows = filteredLeads.map((lead) => [
      `"${new Date(lead.createdAt).toLocaleString()}"`,
      `"${lead.type}"`,
      `"${lead.name.replace(/"/g, '""')}"`,
      `"${lead.email.replace(/"/g, '""')}"`,
      `"${lead.phone.replace(/"/g, '""')}"`,
      `"${(lead.details || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `tzar_leads_export_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Stats calculation
  const totalCount = allLeads.length;
  const contactsCount = allLeads.filter((l) => l.type === "Contact Form").length;
  const hireusCount = allLeads.filter((l) => l.type === "Hire Us / Enquiry").length;

  const todayStr = new Date().toISOString().slice(0, 10);
  const todayCount = allLeads.filter(
    (l) => l.createdAt && new Date(l.createdAt).toISOString().slice(0, 10) === todayStr
  ).length;

  // Render Login Lock Screen with Passcode + 2FA Options
  if (!isAuthenticated) {
    return (
      <div className="lock-screen-wrapper">
        <div className="lock-card">
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div style={{ marginBottom: "16px" }}>
              <Image
                src={logoImg}
                alt="TZAR Digital Agency Logo"
                width={200}
                height={60}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <h2 style={{ fontSize: "22px", fontWeight: "800", margin: "0 0 6px 0", color: "#0f172a" }}>
              Admin Lead Portal
            </h2>
            <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
              Enter passcode or 6-digit Google Authenticator code
            </p>
          </div>

          {/* Login Method Toggle Tabs */}
          <div style={{ display: "flex", backgroundColor: "#f1f5f9", padding: "4px", borderRadius: "10px", marginBottom: "20px" }}>
            <button
              onClick={() => setAuthMode("passcode")}
              style={{
                flex: 1,
                border: "none",
                backgroundColor: authMode === "passcode" ? "#ffffff" : "transparent",
                color: authMode === "passcode" ? "#2563eb" : "#64748b",
                fontWeight: authMode === "passcode" ? "700" : "600",
                fontSize: "12px",
                padding: "8px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <Lock size={14} /> Admin Passcode
            </button>

            <button
              onClick={() => setAuthMode("2fa")}
              style={{
                flex: 1,
                border: "none",
                backgroundColor: authMode === "2fa" ? "#ffffff" : "transparent",
                color: authMode === "2fa" ? "#2563eb" : "#64748b",
                fontWeight: authMode === "2fa" ? "700" : "600",
                fontSize: "12px",
                padding: "8px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
              }}
            >
              <ShieldCheck size={14} /> Google Authenticator 2FA
            </button>
          </div>

          {error && (
            <div
              style={{
                marginBottom: "20px",
                padding: "12px 16px",
                backgroundColor: "#fff1f2",
                border: "1px solid #fecdd3",
                borderRadius: "10px",
                color: "#e11d48",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "11px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.8px",
                  color: "#64748b",
                  marginBottom: "8px",
                }}
              >
                {authMode === "2fa" ? "6-Digit Authenticator OTP Code" : "Admin Passcode"}
              </label>
              <input
                type={authMode === "2fa" ? "text" : "password"}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder={authMode === "2fa" ? "e.g. 123456" : "Enter passcode"}
                maxLength={authMode === "2fa" ? 6 : 50}
                style={{
                  width: "100%",
                  backgroundColor: "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "10px",
                  padding: "12px 16px",
                  color: "#0f172a",
                  fontSize: "15px",
                  fontWeight: "700",
                  letterSpacing: authMode === "2fa" ? "4px" : "normal",
                  textAlign: authMode === "2fa" ? "center" : "left",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "14px",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                cursor: loading ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
              }}
            >
              {loading ? (
                <>
                  <RefreshCw size={16} className="animate-spin" /> Authenticating...
                </>
              ) : (
                "Unlock Dashboard"
              )}
            </button>
          </form>
        </div>

        {/* 2FA QR Code Setup Modal */}
        {show2FAModal && (
          <div className="admin-modal-overlay">
            <div className="admin-modal-card" style={{ maxWidth: "480px", textAlign: "center" }}>
              <button
                onClick={() => setShow2FAModal(false)}
                className="admin-modal-close"
              >
                <X size={20} />
              </button>

              <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#eff6ff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb" }}>
                  <Smartphone size={24} />
                </div>
              </div>

              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 6px 0" }}>
                Set Up Google Authenticator
              </h3>
              <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 20px 0" }}>
                Scan this QR code with <b>Google Authenticator</b> or <b>Microsoft Authenticator</b> on your smartphone.
              </p>

              {qrCodeData ? (
                <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}>
                  <div style={{ backgroundColor: "#ffffff", padding: "12px", borderRadius: "12px", display: "inline-block", border: "1px solid #cbd5e1" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={qrCodeData.qrCodeUrl} alt="Google Authenticator 2FA QR Code" style={{ width: "180px", height: "180px" }} />
                  </div>

                  <div style={{ marginTop: "14px" }}>
                    <span className="detail-label">Manual Entry Key</span>
                    <code style={{ fontSize: "14px", fontWeight: "800", color: "#2563eb", backgroundColor: "#ffffff", padding: "6px 12px", borderRadius: "6px", border: "1px solid #cbd5e1" }}>
                      {qrCodeData.secret}
                    </code>
                  </div>
                </div>
              ) : (
                <div style={{ padding: "40px", color: "#64748b" }}>Loading QR Code...</div>
              )}

              {/* Live Test Form */}
              <form onSubmit={handleTest2FA} style={{ borderTop: "1px solid #e2e8f0", paddingTop: "16px" }}>
                <span className="detail-label">Verify Live 6-Digit Code</span>
                <div style={{ display: "flex", gap: "8px", marginTop: "8px", marginBottom: "12px" }}>
                  <input
                    type="text"
                    value={test2FACode}
                    onChange={(e) => setTest2FACode(e.target.value)}
                    placeholder="Enter 6-digit code"
                    maxLength={6}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: "14px",
                      letterSpacing: "3px",
                    }}
                    required
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#0f172a",
                      color: "#ffffff",
                      border: "none",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "13px",
                      cursor: "pointer",
                    }}
                  >
                    Test Code
                  </button>
                </div>
              </form>

              {test2FAResult && (
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: "600",
                    backgroundColor: test2FAResult.success ? "#ecfdf5" : "#fff1f2",
                    color: test2FAResult.success ? "#047857" : "#e11d48",
                    border: `1px solid ${test2FAResult.success ? "#a7f3d0" : "#fecdd3"}`,
                  }}
                >
                  {test2FAResult.message}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="admin-leads-page">
      {/* Top Navbar */}
      <header className="admin-navbar">
        <div className="admin-navbar-inner">
          <div className="admin-brand">
            <Image
              src={logoImg}
              alt="TZAR Digital Agency Logo"
              width={180}
              height={48}
              className="admin-logo-img"
              priority
            />
            <div className="admin-brand-divider"></div>
            <div className="admin-title-area">
              <h1>Admin Lead Control Center</h1>
              <p>Direct MongoDB Lead Synchronization</p>
            </div>
          </div>

          <div className="admin-actions">
            <button
              onClick={open2FASetup}
              className="btn-admin btn-refresh"
              title="View Authenticator QR Code"
            >
              <QrCode size={14} /> 2FA Setup
            </button>

            <button
              onClick={() => fetchLeads()}
              disabled={loading}
              className="btn-admin btn-refresh"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              <span>{loading ? "Refreshing..." : "Refresh"}</span>
            </button>

            <button
              onClick={exportToCSV}
              disabled={!filteredLeads.length}
              className="btn-admin btn-export"
            >
              <Download size={14} /> Export CSV
            </button>

            <button
              onClick={handleLogout}
              className="btn-admin btn-logout"
              title="Lock Session"
            >
              <LogOut size={14} /> Lock
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="admin-container">
        {/* Alerts */}
        {successMsg && (
          <div
            style={{
              marginBottom: "20px",
              padding: "14px 20px",
              backgroundColor: "#ecfdf5",
              border: "1px solid #a7f3d0",
              borderRadius: "12px",
              color: "#047857",
              fontSize: "14px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: "0 2px 8px rgba(5, 150, 105, 0.1)",
            }}
          >
            <CheckCircle size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {error && (
          <div
            style={{
              marginBottom: "20px",
              padding: "14px 20px",
              backgroundColor: "#fff1f2",
              border: "1px solid #fecdd3",
              borderRadius: "12px",
              color: "#e11d48",
              fontSize: "14px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* KPI Counter Cards */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon kpi-icon-total">
              <Users size={24} />
            </div>
            <div className="kpi-info">
              <p>Total Enquiries</p>
              <h3>{totalCount}</h3>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon kpi-icon-today">
              <CheckCircle size={24} />
            </div>
            <div className="kpi-info">
              <p>Today&apos;s Leads</p>
              <h3>{todayCount}</h3>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon kpi-icon-contact">
              <Mail size={24} />
            </div>
            <div className="kpi-info">
              <p>Contact Forms</p>
              <h3>{contactsCount}</h3>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon kpi-icon-hireus">
              <Briefcase size={24} />
            </div>
            <div className="kpi-info">
              <p>Hire Us Enquiries</p>
              <h3>{hireusCount}</h3>
            </div>
          </div>
        </div>

        {/* Filter Controls & Date Controls */}
        <div className="admin-controls-card">
          <div className="controls-top-row">
            <div className="tab-group">
              <button
                onClick={() => setActiveTab("all")}
                className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
              >
                All ({allLeads.length})
              </button>
              <button
                onClick={() => setActiveTab("contacts")}
                className={`tab-btn ${activeTab === "contacts" ? "active" : ""}`}
              >
                Contact Forms ({contactsCount})
              </button>
              <button
                onClick={() => setActiveTab("hireus")}
                className={`tab-btn ${activeTab === "hireus" ? "active" : ""}`}
              >
                Hire Us ({hireusCount})
              </button>
            </div>

            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, email, phone..."
                className="search-input"
              />
            </div>
          </div>

          <div className="controls-filter-row">
            <div className="filter-item">
              <ArrowUpDown size={15} style={{ color: "#2563eb" }} />
              <span>Sort Order:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="filter-select"
              >
                <option value="desc">Latest First (Newest)</option>
                <option value="asc">Oldest First</option>
              </select>
            </div>

            <div className="filter-item">
              <Calendar size={15} style={{ color: "#2563eb" }} />
              <span>Date Filter:</span>
              <select
                value={datePreset}
                onChange={(e) => setDatePreset(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Time</option>
                <option value="today">Today Only</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="custom">Custom Date Range</option>
              </select>
            </div>

            {datePreset === "custom" && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="filter-select"
                  title="Start Date"
                />
                <span style={{ fontSize: "12px", color: "#64748b" }}>to</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="filter-select"
                  title="End Date"
                />
              </div>
            )}
          </div>
        </div>

        {/* Desktop / Tablet HTML Table View (visible >= 768px) */}
        <div className="desktop-table-view">
          <div className="table-card">
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Type</th>
                  <th>Full Name</th>
                  <th>Contact Information</th>
                  <th>Key Details</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ padding: "48px", textAlign: "center", color: "#64748b" }}>
                      {loading ? "Fetching records from MongoDB..." : "No leads found matching your search and date filters."}
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id}>
                      <td>
                        <span style={{ fontWeight: "700", color: "#0f172a" }}>
                          {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <br />
                        <span style={{ fontSize: "11px", color: "#94a3b8" }}>
                          {new Date(lead.createdAt).toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </td>

                      <td>
                        <span className={`badge-lead ${lead.type === "Contact Form" ? "badge-contact" : "badge-hireus"}`}>
                          {lead.type}
                        </span>
                      </td>

                      <td style={{ fontWeight: "700", color: "#0f172a" }}>
                        {lead.name}
                      </td>

                      <td>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <a href={`mailto:${lead.email}`} style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>
                            {lead.email}
                          </a>
                          <a href={`tel:${lead.phone}`} style={{ color: "#64748b", textDecoration: "none" }}>
                            {lead.phone}
                          </a>
                        </div>
                      </td>

                      <td style={{ maxWidth: "260px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: "#475569" }}>
                        {lead.details || <span style={{ fontStyle: "italic", color: "#94a3b8" }}>No message text</span>}
                      </td>

                      <td style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "flex-end" }}>
                          <button
                            onClick={() => setSelectedLead(lead)}
                            className="btn-view-details"
                            title="View Details"
                          >
                            <Eye size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                            View
                          </button>

                          <button
                            onClick={() => handleDeleteLead(lead)}
                            disabled={deletingId === lead.id}
                            className="btn-delete-lead"
                            title="Delete Lead Record"
                          >
                            <Trash2 size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                            {deletingId === lead.id ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dedicated Mobile Cards List View (visible < 768px) */}
        <div className="mobile-cards-view">
          {filteredLeads.length === 0 ? (
            <div style={{ padding: "36px 20px", textAlign: "center", color: "#64748b", backgroundColor: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
              {loading ? "Fetching records from MongoDB..." : "No leads found matching your search and date filters."}
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div key={lead.id} className="lead-mobile-card">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span className={`badge-lead ${lead.type === "Contact Form" ? "badge-contact" : "badge-hireus"}`}>
                    {lead.type}
                  </span>
                  <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>
                    {new Date(lead.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })} • {new Date(lead.createdAt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>

                <h3 style={{ fontSize: "17px", fontWeight: "800", color: "#0f172a", margin: "0 0 6px 0" }}>
                  {lead.name}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "13px", marginBottom: "12px" }}>
                  <a href={`mailto:${lead.email}`} style={{ color: "#2563eb", textDecoration: "none", fontWeight: "600" }}>
                    ✉️ {lead.email}
                  </a>
                  <a href={`tel:${lead.phone}`} style={{ color: "#334155", textDecoration: "none", fontWeight: "600" }}>
                    📞 {lead.phone}
                  </a>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px", borderTop: "1px solid #f1f5f9" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <a
                      href={`tel:${lead.phone}`}
                      style={{ backgroundColor: "#eff6ff", color: "#2563eb", padding: "6px 10px", borderRadius: "6px", fontSize: "12px", textDecoration: "none", fontWeight: "700" }}
                    >
                      Call
                    </a>
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: "#ecfdf5", color: "#059669", padding: "6px 10px", borderRadius: "6px", fontSize: "12px", textDecoration: "none", fontWeight: "700" }}
                    >
                      WhatsApp
                    </a>
                  </div>

                  <div style={{ display: "flex", gap: "6px" }}>
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="btn-view-details"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleDeleteLead(lead)}
                      disabled={deletingId === lead.id}
                      className="btn-delete-lead"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* 2FA Setup Modal (accessible when logged in) */}
      {show2FAModal && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-card" style={{ maxWidth: "480px", textAlign: "center" }}>
            <button
              onClick={() => setShow2FAModal(false)}
              className="admin-modal-close"
            >
              <X size={20} />
            </button>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
              <div style={{ width: "48px", height: "48px", backgroundColor: "#eff6ff", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb" }}>
                <Smartphone size={24} />
              </div>
            </div>

            <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", margin: "0 0 6px 0" }}>
              Google Authenticator Setup
            </h3>
            <p style={{ fontSize: "13px", color: "#64748b", margin: "0 0 20px 0" }}>
              Scan this QR code with <b>Google Authenticator</b> or <b>Microsoft Authenticator</b> on your phone.
            </p>

            {qrCodeData ? (
              <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", marginBottom: "20px" }}>
                <div style={{ backgroundColor: "#ffffff", padding: "12px", borderRadius: "12px", display: "inline-block", border: "1px solid #cbd5e1" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrCodeData.qrCodeUrl} alt="Google Authenticator 2FA QR Code" style={{ width: "180px", height: "180px" }} />
                </div>

                <div style={{ marginTop: "14px" }}>
                  <span className="detail-label">Manual Setup Secret Key</span>
                  <code style={{ fontSize: "14px", fontWeight: "800", color: "#2563eb", backgroundColor: "#ffffff", padding: "6px 12px", borderRadius: "6px", border: "1px solid #cbd5e1" }}>
                    {qrCodeData.secret}
                  </code>
                </div>
              </div>
            ) : (
              <div style={{ padding: "40px", color: "#64748b" }}>Loading QR Code...</div>
            )}

            {/* Test Form */}
            <form onSubmit={handleTest2FA} style={{ borderTop: "1px solid #e2e8f0", paddingTop: "16px" }}>
              <span className="detail-label">Test 6-Digit Code</span>
              <div style={{ display: "flex", gap: "8px", marginTop: "8px", marginBottom: "12px" }}>
                <input
                  type="text"
                  value={test2FACode}
                  onChange={(e) => setTest2FACode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: "14px",
                    letterSpacing: "3px",
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#0f172a",
                    color: "#ffffff",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  Verify Code
                </button>
              </div>
            </form>

            {test2FAResult && (
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: "600",
                  backgroundColor: test2FAResult.success ? "#ecfdf5" : "#fff1f2",
                  color: test2FAResult.success ? "#047857" : "#e11d48",
                  border: `1px solid ${test2FAResult.success ? "#a7f3d0" : "#fecdd3"}`,
                }}
              >
                {test2FAResult.message}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Streamlined & Responsive Admin Lead Modal */}
      {selectedLead && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-card">
            <button
              onClick={() => setSelectedLead(null)}
              className="admin-modal-close"
              title="Close Popup"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{ width: "52px", height: "52px", backgroundColor: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0 }}>
                <FileText size={26} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className={`badge-lead ${selectedLead.type === "Contact Form" ? "badge-contact" : "badge-hireus"}`}>
                    {selectedLead.type}
                  </span>
                  <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 600 }}>
                    Received on {new Date(selectedLead.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                  </span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", margin: "4px 0 0 0" }}>
                  {selectedLead.name}
                </h3>
              </div>
            </div>

            {/* Admin Action Buttons */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
              <a
                href={`tel:${selectedLead.phone}`}
                style={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  padding: "9px 16px",
                  borderRadius: "9px",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 2px 6px rgba(37, 99, 235, 0.2)",
                }}
              >
                <Phone size={14} /> Call ({selectedLead.phone})
              </a>

              <a
                href={`https://wa.me/${selectedLead.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#10b981",
                  color: "#ffffff",
                  padding: "9px 16px",
                  borderRadius: "9px",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 2px 6px rgba(16, 185, 129, 0.2)",
                }}
              >
                <MessageCircle size={14} /> WhatsApp
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(selectedLead.email)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#ea4335",
                  color: "#ffffff",
                  padding: "9px 16px",
                  borderRadius: "9px",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  boxShadow: "0 2px 6px rgba(234, 67, 53, 0.2)",
                }}
              >
                <Mail size={14} /> Open Gmail Web
              </a>

              <a
                href={`mailto:${selectedLead.email}`}
                onClick={() => handleCopyText(selectedLead.email, "email")}
                style={{
                  backgroundColor: "#f1f5f9",
                  color: "#334155",
                  border: "1px solid #cbd5e1",
                  padding: "9px 16px",
                  borderRadius: "9px",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "600",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                title="Mailto / Copy Email"
              >
                <ExternalLink size={14} /> Default Mail Client
              </a>
            </div>

            {/* Section 1: Customer Info Breakdown */}
            <div className="detail-section-card">
              <span className="detail-label">Customer Contact & Inquiry Specs</span>
              <div className="modal-grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "10px" }}>
                <div>
                  <span className="detail-label">Customer Email</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                    <a href={`mailto:${selectedLead.email}`} style={{ color: "#2563eb", fontWeight: "700", textDecoration: "none", fontSize: "14px" }}>
                      {selectedLead.email}
                    </a>
                    <button onClick={() => handleCopyText(selectedLead.email, "email")} className="copy-btn">
                      {copiedField === "email" ? <Check size={12} color="#059669" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="detail-label">Phone Number</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                    <a href={`tel:${selectedLead.phone}`} style={{ color: "#0f172a", fontWeight: "700", textDecoration: "none", fontSize: "14px" }}>
                      {selectedLead.phone}
                    </a>
                    <button onClick={() => handleCopyText(selectedLead.phone, "phone")} className="copy-btn">
                      {copiedField === "phone" ? <Check size={12} color="#059669" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>

                {selectedLead.industry && selectedLead.industry !== "N/A" && (
                  <div>
                    <span className="detail-label">Service Requested / Industry</span>
                    <p style={{ margin: "2px 0 0 0", fontWeight: "700", color: "#334155", fontSize: "13.5px" }}>
                      {selectedLead.industry}
                    </p>
                  </div>
                )}

                {selectedLead.budget && selectedLead.budget !== "N/A" && (
                  <div>
                    <span className="detail-label">Estimated Budget</span>
                    <p style={{ margin: "2px 0 0 0", fontWeight: "800", color: "#d97706", fontSize: "14px" }}>
                      {selectedLead.budget}
                    </p>
                  </div>
                )}

                {selectedLead.website && selectedLead.website !== "N/A" && (
                  <div>
                    <span className="detail-label">Website URL</span>
                    <a
                      href={selectedLead.website.startsWith("http") ? selectedLead.website : `https://${selectedLead.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#2563eb", fontWeight: "600", textDecoration: "underline", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "2px" }}
                    >
                      <Globe size={13} /> {selectedLead.website}
                    </a>
                  </div>
                )}

                {selectedLead.resume && (
                  <div>
                    <span className="detail-label">Attachment</span>
                    <a
                      href={selectedLead.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#059669", fontWeight: "700", textDecoration: "underline", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "2px" }}
                    >
                      <ExternalLink size={13} /> Download Resume PDF
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Section 2: Full Message / Additional Details */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                <span className="detail-label">Full Inquiry Message / Requirement</span>
                {selectedLead.details && (
                  <button onClick={() => handleCopyText(selectedLead.details, "details")} className="copy-btn">
                    {copiedField === "details" ? <Check size={12} color="#059669" /> : <Copy size={12} />} Copy Message
                  </button>
                )}
              </div>
              <div className="admin-modal-message-box">
                {selectedLead.details || "No additional message text provided."}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid #e2e8f0" }}>
              <button
                onClick={() => handleDeleteLead(selectedLead)}
                disabled={deletingId === selectedLead.id}
                className="btn-delete-lead"
              >
                <Trash2 size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                {deletingId === selectedLead.id ? "Deleting..." : "Delete Lead"}
              </button>

              <button
                onClick={() => setSelectedLead(null)}
                style={{
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                  border: "none",
                  padding: "10px 24px",
                  borderRadius: "9px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
