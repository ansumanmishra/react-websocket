import React from 'react';

import './footer.css';

class Footer extends React.Component {
    render() {
        return(
            <section className="footer-block">
            	<footer className="footer-block__global">
            		<div className="footer-block__global-copyright">Copyright ©  2018</div>
            	</footer>
            </section>
        );
    }
}

export default Footer;