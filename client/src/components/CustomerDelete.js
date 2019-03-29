import React from 'react';

class CustomerDelete extends React.Component{
    deleteCustomer(id){
        // 패스배리어블로 사용
        
        console.log("접근성공");
        const url='/api/customers/'+id;
        fetch(url,{
            method:'DELETE'
        });
        this.props.stateRefresh();
    }

    render(){
        return(
            <button onClick={(e)=>{this.deleteCustomer(this.props.id)}}>삭제</button>
        )
    }

}

export default CustomerDelete;