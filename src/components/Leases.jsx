function Leases({ setScreen }) {

  const leases = [
    {
      tenant: "Maria Lopez",
      property: "Sunset Villas",
      expires: "Feb 28, 2027"
    },
    {
      tenant: "James Carter",
      property: "Oak Ridge Apartments",
      expires: "Nov 30, 2026"
    },
    {
      tenant: "Sarah Nguyen",
      property: "Riverstone Townhomes",
      expires: "Jan 15, 2027"
    }
  ];

  return (

    <div className="card large">

      <h1>📄 Lease Management</h1>

      <div className="grid">

        {leases.map((lease, index) => (

          <div className="box" key={index}>

            <h3>{lease.tenant}</h3>

            <p>{lease.property}</p>

            <p><strong>Expires:</strong> {lease.expires}</p>

            <button
              onClick={() => setScreen("leaseDetails")}
            >
              View Lease
            </button>

          </div>

        ))}

      </div>

      <button
        onClick={() => setScreen("createLease")}
      >
        ➕ Create Lease
      </button>

      <button
        className="secondary"
        onClick={() => setScreen("admin")}
      >
        ← Dashboard
      </button>

    </div>

  );
}

export default Leases;