import React from 'react';
// import logo from './logo.svg';
import './App.css';

// const pstyle={
//   top:'16px'
// }

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            availableItems: [
                { id: 1, name: 'course.jpg', text: 'This is a sample text.' },  
                { id: 2, name: 'course2.jpg', text: 'This is a sample text.' },
                { id: 3, name: 'course3.jpg', text: 'This is a sample text.' },
                { id: 4, name: 'course4.jpg', text: 'This is a sample text.' },
                { id: 5, name: 'course5.jpg', text: 'This is a sample text.' },
                { id: 6, name: 'course6.jpg', text: 'This is a sample text.' },
                { id: 7, name: 'course7.jpg', text: 'This is a sample text.' },
                { id: 8, name: 'course8.jpg', text: 'This is a sample text.' },
                { id: 9, name: 'course9.jpg', text: 'This is a sample text.' },
                { id: 10, name: 'course10.jpg', text: 'This is a sample text.' },
                { id: 11, name: 'course11.jpg', text: 'This is a sample text.' },
                { id: 12, name: 'course12.jpg', text: 'This is a sample text.' },
                { id: 13, name: 'course13.jpg', text: 'This is a sample text.' },
                { id: 14, name: 'course14.jpg', text: 'This is a sample text.' },
                { id: 15, name: 'course15.jpg', text: 'This is a sample text.' },
                { id: 16, name: 'course16 .jpg', text: 'This is a sample text.' },
                { id: 17, name: 'video.gif', text: 'This is a sample text.' },
                { id: 18, name: 'video2.gif', text: 'This is a sample text.' },
                { id: 19, name: 'video3.gif', text: 'This is a sample text.' },
                { id: 20, name: 'video4.gif', text: 'This is a sample text.' },
                { id: 21, name: 'video5.gif', text: 'This is a sample text.' },
                { id: 22, name: 'video6.gif', text: 'This is a sample text.' },
                { id: 23, name: 'video7.gif', text: 'This is a sample text.' },
                { id: 24, name: 'video8.gif', text: 'This is a sample text.' },
                { id: 25, name: 'video9.gif', text: 'This is a sample text.' },
                { id: 26, name: 'video10.gif', text: 'This is a sample text.' },
                { id: 27, name: 'video11.gif', text: 'This is a sample text.' },
                { id: 28, name: 'video12.gif', text: 'This is a sample text.' },
                { id: 29, name: 'course17.jpg', text: 'This is a sample text.' },
                { id: 30, name: 'course18.jpg', text: 'This is a sample text.' },
                { id: 31, name: 'course19.jpg', text: 'This is a sample text.' },
                { id: 32, name: 'course20.jpg', text: 'This is a sample text.' },
                { id: 33, name: 'course21.jpg', text: 'This is a sample text.' },
                { id: 34, name: 'course22 .jpg', text: 'This is a sample text.' },
                { id: 35, name: 'video13.gif', text: 'This is a sample text.' },
                { id: 36, name: 'video14.gif', text: 'This is a sample text.' },
                { id: 37, name: 'video15.gif', text: 'This is a sample text.' },
                { id: 38, name: 'video16.gif', text: 'This is a sample text.' },
                { id: 39, name: 'video17.gif', text: 'This is a sample text.' },
                { id: 40, name: 'video18.gif', text: 'This is a sample text.' },
                { id: 41, name: 'video19.gif', text: 'This is a sample text.' },
                { id: 42, name: 'video20.gif', text: 'This is a sample text.' },
                { id: 43, name: 'video21.gif', text: 'This is a sample text.' },
                { id: 44, name: 'video22.gif', text: 'This is a sample text.' },
                { id: 45, name: 'video23.gif', text: 'This is a sample text.' },
                { id: 46, name: 'video24.gif', text: 'This is a sample text.' }
            ],
            items: [],
            currentPage : 1,
            itemsPerPage : 18,
            //availableVideoItems: [
            //    { id: 1, name: 'video.gif', text: 'This is a sample text.' },  
            //    { id: 2, name: 'video2.gif', text: 'This is a sample text.' },
            //    { id: 3, name: 'video3.gif', text: 'This is a sample text.' },
            //    { id: 4, name: 'video4.gif', text: 'This is a sample text.' },
            //    { id: 5, name: 'video5.gif', text: 'This is a sample text.' },
            //    { id: 6, name: 'video.gif', text: 'This is a sample text.' }
            //],
            //videoItems: []
        }
        this.pagination = this.pagination.bind(this);
        this.doSearchFilter = this.doSearchFilter.bind(this);
        
    }

    componentWillMount(){
        this.setState({
            ...this.state,
            items: this.state.availableItems,
            //videoItems: this.state.availableVideoItems
        });
    }

    doSearchFilter = (event) => {
        console.log('Event : ', event.target.value);
        this.setState({
            ...this.state,
            items: this.state.availableItems.filter(ai => 
                ai.name.toLowerCase().includes(event.target.value.toLowerCase()))
            //videoItems: this.state.availableVideoItems.filter(avi => 
            //    avi.name.toLowerCase().includes(event.target.value.toLowerCase()))
        });
    }

    pagination(event){
      console.log("Pagination : event - ",event);
      console.log("Pagination : event.target.id - ",event.target.id);
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

    render() {
      const {items, currentPage, itemsPerPage} = this.state;
      const lastItem = currentPage * itemsPerPage;
      const firstItem = lastItem - itemsPerPage;
      const currentItemsDisplay = items.slice(firstItem, lastItem);

      const renderItems = currentItemsDisplay.map((item, index) => {
        return (
          <div className="col-lg-2 " key={item.id}> 
              <div className="wid-panel">
                  <div className="wid-sub-1">{item.text}</div>
                  <div className="wid-sub-2">{item.name}</div>
              </div>
          </div> 
        )
      });

      const pageNumbers = [];
      for(let i =1; i <= Math.ceil(items.length / itemsPerPage);i++){
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(pageNum => {
        return (
          <li key={pageNum} id={pageNum} onClick={this.pagination}> {pageNum} </li>
        )
      });

      return (
          <div className="App">
              <div className="container-fluid top" >
                  <div className="row ">
                      <div className="col-lg-2 " >
                          <div className="search">
                              <div className="form-group">
                                  <input className="form-control" type="text" placeholder="search" onChange={this.doSearchFilter} />
                                  <span className="fa fa-search form-control-feedback" ></span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row no-gutters">
                    {renderItems}
                  </div>
                  <div id="page-numbers">      
                    <ul class = "pagination">
                        {renderPageNumbers}
                    </ul>       
                  </div>     
              </div>
          </div>
      );
    }
  }

// function App() {
//   return (
//     <div className="App">
//           <div class="container-fluid top" >
//                   <div class="row ">
//           <div class="col-lg-2 " >
//               <div class="search">
//                 <div class="form-group"> 
//                     <input class="form-control" type="text" placeholder="search" /> 
//                     <span class="fa fa-search form-control-feedback" ></span>
//                 </div>
//               </div>
//           </div>
//         </div>
//         <div class="row no-gutters">
//             <div class="col-lg-2 ">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">untitled quiz</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//         </div>
//         <div class="row no-gutters">
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">untitled quiz</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Hello World!</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div> 
//         </div>
//         <div class="row no-gutters">
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">course.jpg</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">Quiz title</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">RecordRTC</div>
//                 </div>
//             </div>
//             <div class="col-lg-2">
//                 <div class="wid-panel">
//                   <div class="wid-sub-1"></div>
//                   <div class="wid-sub-2">RecordRTC</div>
//                 </div>
//             </div>
//         </div>
//     </div> 
//     </div>
//   );
// }

// export default App;
