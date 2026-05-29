export default function App() {
  const sendOrder = () => {
    const text =
      "Салам! Мен Жайнак Өнімінен тапсырыс бергім келеді 🥛";

    window.open(
      `https://wa.me/77786301336?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7f2",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: 420,
          margin: "0 auto",
          background: "white",
          borderRadius: 30,
          padding: 20,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop"
          alt=""
          style={{
            width: "100%",
            borderRadius: 20,
            height: 220,
            objectFit: "cover",
          }}
        />

        <h1
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#1f2937",
          }}
        >
          Жайнак Өнімі
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginTop: 10,
            lineHeight: 1.5,
          }}
        >
          Табиғи айран, кефир және ауыл өнімдері
        </p>

        <div
          style={{
            marginTop: 25,
            background: "#ecfdf5",
            padding: 15,
            borderRadius: 20,
          }}
        >
          🥛 Айран 1л — 600₸
        </div>

        <div
          style={{
            marginTop: 15,
            background: "#ecfdf5",
            padding: 15,
            borderRadius: 20,
          }}
        >
          🧴 Кефир 1л — 600₸
        </div>

        <button
          onClick={sendOrder}
          style={{
            width: "100%",
            marginTop: 25,
            padding: 18,
            borderRadius: 20,
            border: "none",
            background: "#16a34a",
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          WhatsApp арқылы тапсырыс беру
        </button>
      </div>
    </div>
  );
}
