import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsBlock from './pc_news_block'

export default class PCIndex extends React.Component {
    
    render(){
        return(
            <div>
                <PCHeader />
                <PCFooter />
                <PCNewsBlock />
            </div>
        )
    }
 
}
