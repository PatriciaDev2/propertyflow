function TenantProfiles({ setScreen }) {

    const tenants = [
      {
        name: "Maria Lopez",
        property: "123 Main Street Apt 12B",
        lease: "Active",
        rent: "$1,250",
        payments: "12/12 Paid",
        maintenance: "2 Requests"
      },
      {
        name: "James Carter",
        property: "456 Oak Avenue",
        lease: "Active",
        rent: "$1,500",
        payments: "11/12 Paid",
        maintenance: "1 Request"
      }
    ];
  
  
    return (
      <div className="card large">
  
        <h1>👤 Tenant Profiles</h1>
  
  
        {tenants.map((tenant,index)=>(
  
          <div className="box" key={index}>
  
            <h3>{tenant.name}</h3>
  
            <p>🏠 {tenant.property}</p>
  
            <p>📄 Lease: {tenant.lease}</p>
  
            <p>💰 Rent: {tenant.rent}</p>
  
            <p>💳 Payments: {tenant.payments}</p>
  
            <p>🔧 Maintenance: {tenant.maintenance}</p>
  
  
          </div>
  
        ))}
  
  
        <button onClick={() => setScreen("admin")}>
          ← Back
        </button>
  
      </div>
    );
  }
  
  
  export default TenantProfiles;