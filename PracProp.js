import React from 'react';

import PracPropertydata from './PracPropertydata.js';

class PracProp extends React.Component{
		render(){
			return(
					<div>
					<h3>Best Sellers</h3>
				        <div>
				          <ol>
				            <PracPropertydata
				              title="Glory and War Stuff for Dads" 
				              author="Sir Eldrich Van Hoorsgaard" 
				              count={10} />
				            <PracPropertydata
				              title="The Crime Criminals!" 
				              author="Brenda Sqrentun" 
				              count={2} />
				            <PracPropertydata
				              title="Subprime Lending For Punk Rockers" 
				              author="Malcolm McLaren" 
				              count={600} />
				          </ol>
				        </div>
				      </div>
				);
		}
}

export default PracProp;