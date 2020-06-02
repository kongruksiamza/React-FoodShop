import React ,{Component} from "react";
import Store from "../Store";
import {shopdata} from "../../data.js";
export default class ShopList extends Component{
    state={
        shops:shopdata
    };
    removeShop=id=>{
        const {shops}=this.state;
        const sortedshop=shops.filter(shop=>shop.id!==id);
        this.setState({
              shops:sortedshop
        });
    }
    render(){
      const {shops}=this.state;
      return(
          <div className="shopList">
              {shops.map(shop=>(
                    <Store key={shop.id} shop={shop} removeShop={this.removeShop}/>
              ))}
          </div>
      );
    }

}
