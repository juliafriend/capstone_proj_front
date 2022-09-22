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
    axios.delete('http://localhost:8080/pack/' + event.target.value)
    .then(() => {
      axios.get('http://localhost:8080/pack').then((response) => {
      setPacklists(response.data)
        })
     })
  }

const handleUpdateDay = (data) => {
  axios.put('http://localhost:8080/pack/' + data.target.value,
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
  axios.put('http://localhost:8080/pack/' + data.target.value,
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
  axios.put('http://localhost:8080/pack/' + data.target.value,
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
  axios.put('http://localhost:8080/pack/' + data.target.value,
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
  axios.put('http://localhost:8080/pack/' + data.target.value,
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

useEffect(() => {
  getPackList()
}, [])

const getPackList = () => {
  axios
  .get('http://localhost:8080/pack')
  .then((response) => {
    setPacklists(response.data)
  })
}

  return <div>
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
              <button className='update' onClick={ (event) => { handleUpdateDay(packlist) } }>Update Name</button>
              <input className='update1' type="text" placeholder={travel.name} onKeyUp= {updateNewNameChange}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateDate(packlist) } }>Edit Location</button>
              <input className='update1' type="text" placeholder={travel.location} onKeyUp= {updateNewLocationChange}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateOutfitOne(packlist) } }>Update Description</button>
              <input className='update1' type="text" placeholder={travel.description} onKeyUp= {updateNewDescriptionChange}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateOutfitTwo(packlist) } }>Update Image</button>
              <input className='update1' type="text" placeholder={travel.image} onKeyUp= {updateNewImageChange}/> <br/>
              <button className='update' onClick={ (event) => { handleUpdateOutfitThree(packlist) } }>Update Nearby</button>
              <input className='update1' type="text" placeholder={travel.nearby} onKeyUp= {updateNewNearbyChange}/> <br/>
              </div>
                <button value={packlist.id} onClick={this.deletePacklist}>Delete</button>
              </details>
              </div>
                  )})
              }
          <div className="newContainer">
          <form onSubmit={this.createPackList}>
              <input onKeyUp={this.changeNewDay} type="text" placeholder="Day #" /><br/>
              <input onKeyUp={this.changeNewDate} type="text" placeholder="Date" /><br/>
              <input onKeyUp={this.changeNewOutfitOne} type="text" placeholder="Outfit 1" /><br/>
              <input onKeyUp={this.changeNewOutfitTwo} type="text" placeholder="Outfit 2" /><br/>
              <input onKeyUp={this.changeNewOutfitThree} type="text" placeholder="Outfit 3" /><br/>
              <input type="submit" value="Add to List" />
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
  }

export default App;

