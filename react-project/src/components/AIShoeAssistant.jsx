import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

import menProducts from "../data/menProducts";
import womenProducts from "../data/womenProducts";
import kidsProducts from "../data/kidsProducts";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaMicrophone } from "react-icons/fa";

import "../styles/AIAssistant.css";

function AIShoeAssistant() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const { addToCart } = useCart();

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();

  const startVoiceSearch = () => {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    toast.error("Voice search is not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;

    setQuery(text);

    setTimeout(() => {
      handleSearch(text);
    }, 200);
  };

  recognition.onerror = () => {
    toast.error("Voice recognition failed.");
  };
};

  const allProducts = [
    ...menProducts.map((p) => ({
      ...p,
      gender: "Men",
    })),
    ...womenProducts.map((p) => ({
      ...p,
      gender: "Women",
    })),
    ...kidsProducts.map((p) => ({
      ...p,
      gender: "Kids",
    })),
  ];

  const handleSearch = (voiceText = query) => {
    const text = voiceText.toLowerCase().trim();

    let filtered = [...allProducts];

   
    ["nike", "adidas", "puma", "reebok", "fila", "converse", "skechers", "new balance"].forEach(
      (brand) => {
        if (text.includes(brand)) {
          filtered = filtered.filter((item) =>
            item.brand.toLowerCase().includes(brand)
          );
        }
      }
    );

    
    if (text.includes("men"))
      filtered = filtered.filter(
        (item) => item.gender === "Men"
      );

    if (text.includes("women"))
      filtered = filtered.filter(
        (item) => item.gender === "Women"
      );

    if (text.includes("kids"))
      filtered = filtered.filter(
        (item) => item.gender === "Kids"
      );

    // Category
    ["running", "lifestyle", "training", "football", "basketball"].forEach(
      (cat) => {
        if (text.includes(cat)) {
          filtered = filtered.filter((item) =>
            item.category
              .toLowerCase()
              .includes(cat)
          );
        }
      }
    );

    // Price
    const match = text.match(/(\d+)/);

    if (match) {
      const price = Number(match[1]);

      if (
        text.includes("under") ||
        text.includes("below")
      ) {
        filtered = filtered.filter(
          (item) => item.price <= price
        );
      }
    }

    setResults(filtered);

    if (!filtered.length) {
      toast.info("No matching shoes found.");
    }
  };

  return (
    <section className="ai-section">

      <div className="ai-title">

        <FaRobot />

        <h2>AI Shoe Assistant</h2>

      </div>

      <p>
        Ask anything like
        <b>
          {" "}
          Nike running shoes under 5000
        </b>
      </p>

      <div className="ai-search">

    <input
        type="text"
        placeholder="Try: Nike running shoes under 5000"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        onKeyDown={(e)=>{
            if(e.key==="Enter"){
                handleSearch();
            }
        }}
    />

    <button onClick={startVoiceSearch}>
        <FaMicrophone/>
    </button>

    <button onClick={handleSearch}>
        <FaPaperPlane/>
    </button>

    </div>

      <div className="ai-grid">
        {results.length === 0 && (
            <div className="ai-empty">
            <h3>🤖 AI is Ready!</h3>
            <p>
                Try searching:
            </p>

            <ul>
                <li>Nike shoes</li>
                <li>Running shoes under 5000</li>
                <li>Women Adidas shoes</li>
                <li>Kids football shoes</li>
            </ul>
            </div>
        )}

        {results.map((product) => {

          const isWishlisted =
            wishlist.some(
              (item) =>
                item.id === product.id
            );

          return (

            <div
              className="ai-card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.title}
              />

              <h3>{product.title}</h3>

              <p>{product.brand}</p>

              <span>₹{product.price}</span>

              <div className="ai-buttons">

                <button
                  onClick={() => {
                    addToCart(product);
                    
                  }}
                >
                  
                </button>

                <button
                  onClick={() => {
                    if (isWishlisted) {
                      removeFromWishlist(
                        product.id
                      );
                    } else {
                      addToWishlist(product);
                    }
                  }}
                >
                  {isWishlisted
                    ? "♥"
                    : "♡"}
                </button>

              </div>

            </div>

          );
        })}

      </div>

    </section>
  );
}

export default AIShoeAssistant;