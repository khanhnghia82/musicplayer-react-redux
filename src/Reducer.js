import SONGS from './Data.json'

const MusicPlayerInitialState = {
  currentIndex: 0,
  currentSong: SONGS[0],
  currentVolume: 100,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  lengthOfSongs: SONGS.length,
  isDarkTheme: false
}

const Reducer = (state = MusicPlayerInitialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_SONG":      
      return {...state, 
        currentIndex: action.index,
        currentSong: action.song
      }
    case "SET_NEXT_PREV_SONG":      
      return {...state, 
        currentIndex: action.index,
        currentSong: SONGS[action.index]
      }
    case "SET_ISPLAYING":      
      return {...state,     
        isPlaying: !state.isPlaying
      }
    case "SET_ISDARKTHEME":      
      return {...state,     
        isDarkTheme: !state.isDarkTheme
      }
    case "SET_ISRANDOM":      
      return {...state,     
        isRandom: !state.isRandom
      }
    case "SET_ISREPEAT":      
      return {...state,     
        isRepeat: !state.isRepeat
      }
    case "SET_VOLUME": 
      return {...state, 
        currentVolume: action.volume
      }   
   
    default:
      return state
  }
}

export default Reducer