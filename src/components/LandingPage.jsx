function LandingPage({ setScreen }) {

    return (
      <div className="card large">
  
        <h1>
          🏢 PropertyFlow
        </h1>
  
        <h2>
          Property management made simple.
        </h2>
  
        <p className="subtitle">
          Manage rentals, tenants, payments, and maintenance
          all in one place.
        </p>
  
  
        <div className="grid">
  
          <div className="box">
            <h3>🏠 Properties</h3>
            <p>
              Keep all your properties organized.
            </p>
          </div>
  
  
          <div className="box">
            <h3>💳 Payments</h3>
            <p>
              Track rent and payment history.
            </p>
          </div>
  
  
          <div className="box">
            <h3>🔧 Maintenance</h3>
            <p>
              Manage repair requests easily.
            </p>
          </div>
  
  
          <div className="box">
            <h3>📊 Reports</h3>
            <p>
              Understand your rental business.
            </p>
          </div>
  
        </div>
  
  
        <button onClick={() => setScreen("login")}>
          Tenant Login
        </button>
  
  
        <button
          className="secondary"
          onClick={() => setScreen("admin")}
        >
          Admin Demo
        </button>
  
  
      </div>
    );
  }
  
  export default LandingPage;