function Properties({ setScreen }) {
  const properties = [
    {
      id: 1,
      name: "Sunset Villas",
      units: 24,
      occupied: 22,
      revenue: "$28,600"
    },
    {
      id: 2,
      name: "Oak Ridge Apartments",
      units: 36,
      occupied: 34,
      revenue: "$43,200"
    },
    {
      id: 3,
      name: "Riverstone Townhomes",
      units: 18,
      occupied: 17,
      revenue: "$22,100"
    }
  ];

  return (
    <div className="card large">

      <h1>🏠 Properties</h1>

      <p className="subtitle">
        Manage all properties from one place.
      </p>

      <div className="grid">

        {properties.map((property) => (

          <div className="box" key={property.id}>

            <h3>{property.name}</h3>

            <p><strong>Units:</strong> {property.units}</p>

            <p><strong>Occupied:</strong> {property.occupied}</p>

            <p><strong>Monthly Revenue:</strong> {property.revenue}</p>

            <button>
              View Property
            </button>

          </div>

        ))}

      </div>

      <button
        className="secondary"
        onClick={() => setScreen("addProperty")}
      >
        ➕ Add Property
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

export default Properties;