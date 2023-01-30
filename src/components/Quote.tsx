import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'
import IconDice from '../assets/images/icon-dice.svg'
import PatternDevider from '../assets/images/pattern-divider-mobile.svg'

export default function Quote() {
  let queryClient = useQueryClient()
  const {
    data: quote,
    isLoading,
    isError,
    error
  } = useQuery(['quote'], async() => {
    return (await axios.get('https://api.quotable.io/random?maxLength=90')).data
  })

  const generateQuote = () => {
    queryClient.invalidateQueries(['quote'])
  }

  return (
    <main className="component">
      <div className='component__quote-number'>
        <span>Advice #112</span>
      </div>
      <div className='component__quote-text'>
        <p>{quote ? quote.content : "Getting it 🚀"}</p>
        <img src={PatternDevider} alt="vertical line as devider"/>
      </div>
      <div 
        className='component__icon-dice'
        onClick={generateQuote}>
        <img src={IconDice} alt="dice icon"/>
      </div>
    </main>
  )
}
