import './form.css';
import emailjs from 'emailjs-com';

const Form = () => {
    function sendEmail (e){
        e.preventDefault();

        emailjs.sendForm(
         'service_bloc0bh',
         'template_msi3ym9',
          e.target, 
          "user_ozcYsaawxvYCcsTDGR1AE"
          ).then(response =>{
              console.log(response);
          }).catch(err => console.log(err));
    }
    return (
        <div className="container border"
        style={{
            marginTop: '50px',
            width:'50%',
            backgroundImage: `url('https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?cs=srgb&dl=pexels-henry-%26-co-1939485.jpg&fm=jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
           <h1 style={{marginTop: '25px', textAlign:'center'}}>Formulario</h1>
           <form 
           className="row" 
           style={{margin:'25px 75px 85px 100px'}}
           onSubmit={sendEmail}
           >
               <label>Nombre</label>
               <input type="text" name='name' className='form-control'/>

               <label>Email</label>
               <input type="email" name='user_email' className='form-control'/>

               <label>Mensaje</label>
               <textarea name='message' rows='4' className='form-control'/>

               <input 
               type="submit" 
               value='send' 
               className='form-control btn btn-secondary'
               style={{marginTop: '30px'}}
               />
           </form>
        </div>
    )
}

export default Form
