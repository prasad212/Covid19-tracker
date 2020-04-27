import React,{Component} from 'react'

import 'w3-css/w3.css';
import './news.css'

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
    <section className='mw7 center' >
        <h2 className='athelas ph3 ph0-1'>News</h2>
        {this.state.news.map(
            (articles)=>(
               <article className='pv4 bt bb b--black-10 ph3 ph0-1 '>
               <div className='flex flex-column flex-row-ns'>
               <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
                    <h1 className='f3 athelas mt0 lh-title'>{articles.title}</h1>
                    <p className='f5 f4-1 lh-copy athelas'>{articles.description}</p>
               </div>
               <div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns'>
                   <img className='db mw10' src={articles.urlToImage} style={{height:'110%',width :'110%'}}alt='' ></img>
               </div>

               </div>
               <p className='f6 lh-copy gray mv0'>By <span className='ttu'>{articles.source.name}</span></p>
               <time className='f6 db gray'>{articles.publishedAt}</time>
               <a class="mt710 f4 fw6 db dark-blue no-underline underline-hover" href={articles.url}>Click For More</a>
               </article>
            
        ))}
       


    </section>

      
       
      
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