import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

const [packlists, setPacklists]= useState([])
const [newDay, setNewDay]= useState('');
const [newDate, setNewDate]= useState('');
const [newOutfitOne, setNewOutfitOne]= useState('');
const [newOutfitTwo, setNewOutfitTwo]= useState('');
const [newOutfitThree, setNewOutfitThree]= useState('');
const [updatedDay, setUpdatedDay]= useState('');
const [updatedDate, setUpdatedDate]= useState('');
const [updatedOutfitOne, setUpdatedOutfitOne]= useState('');
const [updatedOutfitTwo, setUpdatedOutfitTwo]= useState('');
const [updatedOutfitThree, setUpdatedOutfitThree]= useState('');

const changeNewDay = (event) => {
  setNewDay(event.target.value)
}
const changeNewDate = (event) => {
    setNewDate(event.target.value)
}
const changeNewOutfitOne = (event) => {
  setNewOutfitOne(event.target.value)
}
const changeNewOutfitTwo = (event) => {
  setNewOutfitTwo(event.target.value)
}
const changeNewOutfitThree = (event) => {
  setNewOutfitThree(event.target.value)
}
const changeUpdateDay = (event) => {
  setUpdatedDay(event.target.value)
}
const changeUpdateDate = (event) => {
  setUpdatedDate(event.target.value)
}
const changeUpdateOutfitOne = (event) => {
  setUpdatedOutfitOne(event.target.value)
}
const changeUpdateOutfitTwo = (event) => {
  setUpdatedOutfitTwo(event.target.value)
} 
const changeUpdateOutfitThree = (event) => {
  setUpdatedOutfitThree(event.target.value)
}

const createPackList = (event) => {
    event.preventDefault();
    axios.post(
      'http://localhost:8080/pack',
        {
            day:newDay,
            date:newDate,
            outfitOne:newOutfitOne,
            outfitTwo:newOutfitTwo,
            outfitThree:newOutfitThree,
        }
    ).then(() => {
      axios.get('http://localhost:8080/pack').then((response) => {
      setPacklists(response.data)
        })
     })
  }

const deletePacklist = (event) => {
    axios.delete(`http://localhost:8080/pack/${event.id}`)
    .then(() => {
      axios.get('http://localhost:8080/pack').then((response) => {
      setPacklists(response.data)
        })
     })
  }

const handleUpdateDay = (data) => {
  axios.put(`http://localhost:8080/pack/${data.id}`,
  {
    day:updatedDay,
    date: data.date,
    outfitOne: data.outfitOne,
    outfitTwo: data.outfitTwo,
    outfitThree: data.outfitThree
  }
  ).then(() => {axios.get('http://localhost:8080/pack')
  .then((response) => {
    setPacklists(response.data)
      })
   })
}
const handleUpdateDate = (data) => {
  axios.put(`http://localhost:8080/pack/${data.id}`,
  {
    day:data.day,
    date: updatedDate,
    outfitOne: data.outfitOne,
    outfitTwo: data.outfitTwo,
    outfitThree: data.outfitThree
  }
  ).then(() => {axios.get('http://localhost:8080/pack')
  .then((response) => {
    setPacklists(response.data)
      })
   })
}
const handleUpdateOutfitOne = (data) => {
  axios.put(`http://localhost:8080/pack/${data.id}`,
  {
    day:data.day,
    date: data.date,
    outfitOne: updatedOutfitOne,
    outfitTwo: data.outfitTwo,
    outfitThree: data.outfitThree
  }
  ).then(() => {axios.get('http://localhost:8080/pack')
  .then((response) => {
    setPacklists(response.data)
      })
   })
}
const handleUpdateOutfitTwo = (data) => {
  axios.put(`http:localhost:8080/pack/${data.id}`,
  {
    day: data.day,
    date: data.date,
    outfitOne: data.outfitOne,
    outfitTwo: updatedOutfitTwo,
    outfitThree: data.outfitThree
  }
  ).then(() => {axios.get('http://localhost:8080/pack')
  .then((response) => {
    setPacklists(response.data)
      })
   })
}
const handleUpdateOutfitThree = (data) => {
  axios.put(`http://localhost:8080/pack/${data.id}`,
  {
    day: data.day,
    date: data.date,
    outfitOne: data.outfitOne,
    outfitTwo: data.outfitTwo,
    outfitThree: updatedOutfitThree
  }
  ).then(() => {axios.get('http://localhost:8080/pack')
  .then((response) => {
    setPacklists(response.data)
      })
   })
}



const getPackList = () => {
  axios
  .get('http://localhost:8080/pack')
  .then((response) => {
    setPacklists(response.data)
  })
}
useEffect(() => {
  getPackList()
}, [])

  return (
  <>
    <h2>Current Packing List</h2>
      <div className="mainContainer">
        {
          packlists.map((packlist) => {
            return (   
              <div className="container">
              <h2>{packlist.day}</h2>
              <h2>{packlist.date}</h2>
              <h4>{packlist.outfitOne}</h4>
              <h4>{packlist.outfitTwo}</h4>
              <h4>{packlist.outfitThree}</h4>
              <button className='delete' onClick={ (event)=>{ deletePacklist(packlist) } }>Delete</button> <br></br>                
              <details> <summary>Modify List</summary>
              <div className='updateContainer'>
              <button className='update' onClick={ (event) => { handleUpdateDay(packlist) } }>Update Day</button>
              <input className='update1' type="text" placeholder={packlist.day} onKeyUp= {changeUpdateDay}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateDate(packlist) } }>Update Date</button>
              <input className='update1' type="text" placeholder={packlist.date} onKeyUp= {changeUpdateDate}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateOutfitOne(packlist) } }>Update</button>
              <input className='update1' type="text" placeholder={packlist.outfitOne} onKeyUp= {changeUpdateOutfitOne}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateOutfitTwo(packlist) } }>Update</button>
              <input className='update1' type="text" placeholder={packlist.outfitTwo} onKeyUp= {changeUpdateOutfitTwo}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateOutfitThree(packlist) } }>Update</button>
              <input className='update1' type="text" placeholder={packlist.outfitThree} onKeyUp= {changeUpdateOutfitThree}/> <br/>
              </div>
              </details>
              </div>
                  )})
              }
          <div className="newContainer">
          <h2>Add a list</h2>
            <div className='subContainer1'>
              <form onSubmit={createPackList}>
                <input className='update1' type="text" placeholder="Day" onChange={changeNewDay}/><br/>
                <input className='update1' type="text" placeholder="Date" onChange={changeNewDate}/><br/>
                <input className='update1' type="text" placeholder="Outfit 1" onChange={changeNewOutfitOne}/><br/>
                <input className='update1' type="text" placeholder="Outfit 2" onChange={changeNewOutfitTwo}/><br/>
                <input className='update1' type="text" placeholder="Outfit 3" onChange={changeNewOutfitThree}/><br/>
                <br></br>
                <input className='margin' type="submit" value="Add List"/>
                <input className='margin1' type="reset" value="Reset Form"/>
              </form>
            </div>
            </div>
          <div className="Outfit Options">
              <h3>travel day</h3>
              <h3>activewear</h3>
              <h3>casual</h3>
              <h3>formal/going out</h3>
              <h3>accessories</h3>
          </div>
      </div>
      </>
      )
  }

export default App;

