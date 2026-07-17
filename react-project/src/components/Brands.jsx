function Brands() {
    const brands = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUmRGkafhTwGrsYX9e1aEHL6uRVW4aT0D1efuEJ_X6jP8v5q7CjtiKxej&s=10",
      name: "Nike",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0799/6089/files/puma-logo_480x480.jpg?v=1655894545",
      name: "Puma",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FmLMZY4DuFu2odBIBcdufypLdwGdae6Vs_o-oVN9PKkTe_iJ-olXpiqz&s=10",
      name: "Reebok",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCu5CIk5LfaOKV7i9A50FWdWDKylhR3oRFiZCc8dbeQ&s",
      name: "One8",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHERjIMyS0rz6qCtncslSqekbkPKmQZAo5YxHNTaUKUeL29HZLLS7yADc&s=10",
      name: "Fila",
    },
    {
      image:
        "https://images.seeklogo.com/logo-png/16/2/adidas-logo-png_seeklogo-168370.png",
      name: "Adidas",
    },
    {
      image:
        "https://images.seeklogo.com/logo-png/49/2/asics-logo-png_seeklogo-499804.png",
      name: "Asics",
    },
  ];
   
  return (
      <section class="brands">
         <h3>BRANDS</h3>
           <div class="brand-list">
             {
                brands.map((brand , index) => (
                    <img 
                    key={index}
                    src={brand.image}
                    alt={brand.name}
                    />
                ))
             }
        

           </div>
    

      </section>
  )

}

export default Brands