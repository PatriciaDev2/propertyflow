function LandingPage({ setScreen }) {
  return (
    <div className="landing">

      <nav className="navbar">

        <div className="logo">
          PropertyFlow
        </div>

        <div className="navRight">

          <span>Built with React</span>

          <button
            className="launchButton"
            onClick={() => setScreen("login")}
          >
            Explore Demo →
          </button>

        </div>

      </nav>



      <section className="hero">

        <div className="heroText">

          <h1>
            Property Management,
            Simplified.
          </h1>

          <p>
            Manage properties, tenants, leases, maintenance,
            rent collection and reporting from one beautiful dashboard.
          </p>

          <div className="heroButtons">

            <button
              onClick={() => setScreen("login")}
            >
              Launch Dashboard
            </button>

            <button
              className="secondary"
              onClick={() => setScreen("login")}
            >
              Tenant Portal
            </button>

          </div>

        </div>



        <div className="heroCard">

          <h2>Today's Snapshot</h2>

          <div className="stat">
            <span>Properties</span>
            <strong>124</strong>
          </div>

          <div className="stat">
            <span>👥 Active Tenants</span>
            <strong>118</strong>
          </div>

          <div className="stat">
            <span>💰 Monthly Revenue</span>
            <strong>$164,000</strong>
          </div>

          <div className="stat">
            <span>🔧 Open Requests</span>
            <strong>12</strong>
          </div>

        </div>

      </section>



      <section className="features">

        <div className="featureCard">
          🏢
          <h3>Property Management</h3>
          <p>Manage unlimited residential and commercial properties.</p>
        </div>

        <div className="featureCard">
          💳
          <h3>Online Payments</h3>
          <p>Accept secure online rent payments anytime.</p>
        </div>

        <div className="featureCard">
          📄
          <h3>Lease Tracking</h3>
          <p>Create, renew and organize lease agreements.</p>
        </div>

        <div className="featureCard">
          🔧
          <h3>Maintenance</h3>
          <p>Track maintenance requests from start to finish.</p>
        </div>

      </section>



      <footer className="footer">

        <h2>PropertyFlow</h2>

        <p>
          Modern software built for property managers.
        </p>

      </footer>

    </div>
  );
}

export default LandingPage;