function Reports({ setScreen }) {

    return (
      <div className="card large">
  
        <h1>📊 Reports</h1>
  
  
        <div className="grid">
  
          <div className="box">
            <h3>
              Monthly Revenue
            </h3>
  
            <p>
              $164,000
            </p>
          </div>
  
  
          <div className="box">
            <h3>
              Occupancy Rate
            </h3>
  
            <p>
              95%
            </p>
          </div>
  
  
          <div className="box">
            <h3>
              Late Payments
            </h3>
  
            <p>
              3
            </p>
          </div>
  
  
        </div>
  
  
        <div className="box">
  
          <h3>
            Monthly Summary
          </h3>
  
          <p>
            Rent collected: $164,000
          </p>
  
          <p>
            Maintenance costs: $4,200
          </p>
  
          <p>
            Net income: $159,800
          </p>
  
        </div>
  
  
        <button
          onClick={() => setScreen("admin")}
        >
          ← Back
        </button>
  
      </div>
    );
  }
  
  export default Reports;