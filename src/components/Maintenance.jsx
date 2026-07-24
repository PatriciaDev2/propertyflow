function Maintenance({ setScreen }) {

    const requests = [
      {
        issue: "AC not cooling",
        tenant: "Maria Lopez",
        status: "In Progress"
      },
      {
        issue: "Leaking faucet",
        tenant: "James Carter",
        status: "New"
      },
      {
        issue: "Broken lock",
        tenant: "Ana Garcia",
        status: "Completed"
      }
    ];
  
  
    return (
      <div className="card large">
  
        <h1>🔧 Maintenance Requests</h1>
  
        <button>
          + Create Request
        </button>
  
  
        {requests.map((request, index) => (
  
          <div className="box" key={index}>
  
            <h3>
              {request.issue}
            </h3>
  
            <p>
              Tenant: {request.tenant}
            </p>
  
            <p>
              Status: {request.status}
            </p>
  
          </div>
  
        ))}
  
  
        <button
          onClick={() => setScreen("admin")}
        >
          ← Back
        </button>
  
      </div>
    );
  }
  
  export default Maintenance;