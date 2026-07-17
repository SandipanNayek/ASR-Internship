import React from "react";
import image from "../assets/imglogo-removebg-preview.png"
function Footer() {
    return(
        <footer className="footer-section">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <img src={image} alt="Logo" />
                             <h4 className="footer-brand-name">JUMPMAN</h4>
                        </div>
                            <p>
                                Specializes in providing high-quality, stylish
                                products for your wardrobe.
                            </p>
                     </div>
                     <div className="footer-col">
                        <h4>SHOP</h4>
                        <ul>
                            <li><a href="#">All Collections</a></li>
                            <li><a href="#">Winter Editions</a></li>
                            <li><a href="#">Discount</a></li>
                        </ul>
                     </div>

                     <div className="footer-col">
                        <h4>COMPANY</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Affiliates</a></li>
                        </ul>
                     </div>

                     <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                        </ul>
                     </div>

                     <div className="footer-col payment-col">
                        <h4>PAYMENT METHODS</h4>
                        <div className="payment-icons">
                          <img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Emblem.png" alt="Mastercard" />
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIVAAo6RFly6s74KuJlJNCbtMN8y_6HVwtqEWD-MV5O5LtP9WBFz1sc5c&s=10" alt="Visa" />
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCWotc4wxPFRuwbi_kWDqWguX_MNf2WFocqDDNb9xoxXURR0ztq_HlqnP&s=10" alt="Paypal" />

                        </div>
                     </div>
                </div>
                    <div className="footer-bottom">
                       <p>Copyright © 2026 Rescope. All right reserved.</p>
                    </div>
            </div>

        </footer>
    )
}

export default Footer