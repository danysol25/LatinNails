import React from 'react';
import '../../styles/components/layout/footer.css'


const Footer = (props) => {
    return (
        <footer class="pie">
            Follow me on: 
            <div class="pie">
                <a href="https://www.instagram.com/latinnailsberlin/" target="_blank"><i class="fab fa-instagram"></i>  Instagram</a>

                <br/>
                <a href="https://www.facebook.com/latinnailsberlin.de.1" target="_blank"><i class="fab fa-facebook-square"></i>  Facebook</a>
                <br/><p class="copyright">© 2021 Daniela Sol Ceballos</p>
            </div>
        </footer>
    );
}

export default Footer;