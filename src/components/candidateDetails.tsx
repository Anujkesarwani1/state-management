import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface Props {
  title: string;
}

const CandidateDetails = (props: Props) => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <List sx={{ width: '100%', maxWidth: 1200 }} >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={props.title} sx={{ fontWeight: 'bold' }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              {/* <ListItemText primary="Starred" /> */}
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
}

export default CandidateDetails;