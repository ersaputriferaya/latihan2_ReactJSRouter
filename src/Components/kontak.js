import React from 'react'

class Kontak extends React.Component {
    render() {
        return (
            <div>
                <footer class="w3-container w3-padding-64 w3-center w3-opacity">
                    <div class="w3-xlarge w3-padding-32">
                        <i class="fa fa-facebook-official w3-hover-opacity"></i> &nbsp;
                        <i class="fa fa-instagram w3-hover-opacity"></i> &nbsp;
                        <i class="fa fa-snapchat w3-hover-opacity"></i> &nbsp;
                        <i class="fa fa-pinterest-p w3-hover-opacity"></i> &nbsp;
                        <i class="fa fa-whatsapp w3-hover-opacity"></i>
                    </div>
                    <p>Powered by</p>
                    <div class="w3-container w3-purple w3-center w3-opacity w3-padding-64">
                        <h1 class="w3-margin w3-xlarge">&copy; 2023 <a href="https://id.pinterest.com/" title="pinterest.com" target="_blank" class="w3-hover-text-green"> pinterest.com</a></h1>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Kontak;