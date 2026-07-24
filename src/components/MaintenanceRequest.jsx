function MaintenanceRequest({ setScreen }) {
    return (
      <div className="card large">
  
        <h1>🔧 Maintenance Request</h1>
  
        <input
          placeholder="Issue Title"
        />
  
        <textarea
          placeholder="Describe the problem..."
          rows="5"
        />
  
        <button>
          Submit Request
        </button>
  
        <button
          className="secondary"
          onClick={() => setScreen("tenant")}
        >
          ← Back
        </button>
  
      </div>
    );
  }
  
  export default MaintenanceRequest;