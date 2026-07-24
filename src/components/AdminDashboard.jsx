function AdminDashboard({ setScreen }) {
    return (
      <div className="card large">
  
        <h1>🏢 PropertyFlow Admin</h1>
  
        <p className="subtitle">
          Manage properties, tenants, payments, and requests.
        </p>
  
        <div className="grid">
  
          <div className="box">
            <h3>🏠 Properties</h3>
            <p>124 Units</p>
          </div>
  
          <div className="box">
            <h3>👥 Tenants</h3>
            <p>118 Active</p>
          </div>
  
          <div className="box">
            <h3>💰 Revenue</h3>
            <p>$164,000</p>
          </div>
  
          <div className="box">
            <h3>🔧 Requests</h3>
            <p>12 Open</p>
          </div>
  
        </div>
  
  
        <button onClick={() => setScreen("properties")}>
          View Properties
        </button>
        <button 
className="secondary"
onClick={() => setScreen("leases")}
>
  📄 Lease Management
</button>
  
  
        <button 
          className="secondary"
          onClick={() => setScreen("tenants")}
        >
          View Tenants
        </button>
  
  
        <button
          className="logout"
          onClick={() => setScreen("login")}
        >
          Logout
        </button>
  
      </div>
    );
  }
  
  export default AdminDashboard;