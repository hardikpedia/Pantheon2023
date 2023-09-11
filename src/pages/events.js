import Image from "next/image"

const events = () => {
  return (
    <div className= 'bg-black text-white h-screen flex items-center justify-center'>
        <div className='card' >
            <Image src='/pics.jpeg' alt='poster' height="500" width="320" 
             className="card-img"
            />
        </div>
    </div>
  )
}

export default events