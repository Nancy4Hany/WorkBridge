import TextField from '@mui/material/TextField';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';
import PublishIcon from '@mui/icons-material/Publish';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


export default function PostNewJob() {

  function checkNumber(event) {

    var aCode = event.which ? event.which : event.keyCode;

    if (aCode > 31 && (aCode < 48 || aCode > 57)) return false;

    return true;

  }
  return (


    <div
      id="form container"
      className="flex flex-col items-center justify-center px-6  rounded-lg"
      style={{ backgroundColor: '#f8e5ee' }}>

      <div style={{ border: '1px solid #B370B0', padding: '2%', alignItems: 'center', marginTop: '3%', marginBottom: '3%' }}>
        <div className='form ' style={{ paddingLeft: '12%' }}>
          <div id="name container" style={{ padding: '2%' }}>
            <p style={{ fontSize: "30px", color: 'gray', paddingLeft: '15%' }}>Job Offer</p>
          </div>
          <div id="name container" style={{ padding: '2%' }}>
            <TextField id="outlined-basic" label="Title" variant="outlined" required />
          </div>
          <div id="name container" style={{ padding: '2%' }}>
            <TextField id="outlined-basic" label="Job description" variant="outlined" required />
          </div>

          <div id="name container" style={{ padding: '2%' }}>
            <TextField id="outlined-basic" label="skills [use (,) to seperate]" variant="outlined" required />
          </div>

          <div id="apply form container" style={{ padding: '2%' }}>

            <TextField id="outlined-basic" label="Field" variant="outlined"   size="30" required />

          </div>
          <div id="apply form container" style={{ padding: '2%' }}>

            <TextField id="outlined-basic" label="Position" variant="outlined"  size="30" required />

          </div>

          <div id="pdf" style={{ padding: '2%' }}>
            <div><AddPhotoAlternateIcon> </AddPhotoAlternateIcon>  Add a picture</div>
            <input label='Add your CV' type="file" id="avatar" name="avatar" accept="image/jpeg" />

          </div>
          <div style={{ paddingLeft: '27%' }}>
            <IconButton aria-label="delete" >
              Publish
              <PublishIcon> </PublishIcon>
            </IconButton>
          </div>
        </div>
      </div>
    </div>)
}