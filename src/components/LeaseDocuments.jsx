function LeaseDocuments({ setScreen }) {
    return (
      <div className="card large">
  
        <h1>📄 Lease Documents</h1>
  
        <div className="box">
          <h3>Current Lease Agreement</h3>
          <p>Lease_2026.pdf</p>
          <button>View PDF</button>
        </div>
  
        <div className="box">
          <h3>Move-In Checklist</h3>
          <p>Checklist.pdf</p>
          <button>View PDF</button>
        </div>
  
        <button
          className="secondary"
          onClick={() => setScreen("tenant")}
        >
          ← Back
        </button>
  
      </div>
    );
  }
  
  export default LeaseDocuments;