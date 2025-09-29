import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className='whl-form-top min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='container text-white'>
        <div className='row'>
         <div className='col-lg-10  whl-form-00 mx-auto p-5'>
        <div className='row d-flex justify-content-around'>
          <div className='col-lg-4  p-4'>
            <p className='mb-auto mt-2'>we here to help you</p>
           <div>
           <h2><span>Discuss Your</span><br/>Chemical<br/>Solutions Need</h2>
           </div>
           <p className='des-ctn my-4'>
            lorem first form validation forms can be verifyed and login your account
           </p>
           <div className='d-flex mt-4'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="currentColor" class="bi bi-envelope-open-fill me-3" viewBox="0 0 16 16">
  <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z"/>
</svg>
            </span>
            <span>
            <p className='mb-0'>E-mail</p>
            <p>karthic***2@****.com</p>
            </span>
          
            
           </div>
            <div className='d-flex mt-1'>
            <span>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-forward-fill me-3" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"/>
</svg>
            </span>
            <span>
            <p className='mb-0'>PhoneNumber</p>
            <p>9696969696</p>
            </span>
          
            
           </div>
         
          </div>
          <div className='col-lg-6  p-3'>
          <div>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control form-input-box" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">E-mail</label>
    <input type="email" class="form-control form-input-box" id="exampleInputPassword1"/>
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Subject</label>
    <input type="text" class="form-control form-input-box" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control form-input-box" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

 
  <button type="submit" class=" submit-btn position-relative "><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle-fill right-arr position-absolute me-4" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg><span className='ms-4'>Schedule</span></button>
</form>
          </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
