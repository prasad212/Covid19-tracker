import React,{Component} from 'react'
import './news.css'

class News extends Component{
constructor(props){
    super(props);
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

      
       
      
          <section className="mw7 centre  ">
              <h2 className="athelas ph3 ph0-l">News</h2>
             
               { this.state.news.map((articles)=>(
              <article className="pv4 bt bb b--black-10 ph3 ph0-l">    
           <div className="flex flex-column flex-row-ns">
               <div class="w-10 w-6-ns pr3-ns order-2 order-1-ns">
               <h4> {articles.source.name}</h4>
           <h3 className="f3 athelas mt0 lh-title" >
               {articles.title}
           </h3>
          
           <p className="f5 f4-l lh-copy athelas">
               {articles.description}
           </p>
           <a  href={articles.url}>Click For more</a>
           </div >
           <div  className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns"> 
                <img src={articles.urlToImage} width='500' height='250' className='db'></img>

           </div>
           </div> 
           </article> ) )}
           
          
     </section>
  
  
)
} 
    
}
export default News;