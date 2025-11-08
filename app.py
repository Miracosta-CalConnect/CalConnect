import streamlit as st

# --- PAGE CONFIG ---
st.set_page_config(
    page_title="CalConnect",
    layout="wide",
    initial_sidebar_state="expanded"
)

# --- STYLES ---
st.markdown("""
    <style>
    /* Global */
    body {
        font-family: 'Arial', sans-serif;
    }
    .main {
        background-color: white;
        padding: 0;
        margin: 0;
    }

    /* Top navbar */
    .navbar {
        background-color: #cbd5e1;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        border-bottom: 1px solid #999;
    }
    .navbar-left {
        font-size: 30px;
        font-weight: 700;
        color: #3b82f6;
    }
    .navbar-left span {
        color: #64748b;
        font-size: 16px;
        font-weight: 600;
        margin-left: 5px;
    }
    .navbar-right {
        display: flex;
        align-items: center;
        gap: 25px;
        font-weight: 600;
        color: #374151;
    }
    .search-box {
        border: 1px solid #999;
        padding: 5px 10px;
        border-radius: 25px;
        background-color: #f8f8f8;
    }

    /* Sidebar */
    .sidebar {
        background-color: #0a2540;
        height: calc(100vh - 70px);
        padding-top: 30px;
        color: white;
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .sidebar-item {
        font-size: 20px;
        font-weight: bold;
        padding: 15px 25px;
        cursor: pointer;
    }
    .sidebar-item:hover {
        background-color: #1e3a8a;
    }
    .sidebar-bottom {
        padding: 25px;
        font-weight: bold;
    }
    .content {
        flex: 1;
        background-color: white;
        padding: 20px;
    }
    </style>
""", unsafe_allow_html=True)

# --- PAGE STRUCTURE USING COLUMNS ---
top_bar = """
<div class="navbar">
    <div class="navbar-left">
        CalConnect <span>Home</span>
    </div>
    <div class="navbar-right">
        <div>About</div>
        <div>Login</div>
        <div class="search-box">🔍 Search</div>
    </div>
</div>
"""

sidebar = """
<div style="display: flex;">
    <div class="sidebar">
        <div>
            <div class="sidebar-item">Connect</div>
            <div class="sidebar-item">Transfer</div>
            <div class="sidebar-item">Messages</div>
        </div>
        <div class="sidebar-bottom">⚙️ Settings</div>
    </div>
    <div class="content">
        <h2>Welcome to CalConnect</h2>
        <p>This is your main content area.</p>
    </div>
</div>
"""

st.markdown(top_bar + sidebar, unsafe_allow_html=True)
