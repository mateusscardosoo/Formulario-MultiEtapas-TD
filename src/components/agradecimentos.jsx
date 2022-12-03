import React from 'react';
import './agradecimentos.css'
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
const agradecimentos = ( { data }) => {

  const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: < BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>
  }
  return (
    <div className='thanks-container'>
        <h2>Falta pouco.....</h2>
        <p>Sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra</p>
        <p>Para concluir sua avaliação clique no botão Enviar abaixo</p>
          <h3>Aqui está o resumo da sua avaliação {data.name} !</h3>
          <p className="review-data">
            <span>Satisfação com o produto: </span>
            {emojiData[data.review]}
          </p>
          <p className="review-data">
            <span>Comentário:</span>
            {data.comment}
          </p>
    
    
    </div>
  )
}

export default agradecimentos