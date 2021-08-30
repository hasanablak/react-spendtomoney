import { useState } from 'react'

function Header({total, money}) {
	return (
		<div>
			{total > 0 && (
				<>
					Harcayacak $ {money-total} paranız kaldı
				</>
			) || (
				<>
					Harcaman için $ {money} paranız var
				</>
			)}
			
		</div>
	)
}

export default Header