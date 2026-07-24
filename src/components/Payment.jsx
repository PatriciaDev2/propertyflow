function Payment({ setScreen }) {
    return (
      <div className="card large">
  
        <h1>💳 Pay Rent</h1>
  
        <p className="subtitle">
          Submit a secure rent payment.
        </p>
  
        <input
          placeholder="Payment Amount"
        />
  
        <input
          placeholder="Card Number"
        />
  
        <input
          placeholder="MM / YY"
        />
  
        <input
          placeholder="CVV"
        />
  
        <button>
          Submit Payment
        </button>
  
        <button
          className="secondary"
          onClick={() => setScreen("tenant")}
        >
          ← Back
        </button>
  
      </div>
    );
  }
  
  export default Payment;