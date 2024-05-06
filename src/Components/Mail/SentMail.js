import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const SentMail = () => {
    const [isMail,setIsMail]=useState({
        subject:"",
        content:""
    })
    const handleInputChange = event =>{
        const{name,value}=event.target;
        setIsMail(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const handleSubmit = async (event)=>{
        try {
            event.preventDefault()
            if(isMail.subject === ''){
                toast.warning('Please add the Subject')
            }else if(isMail.content === ''){
                toast.warning('Please select the Content')
            }else{
                let MailDataToSend = isMail;
                const url='http://localhost:8080/api/send-email'
                const res= await axios.post(url,MailDataToSend)
                console.log('MailDataToSend:',MailDataToSend);
                if(res.status === 201){
                    const shouldSave = window.confirm("Are you sure to send the Mail?")

                    if(shouldSave){
                        console.log(`Mail Sent successfully`);

                        setIsMail({
                            subject:"",
                            content:""
                        })
                    }
                }
                toast.success('The Mail Sent successfully')
            }
        } catch (error) {
            console.log(error);
          toast.error('Error In Occured Please try again')
        }
    }
  return (
    <div className="main-panel">
    <div className="content-wrapper">
      {/* <!-- Page Title Header Starts--> */}
      <div className="row page-title-header">
        <div className="col-12">
          <div className="page-header">
            <h4 className="page-title">Send Mail  Dashboard</h4>
           
          </div>
        </div>
      </div>
      {/* <!-- Page Title Header Ends--> */}

      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body ">
                  
                 
            <form >
              
                  <div className="row">
                   
                      <div className="col-12">
                        <h1>New Mail</h1>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mb-3">
                        <label htmlFor="exampleFormControlInput5">Subject</label>
                        <input type="text" className="form-control" id="exampleFormControlInput5" placeholder="Please add the Subject"onChange={handleInputChange} name='subject' value={isMail.subject}
                        />
                        
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mb-3">
                        <label htmlFor="exampleFormControlInput4">content</label>
                        <textarea type="text" 
                        className="form-control" 
                        id="content" 
                        name='content'
                        value={isMail.content}
                        onChange={handleInputChange}
                        placeholder="Please type your Content here!" 
                       />
                       
                      </div>
                      <div className="mt-4 mb-5 p-2">
                        <button type="submit" className="btn btn-secondary mb-2" onClick={handleSubmit}   > Send Mail </button>
                      </div>
                      
                        <div className="mt-4 mb-5 p-2">
                        <Link to='/mail'><button type="button"  className="btn btn-danger mb-2"> Cancel </button></Link>
                        </div>
                        
                      
                  </div>
              </form>
             <ToastContainer/>
            </div>
          </div>
        </div>
        
      </div>

    </div>

    <footer className="footer">
      <div className="container-fluid clearfix">
        <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
         Email Marketing App
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          {" "}
          ©{" "}
          <a href="" target="_blank">
           Email Marketing
          </a>{" "}
          2024
        </span>
      </div>
    </footer>
  </div>
  )
}

export default SentMail
