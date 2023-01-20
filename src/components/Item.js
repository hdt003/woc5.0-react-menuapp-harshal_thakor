import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imgurl,newsurl,author,newdate,sourcename}=this.props;
        return (
        <div className="container my-4 d-flex justify-content-center">
                <div className="card" style={{width: "95%"}} >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger z-1" style={{left:"92%"}}>{sourcename?sourcename:"unknowns"}
                        <span className="visually-hidden">New alerts</span>
                    </span>
                    <img src={imgurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p>created by {author?author:"unknown"} on {new Date(newdate).toGMTString()}</p>
                        <a href={newsurl} className="btn btn-sm btn-dark d-flex justify-content-center" target="_blank" rel="noreferrer">Read More</a>
                    </div>
                </div>
                
        </div>
        
        )
  }
}
export default NewsItem
