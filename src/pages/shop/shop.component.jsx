import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colections: SHOP_DATA
        }
    }
    render() {
        const { colections } = this.state;
        return (
            <div className="shop-page">
                {
                    colections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }


}

export default ShopPage;