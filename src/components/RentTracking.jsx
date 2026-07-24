function RentTracking({ setScreen }) {

    return (
      <div className="card large">
  
        <h1>💳 Rent Tracking</h1>
  
  
        <div className="grid">
  
          <div className="box">
            <h3>Collected</h3>
            <p>$25,000</p>
          </div>
  
  
          <div className="box">
            <h3>Pending</h3>
            <p>$2,500</p>
          </div>
  
  
          <div className="box">
            <h3>Late</h3>
            <p>2 Tenants</p>
          </div>
  
  
        </div>
  
  
        <div className="box">
  
          <h3>Recent Payments</h3>
  
          <p>Maria Lopez - $1,250 ✅</p>
  
          <p>James Carter - $1,500 ✅</p>
  
          <p>Ana Garcia - $1,100 ⚠️</p>
  
        </div>
  
  
        <button onClick={() => setScreen("admin")}>
          ← Back
        </button>
  
  
      </div>
    );
  }
  
  
  export default RentTracking;