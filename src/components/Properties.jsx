function Properties({ setScreen }) {

    const properties = [
      {
        address: "123 Main Street",
        tenant: "Maria Lopez",
        rent: "$1,250",
        status: "Occupied"
      },
      {
        address: "456 Oak Avenue",
        tenant: "James Carter",
        rent: "$1,500",
        status: "Occupied"
      },
      {
        address: "789 Pine Road",
        tenant: "Available",
        rent: "$1,100",
        status: "Vacant"
      }
    ];
  
  
    return (
      <div className="card large">
  
        <h1>🏠 Properties</h1>
  
  
        {properties.map((property, index) => (
          <div className="box" key={index}>
  
            <h3>{property.address}</h3>
  
            <p>
              Tenant: {property.tenant}
            </p>
  
            <p>
              Rent: {property.rent}
            </p>
  
            <p>
              Status: {property.status}
            </p>
  
          </div>
        ))}
  
  
        <button onClick={() => setScreen("admin")}>
          ← Back
        </button>
  
      </div>
    );
  }
  
  export default Properties;