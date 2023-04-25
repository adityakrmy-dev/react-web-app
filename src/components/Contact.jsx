import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1 style={{fontSize:"50px"}}>Contact</h1>
        <form action="">
            <div>
                <label>Name </label>
                <input type="text" required placeholder='Aditya pal'/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" required placeholder='example@gmail.com'/>
            </div>
            <div>
                <label>Messege</label>
                <input type="text" required placeholder='Tell us about your query....'/>
            </div>
            <botton type='submit'>Send</botton>
        </form>
      </main>
    </div>
  )
}

export default Contact
