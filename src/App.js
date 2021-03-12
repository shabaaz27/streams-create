import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/header/Header';
import StreamCreate from './components/streams/StreamCreate';
import StreamDelete from './components/streams/StreamDelete';
import StreamEdit from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';


  const App = () =>{
     return (
       <div className="ui container">
   
       <BrowserRouter>
       <div>
       <Header/>
       <Route exact path="/" component={StreamList}>
       </Route>
       <Route exact path="/streams/new" component={StreamCreate}>
       </Route>
       <Route exact path="/streams/edit" component={StreamEdit}>
       </Route>
       <Route exact path="/streams/delete" component={StreamDelete}>
       </Route>
       <Route exact path="/streams/show" component={StreamShow}>
       </Route>
       </div>
       </BrowserRouter>
       

       </div>
  );
}

export default App;
