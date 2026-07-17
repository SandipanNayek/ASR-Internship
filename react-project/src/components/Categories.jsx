import { FaArrowRightLong } from "react-icons/fa6";

function Categories() {
    const categories = [
    {
      title: "Men",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduh1D30EyxSTag4fWbnnKTtoIYuLWxhQrpRYuekbeFfAjQxiKTOl6qu15&s=10",
    },
    {
      title: "Women",
      image: "https://images.meesho.com/images/products/405579715/wm7ph_512.avif?width=512",
    },
    {
      title: "Kids",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjrCiTmTKDHHbg5chQ4XsH59F8ouDTQimJyvJPCzSdQ&s=10",
    },
  ];

  return (
     <section className="categories">
        <div className="container-container">
            <h2 className="section-title-left">Categories</h2>

            <div className="categories-grid">
                {
                    categories.map((category , index) => (
                        <div className="category-card" key={index}>
                            <img
                             src={category.image} 
                             alt={category.title} 
                             className="cat-img"
                            />
                            <div className="category-label">
                                <span>{ category.title}</span>
                                <FaArrowRightLong className="arrow-icon" />
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>

     </section>
  )
}export default Categories;