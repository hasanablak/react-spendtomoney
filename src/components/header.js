import { useState } from 'react'

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
		<div>
			{totalStatus(total)}
		</div>
	)
}

export default Header