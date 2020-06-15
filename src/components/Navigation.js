import React from 'react';
import { Navbar, OverlayTrigger, Tooltip} from 'react-bootstrap';

function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        saurabh@khatiwada.dev
      </Tooltip>
    );
}

export default function Navigation() {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">khatiwada.dev</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}>
                            <a href="mailto:saurabh@khatiwada.dev" target="_blank" rel="noopener noreferrer">Email</a>
                        </OverlayTrigger>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/saurabhkhatiwada/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
                        &nbsp;&nbsp;&nbsp;
                        <a href="https://github.com/skhati1/" target="_blank" rel="noopener noreferrer">Github</a>

                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
