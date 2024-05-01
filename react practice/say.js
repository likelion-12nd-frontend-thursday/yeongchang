import { useState } from "react";

const Say = () => {
  const [message, Setmessage] = useState('');
  const onClickenter = () => Setmessage('안녕하세요');
  const onClickleave = () => Setmessage('안녕히 가세요');

  return (
    <div>
      <button onClick={onClickenter}>입장</button>
      <button onClick={onClickleave}>퇴장</button>
      <h1>{message}</h1>


    </div>



  )
}







export default Say;