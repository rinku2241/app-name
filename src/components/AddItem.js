import React from 'react'
class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            productName:"",
            productPrice:0
        }
    }

    render() {
        return (
            <>
                <form className="row" onSubmit={(e)=>  {
                    e.preventDefault();
                    this.props.addItem(this.state.productName, Number(this.state.productPrice))}}
                action="">
                    <div className="mb-3 col-5">
                        <label htmlFor="InputName" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Add Item"
                            name= "productName"
                            onChange={ (e)=> {this.setState({
                              productName:  e.currentTarget.value
                            })}}
                            value={this.state.productName}

                        />
                    </div>
                    <div className="mb-3 col-5">
                        <label htmlFor="InputName" className="form-label">
                            Price
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            placeholder="price for item"
                            name= "productPrice"
                            onChange={ (e)=> {this.setState({
                               productPrice: e.currentTarget.value
                            })}}
                            value={this.state.productPrice} 
                        />
                    </div>
                    <div class="col-2">
                        <button type="submit" class="btn btn-primary mb-3"> Add Item</button>
                    </div>
                </form>

            </>
        );
    }
}

export default AddItem;
