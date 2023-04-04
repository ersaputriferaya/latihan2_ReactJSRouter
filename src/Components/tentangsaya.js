import React from 'react'
import Image1 from './image1';

class TentangSaya extends React.Component {
    render() {
        return (
            <div>
                <div class="w3-row-padding w3-padding-64 w3-container">
                    <div class="w3-content">
                        <div class="w3-twothird">
                            <h1>Lorem Ipsum</h1>
                            <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

                            <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <div class="w3-third w3-center">
                            <i class="fa fa-logo.png w3-padding-64 w3-text-red"><Image1 image="logo.png">
                            </Image1></i>
                        </div>
                    </div>
                </div>

                <div class="w3-container w3-purple w3-center w3-opacity w3-padding-64">
                    <h1 class="w3-margin w3-xlarge">&copy; 2023 <a href="https://id.pinterest.com/" title="pinterest.com" target="_blank" class="w3-hover-text-green"> pinterest.com</a></h1>
                </div>

            </div>
        )
    }
}

export default TentangSaya;