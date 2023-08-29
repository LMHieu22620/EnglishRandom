import React, { useState } from 'react'

const ArrayFillterForm = [
  {
    id: 0,
    image: '/anh1.jpg',
    suggest: '1. smile / because / gift',
    answer: 'the man is smiling because his girlfriend is giving him the gift'
  },
  {
    id: 1,
    image: '/anh2.jpg',
    suggest: '2. stand / although / rain',
    answer: 'the people are standing in front of the building although it is raining'
  },
  {
    id: 2,
    image: '/anh3.jpg',
    suggest: '3. read / and / colleague',
    answer: 'the man is reading the book at the meeting room and colleagues are listening'
  },
  {
    id: 3,
    image: '/anh4.jpg',
    suggest: '4. woman / while / read',
    answer: 'the woman is sitting on the bench while she is reading the book'
  },
  {
    id: 4,
    image: '/anh5.jpg',
    suggest: '5. boy / whereas / sit',
    answer: 'the boy is standing at the class whereas the other people are sitting'
  },
  {
    id: 5,
    image: '/anh6.jpg',
    suggest: '6.because/ park/ relax',
    answer: 'because it is a sunny day people are relaxing at the park'
  },
  {
    id: 6,
    image: '/anh7.jpg',
    suggest: '7.patient / while/ lie',
    answer: 'the doctor is talking to the patient while he is lying on the sickbed'
  },
  {
    id: 7,
    image: '/anh8.jpg',
    suggest: '8.children/ happy / birthday party',
    answer: 'the children are happy because they are joining a birthday party'
  },
  {
    id: 8,
    image: '/anh9.jpg',
    suggest: '9.newspaper / while/ drink',
    answer: 'the woman is holding a newspaper while she is drinking a cup of coffee'
  },
  {
    id: 9,
    image: '/anh10.jpg',
    suggest: '10.microscope/ and/ look',
    answer: 'the woman is using a microscope and the man is looking at equipment'
  },
  {
    id: 10,
    image: '/anh11.jpg',
    suggest: '11.a teaspoon/ who/ taste',
    answer: 'the woman who is holding a teaspoon has a taste of food'
  },
  {
    id: 11,
    image: '/anh12.jpg',
    suggest: '12.backpacks/ who/ top of the mountain',
    answer: 'the people who are wearing their backpacks are resting on the top of the mountain'
  },
  {
    id: 12,
    image: '/anh13.jpg',
    suggest: '13.presentation/ while/ listen',
    answer: 'the man is making a presentationwhile other people are listening to his speech'
  },
  {
    id: 13,
    image: '/anh14.jpg',
    suggest: '14.obvious/ choose/ clothes',
    answer: 'it is obvious that the woman is choosing clothes'
  },
  {
    id: 14,
    image: '/anh15.jpg',
    suggest: '15.clean / who / happy',
    answer: 'some people who are cleaning their home are happy'
  },
  {
    id: 15,
    image: '/anh16.jpg',
    suggest: '16.there/ who / lesson',
    answer: 'there are many students who are focussing on the lesson'
  },
  {
    id: 16,
    image: '/anh17.jpg',
    suggest: '17.if / fit / buy',
    answer: 'if a pair of shoes fit her feet, She will buy it'
  },
  {
    id: 17,
    image: '/anh18.jpg',
    suggest: '18.newspaper / pile / floor',
    answer: 'many newspapers which were piled up are on the floor'
  },
  {
    id: 18,
    image: '/anh19.jpg',
    suggest: '19.bench/ who / happy',
    answer: 'the people who are sitting on the bench are happy'
  },
  {
    id: 19,
    image: '/anh20.jpg',
    suggest: '20.glasses /fill / wine',
    answer: 'some glasses which were filled with wine are on the table'
  },
  {
    id: 20,
    image: '/anh21.jpg',
    suggest: '21.clear / that / photograph',
    answer: 'it is clear that the woman is taking a photograph'
  },
  {
    id: 21,
    image: '/anh22.jpg',
    suggest: '22.clean / who /smile',
    answer: 'the teacher who is cleaning a board is smiling'
  },
  {
    id: 22,
    image: '/anh23.jpg',
    suggest: '23.wash/ before / lunch',
    answer: 'many children are washing their hands before they have a lunch'
  },
  {
    id: 23,
    image: '/anh24.jpg',
    suggest: '24.cars / park / along',
    answer: 'some cars were parked along the street while many houses are located side by side'
  },
  {
    id: 24,
    image: '/anh25.jpg',
    suggest: '25.nice/ therefore / cycle',
    answer: 'it is a nice day and therefore the people are cycling outdoors'
  },
  {
    id: 25,
    image: '/anh26.jpg',
    suggest: '26.although / train/ stand in line',
    answer: 'although the train is going to depart many passengers still are standing in line'
  },
  {
    id: 26,
    image: '/anh27.jpg',
    suggest: '27.because / rain / umbrella',
    answer: 'because it is raining the people are using umbrellas'
  },
  {
    id: 27,
    image: '/anh28.jpg',
    suggest: '28.mouth/ while /examine',
    answer: 'the patient is opening her mouth while the doctor is examining'
  },
  {
    id: 28,
    image: '/anh29.jpg',
    suggest: '29.shoulder bag / who / get on',
    answer: 'the man who is wearing a shoulder bag is getting on the plane'
  },
  {
    id: 29,
    image: '/anh30.jpg',
    suggest: '30.excited / when / gift',
    answer: 'the woman is excited when she receives a gift from her friend'
  },
  {
    id: 30,
    image: '/anh31.jpg',
    suggest: '31.baby / look/ himself',
    answer: 'the baby who is sitting is looking at himself in the mirror'
  },
  {
    id: 31,
    image: '/anh32.jpg',
    suggest: '32.what/ present / confused',
    answer: 'what the man is presenting is confused'
  },
  {
    id: 32,
    image: '/anh33.jpg',
    suggest: '33.what/ present / confused',
    answer: 'the boy is studying hard so that he can pass his exam tomorrow'
  },
  {
    id: 33,
    image: '/anh34.jpg',
    suggest: '34.talented / moreover/ handsome',
    answer: 'the man is a talented singer moreover he ishandsome'
  },
  {
    id: 34,
    image: '/anh35.jpg',
    suggest: '35.win / because / effort',
    answer: 'vietnam won the AFF Cup because they made a big effort'
  }
]

interface Props {
  id?: number
  image: string
  suggest: string
  answer: string
}
const REGEX = /[^a-zA-Z0-9]/g

export default function Home() {
  const [randomPicture, setRandomPicture] = useState<Props>(ArrayFillterForm[0])
  const [checkErrorMessage, setcheckErrorMessage] = useState('')

  const randomQuestion = (arr: Props[]) => {
    const randomIndex = Math.floor(Math.random() * arr.length)

    const item = arr[randomIndex]

    return item
  }

  const handleFillByIndex = (index: number) => {
    setRandomPicture(ArrayFillterForm[index])
    setcheckErrorMessage('')
  }

  const handleOnchangAnswer = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let { value } = event.target
    setcheckErrorMessage(value)
  }

  const handleMessageError = (answer: string) => {
    if (checkErrorMessage === '') {
      return 'Viết đi để ra trường kìa '
    } else if (answer.length - checkErrorMessage.length >= 3) {
      return 'Ráng lên , đúng thầy cho ly trà sữa'
    } else if (
      answer.length - checkErrorMessage.length <= 3 &&
      checkErrorMessage.toLocaleLowerCase().replace(REGEX, '') !== answer.toLocaleLowerCase().replace(REGEX, '')
    ) {
      return 'Ráng lên ,  gần được ly trà sữa rồi đó'
    } else if (
      checkErrorMessage.toLocaleLowerCase().replace(REGEX, '') === answer.toLocaleLowerCase().replace(REGEX, '')
    ) {
      return 'Đúng rồi ,chúc mừng em, đúng hết 35 câu thầy cho ly trà sữa'
    }
  }

  const handleRandom = () => {
    setRandomPicture(randomQuestion(ArrayFillterForm))
    setcheckErrorMessage('')
  }

  return (
    <div className='container'>
      <div className='flex flex-col text-center justify-center w-[100%] items-center '>
        <div className='p-3 text-5xl'>Writing</div>
        <div className='text-xl'>Chú Ý:Viết giống y tài liệu thầy đưa là ok nhá</div>
        <div>
          <div className='text-2xl'>{randomPicture.suggest}</div>

          <div className='grid lg:flex border p-5'>
            <img src={randomPicture.image} alt='' className='w-[400px] h-[300px ]' />
            <div className='w-full lg:h-[350px] h-[200px] lg:w-[400px]'>
              <textarea
                className='border text-lg h-full resize-none w-full outline-none p-3 lg:text-2xl break-all'
                placeholder='Answer:__________________'
                value={checkErrorMessage}
                onChange={(event) => handleOnchangAnswer(event)}
              />
            </div>
          </div>
        </div>
        <div className='mt-3  lg:text-2xl text-orange'>{handleMessageError(randomPicture.answer)} </div>
        <div>
          <button className='mt-3 p-4 text-white hover:bg-orange/95 bg-orange' onClick={handleRandom}>
            RandomPicture
          </button>
        </div>
      </div>
      <div className='mt-4 pb-4 grid grid-cols-6 lg:grid-cols-12 items-end gap-4'>
        {ArrayFillterForm.map((itemQuestion, index) => {
          return (
            <button
              className={randomPicture.id === index ? 'p-4 border bg-orange text-white' : 'p-4 border'}
              onClick={() => handleFillByIndex(index)}
            >
              {itemQuestion.id + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}
