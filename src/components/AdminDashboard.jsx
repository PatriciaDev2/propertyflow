function AdminDashboard({ setScreen }) {
  return (
    <div className="card large">

      <div className="dashboardHeader">

        <div>
          <h1>
            PropertyFlow Dashboard
          </h1>

          <p className="subtitle">
            Manage properties, tenants, leases, payments, and maintenance.
          </p>
        </div>

      </div>



      <div className="grid">

        <div className="box">
          <h3>Properties</h3>
          <h2>124</h2>
          <p>Total units managed</p>
        </div>


        <div className="box">
          <h3>👥 Tenants</h3>
          <h2>118</h2>
          <p>Active residents</p>
        </div>


        <div className="box">
          <h3>💰 Revenue</h3>
          <h2>$164,000</h2>
          <p>Monthly rent collected</p>
        </div>


        <div className="box">
          <h3>🔧 Requests</h3>
          <h2>12</h2>
          <p>Open maintenance issues</p>
        </div>

      </div>



      <h2>
        Quick Actions
      </h2>



      <button
        onClick={() => setScreen("properties")}
      >
        🏠 Manage Properties
      </button>



      <button
        className="secondary"
        onClick={() => setScreen("addProperty")}
      >
        ➕ Add Property
      </button>



      <button
        className="secondary"
        onClick={() => setScreen("tenants")}
      >
        👥 Manage Tenants
      </button>



      <button
        className="secondary"
        onClick={() => setScreen("leases")}
      >
        📄 Lease Management
      </button>



      <button
        className="secondary"
        onClick={() => setScreen("rentTracking")}
      >
        💳 Rent Tracking
      </button>



      <button
        className="secondary"
        onClick={() => setScreen("reports")}
      >
        📊 Reports
      </button>



      <button
        className="logout"
        onClick={() => setScreen("landing")}
      >
        Logout
      </button>


    </div>
  );
}

export default AdminDashboard;