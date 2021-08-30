import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header({ total, money }) {

	function totalStatus(total) {
		var text = "";
		if (money - total === 0) {
			text = 'Para bitti!';
		}else if (total > 0) {
			text = 'Harcayacak $'+(money-total)+' paranız kaldı';
		} else if(total === 0) {
			text = 'Harcayacak $'+(money)+ ' paranız var.';
		}

		return text;

	}
	return (
			<>
				<Row>
					<Col xs>
						
						<Alert variant="info">
							{totalStatus(total)}
						</Alert>

					</Col>
				</Row>
			</>

	)
}

export default Header