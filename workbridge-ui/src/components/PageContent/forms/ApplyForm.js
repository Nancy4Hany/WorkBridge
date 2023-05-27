import TextField from '@mui/material/TextField';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';
import PublishIcon from '@mui/icons-material/Publish';
import Box from '@mui/material/Box';


export default function ApplyForm() {

    const handleChange = (e) => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setValue(e.target.value);
        }
      }
    return (


        <div
            id="form container"
            className="flex flex-col items-center justify-center px-6  rounded-lg"
            style={{ backgroundColor: '#f8e5ee' }}>

            <div style={{ border: '1px solid #B370B0', padding: '2%', alignItems: 'center', marginTop: '3%', marginBottom: '3%' }}>
                <div className='form ' style={{paddingLeft:'15%'}}>
                    <div id="name container" style={{padding:'2%'}}>
                        <p style={{ fontSize: "30px", color: 'gray', paddingLeft: '12%' }}>Apply now</p>
                    </div>
                    <div id="name container" style={{padding:'2%'}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" required />
                    </div>

                    <div id="apply form container" style={{padding:'2%'}}>

                        <TextField id="outlined-basic" label="Email" variant="outlined" type="email" pattern=".+@globex\.com" size="30" required />

                    </div>
                    <div id="required skilld container" style={{padding:'2%'}}>

                        <TextField pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="outlined-basic" label="Phone number" variant="outlined"  required />

                    </div>

                    <div id="pdf" style={{padding:'2%'}}>
                        <div><PictureAsPdfIcon > </PictureAsPdfIcon >  Add your cv</div>
                        <input label='Add your CV' type="file" id="avatar" name="avatar" accept="application/pdf" />

                    </div>
                    <div style={{ paddingLeft: '27%' }}>
                        <IconButton aria-label="delete" >
                            Apply
                            <PublishIcon> </PublishIcon>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>)
}