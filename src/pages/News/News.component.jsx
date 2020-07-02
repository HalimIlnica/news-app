import React from 'react';
// import NewsPage from './pages/NewsPage/NewsPage.component.jsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'


const News = () => {
  const history = useHistory()
  return(
  
      <div>
      <AppBar to='/news/create' position="static" style={{marginLeft:40,marginRight:40,marginTop:10, width:'90%'}}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          News Site
        </Typography>
      </Toolbar>
    </AppBar>

    <AppBar position="static" style={{marginLeft:40,marginRight:40,marginTop:10, width:'90%', background:'white'}}>
      <Toolbar variant="dense">
        <Typography variant="h6" style={{color:'black'}}>
          Your News
        </Typography>
      </Toolbar>
    </AppBar>
    <Button variant="contained" onClick={()=> history.push('/news/create')} fullWidth style={{textAlign:'left'}} color="primary">
    + Create News
    </Button>
    </div>
  )
}
  
  
   
       /* <div className="post-container">
       
          <ul>
            {this.state.news.map((news, index) => (
              <li key={index}>
                                
                    <AppBar position="static" style={{marginLeft:40,marginRight:40,marginTop:10, width:'90%', background:'white'}}>
                        <Toolbar variant="dense">
                        <Typography variant="h6" style={{color:'black'}}>
                        <div>
                            <p>{news.name}</p>
                        </div>  
                            <p class="playerOne">{news.author}</p>
                            <p class="playerTwo">{news.date}</p>
                        </Typography>
                        </Toolbar>
                    </AppBar>
                      
              </li>
            ))}
          </ul> */

     
    


export default News