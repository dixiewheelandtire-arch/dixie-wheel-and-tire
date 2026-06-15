export default function Tires() {
  const tires = [
    { name: "33x12.50R20 All Terrain", price: 380 },
    { name: "35x12.50R20 Mud Tire", price: 420 },
    { name: "275/60R20 Highway Tire", price: 250 }
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>

      <h1>Tire Inventory</h1>

      {tires.map((tire, i) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>

          <h3>{tire.name}</h3>
          <p>${tire.price} per tire</p>

          <a href={`/finance?amount=${tire.price * 4}`}>
            <button style={{ padding: 10 }}>
              Finance Set
            </button>
          </a>

        </div>
      ))}

    </div>
  );
}
