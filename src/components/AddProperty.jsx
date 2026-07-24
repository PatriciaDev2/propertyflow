function AddProperty({ setScreen }) {

    return (
      <div className="card large">
  
        <h1>🏠 Add New Property</h1>
  
        <p className="subtitle">
          Add a property to your management dashboard.
        </p>
  
  
        <input 
          placeholder="Property Name"
        />
  
  
        <input 
          placeholder="Property Address"
        />
  
  
        <input 
          placeholder="Number of Units"
          type="number"
        />
  
  
        <input 
          placeholder="Monthly Rent"
        />
  
  
        <select>
          <option>
            Occupied
          </option>
  
          <option>
            Vacant
          </option>
  
        </select>
  
  
        <button
          onClick={() => setScreen("properties")}
        >
          Save Property
        </button>
  
  
        <button
          className="secondary"
          onClick={() => setScreen("admin")}
        >
          ← Back
        </button>
  
  
      </div>
    );
  }
  
  
  export default AddProperty;