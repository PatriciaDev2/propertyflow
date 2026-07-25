function Tenants({ setScreen }) {

  const tenants = [
    {
      name: "Maria Lopez",
      property: "Sunset Villas",
      status: "Paid ✅"
    },
    {
      name: "James Carter",
      property: "Oak Ridge Apartments",
      status: "Due ⚠️"
    },
    {
      name: "Sarah Nguyen",
      property: "Riverstone Townhomes",
      status: "Paid ✅"
    }
  ];

  return (

    <div className="card large">

      <h1>👥 Tenants</h1>

      <div className="grid">

        {tenants.map((tenant, index) => (

          <div className="box" key={index}>

            <h3>{tenant.name}</h3>

            <p>{tenant.property}</p>

            <p>{tenant.status}</p>

            <button
              onClick={() => setScreen("tenantProfiles")}
            >
              View Profile
            </button>

          </div>

        ))}

      </div>

      <button
        className="secondary"
        onClick={() => setScreen("admin")}
      >
        ← Dashboard
      </button>

    </div>

  );
}

export default Tenants;