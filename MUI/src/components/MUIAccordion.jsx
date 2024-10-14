import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccordion() {
    const [expanded, setExpanded] = useState('' | false);

    const handleChange = (panelName) => (event, expanded) => {
        setExpanded(expanded ? panelName : false);
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ margin: '15px 0px', backgroundColor: 'violet' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 1</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad atque provident magnam, tenetur soluta esse architecto earum facere possimus cumque minima quia expedita molestiae facilis ipsam sunt voluptatum odit!</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ margin: '15px 0px', backgroundColor: 'violet' }} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 3</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad atque provident magnam, tenetur soluta esse architecto earum facere possimus cumque minima quia expedita molestiae facilis ipsam sunt voluptatum odit!</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ margin: '15px 0px', backgroundColor: 'violet' }}  >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 3</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad atque provident magnam, tenetur soluta esse architecto earum facere possimus cumque minima quia expedita molestiae facilis ipsam sunt voluptatum odit!</AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MUIAccordion