function Applications({ setScreen }) {

    const applications = [
      {
        name:"Sarah Williams",
        property:"123 Main Street",
        status:"Pending"
      },
      {
        name:"Michael Brown",
        property:"456 Oak Avenue",
        status:"Approved"
      }
    ];
  
  
    return (
      <div className="card large">
  
        <h1>📋 Rental Applications</h1>
  
  
        <button>
          + New Application
        </button>
  
  
        {applications.map((app,index)=>(
  
          <div className="box" key={index}>
  
            <h3>{app.name}</h3>
  
            <p>
              Property: {app.property}
            </p>
  
            <p>
              Status: {app.status}
            </p>
  
  
            <button className="secondary">
              Review
            </button>
  
  
          </div>
  
        ))}
  
  
        <button onClick={() => setScreen("admin")}>
          ← Back
        </button>
  
  
      </div>
    );
  }
  
  
  export default Applications;