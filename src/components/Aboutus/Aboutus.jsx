import React from 'react'
import './Aboutus.css'

const Aboutus = () => {
  return (
    <div>
        <section id="about">
        <div class="about-container">
            <h2>About Us</h2>
            <div class="about-content">
                <p>Welcome to <strong>Elegant Jewelry</strong>, where timeless elegance meets modern craftsmanship. Our journey began with a passion for creating exquisite jewelry that tells a story. Each piece is meticulously designed and crafted to perfection, ensuring that you receive nothing but the best.</p>
                <p>Our team of skilled artisans and designers work tirelessly to bring you a collection that reflects sophistication and style. Whether you're looking for a statement piece for a special occasion or something elegant for everyday wear, we have something for everyone.</p>
                <p>At Elegant Jewelry, we believe that jewelry is more than just an accessory; it's a reflection of your personality and a celebration of life's precious moments. Thank you for choosing us to be a part of your journey.</p>
            </div>

            <div class="mission-vision">
                <div class="mission">
                    <h3>Our Mission</h3>
                    <p>To create timeless, high-quality jewelry that inspires confidence and celebrates individuality.</p>
                </div>
                <div class="vision">
                    <h3>Our Vision</h3>
                    <p>To be the leading brand in elegant and sustainable jewelry, recognized globally for our craftsmanship and innovation.</p>
                </div>
            </div>

            <div class="team-section">
                <h3>Meet Our Team</h3>
                <div class="team-members">
                    <div class="team-member">
                        <h4>Vraj Patel</h4>
                        <p>Project Manager</p>
                    </div>
                    <div class="team-member">
                        <h4>Meet Patel</h4>
                        <p>Marketing Lead</p>
                    </div>
                    <div class="team-member">
                        <h4>Trush Patel</h4>
                        <p>Development Head</p>
                    </div>
                    <div class="team-member">
                        <h4>Manav Patel</h4>
                        <p>Operations Manager</p>
                    </div>
                </div>
            </div>
        </div>
        </section>

    </div>
  )
}

export default Aboutus