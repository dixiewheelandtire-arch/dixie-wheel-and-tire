export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>

      <h1>Dixie Wheel & Tire</h1>

      <p>5926 Highway 90, Theodore, AL 36582</p>
      <p>Call/Text: 251-586-2644</p>
      <p>Email: dixiewheelandtire@gmail.com</p>

      <hr />

      <h2>Tires • Wheels • Financing Available</h2>

      <a href="/tires">
        <button style={{ padding: 12, marginRight: 10 }}>
          Shop Tires
        </button>
      </a>

      <a href="/finance">
        <button style={{ padding: 12, background: "red", color: "white" }}>
          Financing
        </button>
      </a>

    </div>
  );
}
