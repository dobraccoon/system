import React from 'react';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

const Popup = ({children, anchorEl, open, placement}) => {

    return ( 
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
            {
                ({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper className='paper_padding'>
                        {children}
                    </Paper>
                </Fade>
                )
            }
         </Popper>
     );
}
 
export default Popup;