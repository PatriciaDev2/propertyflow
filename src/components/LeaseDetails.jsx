function LeaseDetails({ setScreen }) {
    return (
      <div className="card large">
  
        <h1>📄 Lease Details</h1>
  
        <div className="box">
  
          <h3>Maria Lopez</h3>
  
          <p><strong>Property:</strong> 123 Main Street Apt 12B</p>
  
          <p><strong>Lease Start:</strong> March 1, 2026</p>
  
          <p><strong>Lease End:</strong> February 28, 2027</p>
  
          <p><strong>Monthly Rent:</strong> $1,250</p>
  
          <p><strong>Security Deposit:</strong> $1,250</p>
  
          <p><strong>Status:</strong> Active ✅</p>
  
        </div>
  
        <button className="secondary">
          Download PDF
        </button>
  
        <button className="secondary">
          Renew Lease
        </button>
  
        <button
          className="secondary"
          onClick={() => setScreen("leases")}
        >
          ← Back
        </button>
  
      </div>
    );
  }
  
  export default LeaseDetails;