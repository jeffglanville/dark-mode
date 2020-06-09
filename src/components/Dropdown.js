import React from 'react';
import "./Dropdown.scss";

class Dropdown extends React.Component {
    constructor(){
        super();
        this.state = {
            menu: false
        }
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({ menu: true }, () => {
            document.addEventListener('click', this.hideMenu);
        });
    }

    hideMenu(e) {
        this.setState({ menu: false }, () => {
            document.removeEventListener('click', this.hideMenu);
        })
    }

    render() {
        return (
            <div className="dropdown">
                <div>
                    <button className="btn" onClick={this.showMenu}>Choose a Coin</button>
                    {this.state.menu ? (
                        <ul>
                            <li><a href="bitcoin">Bitcoin</a></li>
                            <li><a href="Ethereum">Ethereum</a></li>
                            <li><a href="Tether">Tether</a></li>
                            <li><a href="XRP">XRP</a></li>
                            <li><a href="Bitcoin Cash">Bitcoin Cash</a></li>
                            <li><a href="Bitcoin SV">Bitcoin SV</a></li>
                            <li><a href="Litecoin">Litecoin</a></li>
                            <li><a href="Cardano">Cardano</a></li>
                            <li><a href="EOS">EOS</a></li>
                            <li><a href="Binance Coin">Binance Coin</a></li>
                        </ul>
                    ):
                    null
                    }
                </div>
            </div>
        )
    }
}

export default Dropdown;