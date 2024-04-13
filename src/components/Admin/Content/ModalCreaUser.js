import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import avata from '../../../assets/canh1.jpg';
import { FcPlus } from "react-icons/fc";
import { toast } from 'react-toastify';
import {postCreateNewUser} from '../../../services/apiService'


export const ModalCreateUser =(props)=>{
  const [show, setShow] = useState(false);

  const handleClose = () => { 
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
  };
  const handleShow = () => setShow(true);

  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const [username, setUsername] =useState("");
  const [role, setRole] =useState("USER");
  const [image, setImage] =useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleUploadImage =(event)=>{
    if(event.target && event.target.file && event.target.file[0]){
      setPreviewImage(URL.createObjectURL(event.target.file[0]));
      setImage(event.target.file[0])
    }else{
      setPreviewImage(avata);
    }
    //console.log('upload file', event.target.file);
    
  }

  const validateEmail = (email) => {   // 'Regular Expressions.' Đây là phương thức kiểm tra Email Return có đúng cách không?
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

  const handleSubmitCreate = async() =>{
      // validate
      const isValidEmail = validateEmail(email);
      if(!isValidEmail){                // nếu không đúng sẻ hiện ra cảnh báo, hoặc (isValidEmail===false)
          toast.error('invalid Email');
          //toast.success('Email success');
          //toast.info('Hiện thông tin');
          //toast.warning('Cảnh báo');
          //alert('invalid email');
          return;
      }
      if(!password){
        toast.error('invalid Password');
        return;
      }
      
      let res = await postCreateNewUser(email, password, username, role);
       console.log('>>> checkout apis',res.data)                          // chạy ổn vào đây
        if(res.data && res.data.EC ===0){
          toast.success('data nhập thành công');
          handleClose();
        }
        if(res.data && res.data.EC !==0){
          toast.error('data chưa lưu');
        }
      }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> 

      <Modal 
        show={show} 
        onHide={handleClose} 
        size='xl'
        backdrop = 'static'
        className='modal-add-user'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email}
                    onChange={(event)=> setEmail(event.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password}
                    onChange={(event)=> setPassword(event.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">Username</label>
                    <input type="text" className="form-control" value={username}
                    onChange={(event)=> setUsername(event.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label className="form-label" >Role</label>
                    <select className="form-select" 
                      value = {role} 
                      onChange={(event)=> setRole(event.target.value)}>
                        <option selected value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className='form-label label-upload' htmlFor='labelUpload'>
                      <FcPlus /> Upload File Image
                    </label>
                    <input type='file' id="labelUpload" hidden
                    value={image}
                    onChange={(event)=>handleUploadImage(event)}
                    />
                </div> 
                <div className='col-md-12 img-preview'>
                      {/* <img src={avata} />  */}
                    {previewImage ? 
                        <img src={previewImage} alt=""/> 
                        :
                        <span>Preview Image</span>
                    }

                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleSubmitCreate()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//default ModalCreateUser;