import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState([])

async function getData(){
  fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    setData(data);
  });
  }

  let totPay = data.reduce(function(preAl, currAl){
    return preAl + currAl.payableAmount;
  },0);

  let totDue = data.reduce(function(preAl, currAl){
    return preAl + currAl.invoiceDetail.amountDue;
  },0);

  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
    <h1 className='h1'>DUSS DIGITAL INTERVIEW ASSESMENT</h1>
    <table id='t1' className='t1'>
    <tr>
      <th>ID</th>
      <th>COMPANY-Name</th>
      <th>QuantityofresourceAliasbooked</th>
      <th>PaymentStatus</th>
      <th>PayableAmount</th>
      <th>PendingAmount</th>
      <th>Action</th>
    </tr>
    {data.map((e, i)=>{
      return(
        <tr>
          <th>{i+1}</th>
          <th>{e.companyName}</th>
          <th>{e.resourceAlias.length}</th>
          <th className={e.paymentStatus === "Pending" ? 'bg-red' : 'bg-green'}>{e.paymentStatus}</th>
          <th>{e.payableAmount}</th>
          <th>{e.invoiceDetail.amountDue}</th>
          <th>{<button>add</button>}</th>
        </tr>
      )

    })}    
    </table>
    <h3>Total Payable Amount: {totPay}</h3>
    <h3>Total Due Amount Pending: {totDue}</h3>
    </div>
  );
}

export default App;