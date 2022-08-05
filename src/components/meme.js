import React from 'react'

function Meme(){
   /* function Generate(){
       const memes = memesData.data.memes;
       const random = Math.floor(Math.random()*memes.length)
       const url = memes[random].url
       alert(url)
    }*/
    const [meme, updateImg] = React.useState({
        topText: " ",
        bottomText: " ",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImg, setAllmeme] = React.useState([])
    
    const random = Math.floor(Math.random()*allMemeImg.length)

    React.useEffect(function(){
        // fetch("https://api.imgflip.com/get_memes")
        // .then (res=>res.json())
        // .then(data=>setAllmeme(data.data.memes))

        async function getMemes(){
            const res = await fetch ("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllmeme(data.data.memes)
        }

        getMemes()
    }, [])

    function Generate(){
        updateImg((prev)=>{
            return{
                ...prev,
                randomImg: allMemeImg[random].url,
            }
        })
    }
    function handleChange(event){
        const {name, value} = event.target
        updateImg((prev)=>{
            return{
                ...prev,
                [name]:  value,
            }
        })
    }
    
    return(
        <div className = "main-section">
            <section className='inputs'>
                <input type="text" placeholder='Top text' className ="first-input"
                       name ="topText" value={meme.topText} onChange = {handleChange}
                />
                <input type="text" placeholder='Bottom text' className ="sec-input"
                        name ="bottomText" value={meme.bottomText} onChange = {handleChange}
                />
            </section>
       
        <button className='submit' onClick={Generate}>Get new meme image</button>
       
        <div className="meme">
                <img src={meme.randomImg} className="meme-img" alt = "memepic"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </div>
    )
}

export default Meme