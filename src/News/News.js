import React,{Component} from 'react'

import 'w3-css/w3.css';

class News extends Component{
constructor(){
    super();
    this.state ={
        news:[]
    }
}

async componentDidMount(){
    const url='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=254af5c7543644ea95f7480f596cec11';
    const responce =await fetch(url);
    const data =await responce.json();
 
    this.setState({news : data.articles})
   // console.log(this.state.news)

}

render(){return (
    <div >
        {this.state.news.map(
            (articles)=>(
               <div className='w3-card-4 '>
               <header>
                    <h4 className='w3-margin-left w3-margin-top  '>{articles.source.name}</h4>
                </header>
                    <div className='w3-container'>
                        <img src={articles.urlToImage} className='w3-image w3-round'></img>

                    </div>
                    <div className ='w3-container'>
                            <p>{articles.description}</p>
                    </div>
                    <footer className='w3-container w3-blue '>
                    <a  href={articles.url} className='w3-margin'> Click For more</a>
                    </footer>
               </div>
            
        ))}
       


    </div>

      
       
      
        /*  <section className="mw7 centre  ">
              <h2 className="athelas ph3 ph0-l">News</h2>
             
               { this.state.news.map((articles)=>(
              <article className="pv4 bt bb b--black-10 ph3 ph0-l">    
           <div className="flex flex-column flex-row-ns">
               <div class="w-10 w-6-ns pr3-ns order-2 order-1-ns">
               <h4> {articles.source.name}</h4>
           <h3 className="f3 athelas mt0 lh-title" >
               {articles.title}
           </h3>
          
           <p className="f5 f4-l lh-copy athelas" style={{fontSize: '100%'}}>
               {articles.description}
           </p>
           <a  href={articles.url}>Click For more</a>
           </div >
           <div  className="pl3-ns order-1 order-2-ns mb4 mb1-ns w-100 w-40-ns"> 
                <img src={articles.urlToImage} style={{width :'300px',height :'200px'}} className='db'></img>

           </div>
           </div> 
           </article> ) )}
           
          
     </section>
  
  */
)
} 
    
}
export default News;