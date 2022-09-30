import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Testimonials extends Component {
    render() {
      return (
            <div>
                <Slider>
                    <Card img="/images/amanda.jpeg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Dictumst vestibulum rhoncus est pellentesque elit. Neque convallis a cras semper auctor neque vitae tempus quam. Id faucibus nisl tincidunt eget nullam. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lobortis scelerisque fermentum dui faucibus in ornare. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Gravida rutrum quisque non tellus orci ac. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Dui accumsan sit amet nulla facilisi morbi. Neque gravida in fermentum et sollicitudin ac orci phasellus. Eget velit aliquet sagittis id consectetur purus. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Urna neque viverra justo nec ultrices. Tortor posuere ac ut consequat semper viverra nam. Leo duis ut diam quam nulla porttitor massa." name="Amanda Smith"/>
                    <Card img="/images/jack.jpeg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Dictumst vestibulum rhoncus est pellentesque elit. Neque convallis a cras semper auctor neque vitae tempus quam. Id faucibus nisl tincidunt eget nullam. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Gravida rutrum quisque non tellus orci ac. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Dui accumsan sit amet nulla facilisi morbi. Neque gravida in fermentum et sollicitudin ac orci phasellus. Eget velit aliquet sagittis id consectetur purus. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Urna neque viverra justo nec ultrices. Tortor posuere ac ut consequat semper viverra nam. Leo duis ut diam quam nulla porttitor massa." name="Jack Brown"/>
                    <Card img="/images/Lee.jpeg" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus. Dictumst vestibulum rhoncus est pellentesque elit. Neque convallis a cras semper auctor neque vitae tempus quam. Id faucibus nisl tincidunt eget nullam. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Lobortis scelerisque fermentum dui faucibus in ornare. Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Gravida rutrum quisque non tellus orci ac. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Dui accumsan sit amet nulla facilisi morbi. Neque gravida in fermentum et sollicitudin ac orci phasellus. Eget velit aliquet sagittis id consectetur purus. Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Urna neque viverra justo nec ultrices. Tortor posuere ac ut consequat semper viverra nam." name="Lee Pipe"/>
                </Slider>
            </div>
      );
    }
  }

  const Card = ({ img , text, name}) =>{
    return(
        <section class="bg-white overflow-x-hidden">
          <div class="min-h-screen text-center lg:py-16 lg:px-6 border-b-8 border-t-8 border-blue-500 bg-gray-100 overflow-x-hidden">
            <figure class="max-w-full mt-16 border-8 border-blue-500 rounded-2xl p-8 overflow-x-hidden">
              <img class="w-20 h-20 my-auto border-4 border-blue-600 rounded-full mx-auto mb-4 transition-all hover:border-red-500 duration-300" src={img} alt="headshot"/> 
              <blockquote>
                <p class="text-lg font-normal text-gray-900 dark:text-black">{text}</p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 border-b-4 pb-2 transition-all hover:border-blue-500 duration-300">
                    <div class="pr-3 font-medium text-gray-600">{name}</div>
                    <div class="pl-3 text-sm font-light text-gray-500">Developer</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
    )
  } 