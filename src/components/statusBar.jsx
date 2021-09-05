import React , { Component } from 'react';
import { LeftCircleFilled, RightCircleFilled} from '@ant-design/icons';
import data from './data/data.json';

class StatusBar extends Component {


    componentDidMount(){
        window.addEventListener('load', this.handleStory);
    }


    componentWillUnmount(){
        window.removeEventListener('load', this.handleStory);
    }



    handleStory(){
        const track = document.querySelector('.carouselTrack');
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.buttonRight');
        const prevButton = document.querySelector('.buttonLeft');



        const slideWidth = slides[0].getBoundingClientRect().width;
        const setSlidePosition = (slide,index) =>{
            slide.style.left = (slideWidth * index ) + 'px';            
        }
        slides.forEach(setSlidePosition);
        let index  = 1 ;
        const trackWidth = track.getBoundingClientRect();
        prevButton.style.visibility = 'hidden';

        nextButton.addEventListener('click', () =>{            
            track.style.transform = 'translateX(-' + index * slideWidth + 'px)';
            index++;
            if(slides[slides.length-1].getBoundingClientRect().right < trackWidth.right ){
                nextButton.style.visibility = 'hidden';
            }
            prevButton.style.visibility = 'visible';
        })

        
        prevButton.addEventListener('click', () =>{
            index--;
            track.style.transform = 'translateX(-' + (index-1) * slideWidth + 'px)';
            
            if(slides[0].getBoundingClientRect().left >= trackWidth.left ){
                prevButton.style.visibility = 'hidden';
            }
            nextButton.style.visibility = 'visible';
        }) 
        

    }



    render() { 

        const newData = data.map(data => {
            return( 
            <li key={data.id} className='carouselItem'>
                <div className='carouselContent' style={{ backgroundImage : 'url(' +    data.status_imaged + ')',}}>
                    <div><img src={data.profile_photo} alt=""/></div>
                    <div>
                        {data.first_name}
                        <br />
                        {data.id}
                    </div>
                    
                </div>
            </li>);
        });
        return ( 
            <div className= "statusContainer ">
                <div className= 'carouselTrackContainer'>
                   <ul className='carouselTrack'>
                                         
                       {newData}                        
                   </ul>

                </div>

            <div className="buttonContainer">
               <LeftCircleFilled  className='buttonLeft' />
                
                <RightCircleFilled className="buttonRight" />

            </div>

            </div>
        
        );
    }
}
 
export default StatusBar;


