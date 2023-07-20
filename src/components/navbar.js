import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <h2>Carts</h2>
                        </a>
                    </div>
                </nav>

            </>
        )
    }
}

export default Navbar;