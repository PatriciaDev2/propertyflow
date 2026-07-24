function Tenants({ setScreen }) {

    const tenants = [
      {
        name: "Maria Lopez",
        property: "123 Main Street",
        status: "Paid ✅"
      },
      {
        name: "James Carter",
        property: "456 Oak Avenue",
        status: "Due ⚠️"
      },
      {
        name: "Ana Garcia",
        property: "789 Pine Road",
        status: "Paid ✅"
      }
    ];
  
  
    return (
      <div className="card large">
  
        <h1>👥 Tenants</h1>
  
  
        {tenants.map((tenant, index) => (
  
          <div className="box" key={index}>
  
            <h3>
              {tenant.name}
            </h3>
  
            <p>
              Property: {tenant.property}
            </p>
  
            <p>
              Payment: {tenant.status}
            </p>
  
          </div>
  
        ))}
  
  
        <button onClick={() => setScreen("admin")}>
          ← Back
        </button>
  
      </div>
    );
  }
  
  export default Tenants;