function Leases({ setScreen }) {

    const leases = [
      {
        tenant: "Maria Lopez",
        property: "123 Main Street - Apt 12B",
        start: "March 1, 2026",
        end: "February 28, 2027",
        rent: "$1,250",
        status: "Active ✅"
      },
      {
        tenant: "James Carter",
        property: "456 Oak Avenue",
        start: "January 15, 2026",
        end: "January 14, 2027",
        rent: "$1,500",
        status: "Active ✅"
      }
    ];
  
  
    return (
      <div className="card large">
  
        <h1>📄 Lease Management</h1>
  
        <button>
          + Create New Lease
        </button>
  
  
        {leases.map((lease, index) => (
  
          <div className="box" key={index}>
  
            <h3>
              {lease.tenant}
            </h3>
  
            <p>
              🏠 {lease.property}
            </p>
  
            <p>
              Start: {lease.start}
            </p>
  
            <p>
              End: {lease.end}
            </p>
  
            <p>
              Rent: {lease.rent}
            </p>
  
            <p>
              Status: {lease.status}
            </p>
  
  
            <button className="secondary">
              View Lease
            </button>
  
  
            <button className="secondary">
              Upload Document
            </button>
  
  
          </div>
  
        ))}
  
  
        <button onClick={() => setScreen("admin")}>
          ← Back
        </button>
  
  
      </div>
    );
  }
  
  export default Leases;