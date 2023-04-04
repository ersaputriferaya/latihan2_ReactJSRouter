import React from 'react'
import Media from './Media';
import Image from './image';

class Beranda extends React.Component {
    render() {
        return (
            <div>
                <Media image="bunga.jfif">
                </Media>
                <h2 className="judul">Selamat Datang Di Website Stiker.co</h2>
                <button className="button"><a className="a" href="#shop">Shop Now</a></button>

                <div class="list-produk" id="shop">
                    <Image image="stiker_1.jfif" alt="stiker1"></Image>

                    <h4>Stiker Girl Peach</h4>
                    <h5>Rp 5.000, -</h5>

                    <a class="tombol tombol-detail" href="#">Detail</a>
                    <a class="tombol tombol-beli" href="#">Beli</a>
                </div>
                <div class="list-produk">
                    <Image image="stiker_2.jfif" alt="stiker2"></Image>

                    <h4>Stiker Lucu Rainbow</h4>
                    <h5>Rp 5.000, -</h5>

                    <a class="tombol tombol-detail" href="#">Detail</a>
                    <a class="tombol tombol-beli" href="#">Beli</a>
                </div>
                <div class="list-produk">
                    <Image image="stiker_3.jfif" alt="stiker3"></Image>

                    <h4>Stiker Lucu Bear</h4>
                    <h5>Rp 5.000, -</h5>

                    <a class="tombol tombol-detail" href="#">Detail</a>
                    <a class="tombol tombol-beli" href="#">Beli</a>
                </div>
                <div class="list-produk">
                    <Image image="stiker_4.jfif" alt="stiker4"></Image>

                    <h4>Stiker Aesthetic</h4>
                    <h5>Rp 6.000, -</h5>

                    <a class="tombol tombol-detail" href="#">Detail</a>
                    <a class="tombol tombol-beli" href="#">Beli</a>
                </div>
                <div class="list-produk">
                    <Image image="stiker_5.jfif" alt="stiker4"></Image>

                    <h4>Stiker Kupu Ungu</h4>
                    <h5>Rp 5.000, -</h5>

                    <a class="tombol tombol-detail" href="#">Detail</a>
                    <a class="tombol tombol-beli" href="#">Beli</a>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div class="w3-container w3-purple w3-center w3-opacity w3-padding-64">
                    <h1 class="w3-margin w3-xlarge">&copy; 2023 <a href="https://id.pinterest.com/" title="pinterest.com" target="_blank" class="w3-hover-text-green"> pinterest.com</a></h1>
                </div>
            </div>
        )
    }
}
export default Beranda;