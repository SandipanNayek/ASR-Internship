const brands = [
  {
    id: 1,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    discount: "Up to 50% OFF",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    discount: "Up to 45% OFF",
  },
  {
    id: 3,
    name: "Puma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_Logo.svg",
    discount: "Up to 40% OFF",
  },
  {
    id: 4,
    name: "New Balance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/New_Balance_logo.svg",
    discount: "Up to 35% OFF",
  },
];

function TopBrandsSale() {
  return (
    <section className="top-brands">

      <div className="section-title">
        <h2>🏆 Top Brands on Sale</h2>
        <p>Shop your favorite brands at exclusive prices.</p>
      </div>

      <div className="brands-grid">
        {brands.map((brand) => (
          <div className="brand-card" key={brand.id}>
            <img src={brand.logo} alt={brand.name} />
            <h3>{brand.name}</h3>
            <p>{brand.discount}</p>
            <button>Shop Now</button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default TopBrandsSale;