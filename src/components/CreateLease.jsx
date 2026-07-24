function CreateLease({ setScreen }) {
    return (
      <div className="card large">
  
        <h1>➕ Create New Lease</h1>
  
        <input placeholder="Tenant Name" />
  
        <input placeholder="Property Address" />
  
        <input placeholder="Monthly Rent" />
  
        <input type="date" />
  
        <input type="date" />
  
        <textarea
          rows="5"
          placeholder="Lease Notes"
        />
  
        <button>
          Save Lease
        </button>
  
        <button
          className="secondary"
          onClick={() => setScreen("leases")}
        >
          Cancel
        </button>
  
      </div>
    );
  }
  
  export default CreateLease;