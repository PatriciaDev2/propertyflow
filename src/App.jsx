import { useState } from "react";
import "./App.css";

import LandingPage from "./components/LandingPage";

import AdminDashboard from "./components/AdminDashboard";
import Properties from "./components/Properties";
import AddProperty from "./components/AddProperty";
import Tenants from "./components/Tenants";
import TenantProfiles from "./components/TenantProfiles";

import Leases from "./components/Leases";
import CreateLease from "./components/CreateLease";
import LeaseDetails from "./components/LeaseDetails";

import RentTracking from "./components/RentTracking";
import Maintenance from "./components/Maintenance";
import MaintenanceRequest from "./components/MaintenanceRequest";

import Reports from "./components/Reports";
import Applications from "./components/Applications";

import Payment from "./components/Payment";
import LeaseDocuments from "./components/LeaseDocuments";


function App() {

  const [screen, setScreen] = useState("landing");


  return (

    <div className="page">


      {screen === "landing" && (
        <LandingPage setScreen={setScreen} />
      )}



      {screen === "login" && (

        <div className="card">

          <h1>
            PropertyFlow
          </h1>

          <p>
            Tenant Portal
          </p>


          <input placeholder="Email" />

          <input
            placeholder="Password"
            type="password"
          />


          <button
            onClick={() => setScreen("tenant")}
          >
            Tenant Login
          </button>


          <button
            className="secondary"
            onClick={() => setScreen("admin")}
          >
            Admin Demo
          </button>


          <button
            className="secondary"
            onClick={() => setScreen("landing")}
          >
            ← Back
          </button>

        </div>

      )}




      {screen === "tenant" && (

        <div className="card large">

          <h1>
            Tenant Dashboard
          </h1>


          <div className="box">

            <h3>
              Maria Lopez
            </h3>

            <p>
              🏠 123 Main Street Apt 12B
            </p>

            <p>
              💰 Rent: $1,250
            </p>

            <p>
              Payment Status: Paid ✅
            </p>

          </div>



          <button
            onClick={() => setScreen("payment")}
          >
            💳 Pay Rent
          </button>



          <button
            className="secondary"
            onClick={() => setScreen("leaseDocuments")}
          >
            📄 Lease Documents
          </button>



          <button
            className="secondary"
            onClick={() => setScreen("maintenanceRequest")}
          >
            🔧 Maintenance Request
          </button>



          <button
            className="secondary"
            onClick={() => setScreen("landing")}
          >
            Logout
          </button>


        </div>

      )}




      {screen === "payment" && (
        <Payment setScreen={setScreen} />
      )}



      {screen === "leaseDocuments" && (
        <LeaseDocuments setScreen={setScreen} />
      )}



      {screen === "maintenanceRequest" && (
        <MaintenanceRequest setScreen={setScreen} />
      )}
            {screen === "admin" && (

<AdminDashboard
  setScreen={setScreen}
/>

)}



{screen === "properties" && (

<Properties
  setScreen={setScreen}
/>

)}



{screen === "addProperty" && (

<AddProperty
  setScreen={setScreen}
/>

)}



{screen === "tenants" && (

<Tenants
  setScreen={setScreen}
/>

)}



{screen === "tenantProfiles" && (

<TenantProfiles
  setScreen={setScreen}
/>

)}



{screen === "leases" && (

<Leases
  setScreen={setScreen}
/>

)}



{screen === "createLease" && (

<CreateLease
  setScreen={setScreen}
/>

)}



{screen === "leaseDetails" && (

<LeaseDetails
  setScreen={setScreen}
/>

)}



{screen === "rentTracking" && (

<RentTracking
  setScreen={setScreen}
/>

)}



{screen === "maintenanceAdmin" && (

<Maintenance
  setScreen={setScreen}
/>

)}



{screen === "reports" && (

<Reports
  setScreen={setScreen}
/>

)}



{screen === "applications" && (

<Applications
  setScreen={setScreen}
/>

)}


</div>

);

}


export default App;