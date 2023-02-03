import React, { Component } from 'react'

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject:'',
          message: ''
        }
    }
    onNameChange(event) {
        this.setState({name: event.target.value})
    }

onEmailChange(event) {
        this.setState({email: event.target.value})
    }

onSubjectChange(event) {
        this.setState({subject: event.target.value})
    }

onMsgChange(event) {
        this.setState({message: event.target.value})
    }
    submitEmail(e){
        // e.preventDefault();
        // axios({
        //   method: "POST", 
        //   url:"/send", 
        //   data:  this.state
        // }).then((response)=>{
        //   if (response.data.status === 'success'){
        //       alert("Message Sent."); 
        //       this.resetForm()
        //   }else if(response.data.status === 'fail'){
        //       alert("Message failed to send.")
        //   }
        // })
}

resetForm(){
        this.setState({name: '', email: '',subject:'', message: ''})
}

    render() {
        return (
            <div className='container'>          
            <br /><br />
            <form className="row g-3 ">
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Name</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Subject</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Description</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
   
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </form>
            </div>

        );
    }
    
}
{/* Name
email
subject 
submit */}

