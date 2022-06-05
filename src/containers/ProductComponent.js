import React from 'react';

const ProductComponent = (props) => {
    const { title } = props;
    return (
        <div className="four wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header">{title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductComponent 