import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [totPayable, setTotpayable] = useState(0)
  const [totDue, setTotdue] = useState(0)
  const [data, setData] = useState([])
  const [isShown, setIsShown] = useState(false);

async function getData(){
  fetch('./data.json')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    setData(data);
  });
  }

  useEffect(()=>{
    getData()
  },[])

  console.log(">>thisdata", data)
  // data.map((e)=>{
  //   // setTotpayable(totPayable + e.payableAmount)  
  //   setTotpayable((totPayable) => totPayable + 1)
  // })

  return (
    <div>
    <h1>DUSS DIGITAL INTERVIEW ASSESMENT</h1>
    <table>
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
          <th>{i}</th>
          <th>{e.companyName}</th>
          <th>{e.resourceAlias.length}</th>
           {/* {isShown && (
              <div>
                {e.resourceAlias}
              </div>
            )} */}
          <th className={e.paymentStatus == "Pending" ? 'bg-red' : 'bg-green'}>{e.paymentStatus}</th>
          <th>{e.payableAmount}</th>
          <th>{e.invoiceDetail.amountDue}</th>
          <th>{<button>add</button>}</th>
        </tr>
      )

    })}    
    </table>
    <h3>Total Payable Amount: {totPayable}</h3>
    <h3>Total Dues Pending:{totDue}</h3>
    </div>
  );
}

export default App;
