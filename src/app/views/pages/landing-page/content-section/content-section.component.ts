import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import $ from 'jquery';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    CarouselModule,
    TagModule,
    ButtonModule
    
  ],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.scss'
})
export class ContentSectionComponent {

  constructor(){}

  cards1 = [
    {
      title: 'Extensive Wholesaler Network',
      details: 'Access a wide network of verified Pharmaceutical Wholesalers offering diverse inventory.',
      delay: '0.1s',
    },
    {
      title: 'Seamless Ordering Experience',
      details: 'Enjoy an easy and efficient ordering process through our app and web platform.',
      delay: '0.2s',
    },
    {
      title: 'Prompt and Reliable Delivery',
      details: 'Receive timely and dependable delivery services tailored to healthcare needs.',
      delay: '0.3s',
    },
  ]

  cards2 = [
    {
      title: 'Expired Medicine Return Service',
      details: 'Simplify inventory management with hassle-free returns for expired medicines.',
      delay: '0.4s',
    },
    {
      title: 'Financial Management Tools',
      details: 'Efficiently manage bills and transactions for improved cash flow and planning.',
      delay: '0.5s',
    },
    {
      title: 'Dedicated Support',
      details: 'Benefit from customer-centric support ensuring smooth operations.',
      delay: '0.6s',
    },
  ]

  activeCard: any = null
  selectCard = (item: any) => {
    if (this.activeCard === item) {
      this.activeCard = null
    }
    else {
      this.activeCard = item;
    }
  }

  accordianFaq = [
    {
      question: 'How do I register as a new user on FastWhistle?',
      answer: 'Redirect to retailer registration video link (https://www.youtube.com/watch?v=xWZUutOHgRw)'
    },
    {
      question: ' What are the requirements to become a verified retailer on FastWhistle?',
      answer: 'You only need basic details of your store and yourself like your name, store address,  Mobile number, Lat-long (Store’s Actual Location in Map)'
    },
    {
      question: ' How can I order medicines through FastWhistle?',
      answer: 'Get a step-by-step guide on how to browse, select, and order medicines from our listed wholesalers via our mobile app or website. Redirect to Ordering video link () *video yet to be posted*'
    },
    {
      question: 'What types of payments do you accept?',
      answer: 'Only to Distributor That too UPI Transactions'
    },
    {
      question: 'How do I track my order status?',
      answer: 'To track the progress of your orders from placement through delivery directly through our app or website.'
    },
    {
      question: 'What should I do if I receive damaged goods or incorrect items in my order?',
      answer: 'Understand the procedure for reporting and resolving issues with orders that are not as expected.'
    },
    {
      question: 'How do I return expired medicines through FastWhistle?',
      answer: 'Find detailed instructions on how to use our expired medicine return service, including timelines and the process for pick-up and documentation.'
    },
    {
      question: 'How are my personal and payment information protected on FastWhistle?',
      answer: 'Read about our security measures and compliance with data protection laws that ensure the safety of your information.'
    },
    {
      question: 'Can I cancel or modify an order once it has been placed?',
      answer: 'Explore the conditions under which an order can be modified or cancelled and the process to do so.'
    },
    {
      question: 'How do I handle disputes with a wholesaler listed on FastWhistle?',
      answer: 'Understand the mechanisms in place for resolving conflicts between retailers and wholesalers, including how to contact our support team.'
    },
    {
      question: 'What are the delivery charges for orders placed on FastWhistle?',
      answer: 'Find out about any delivery fees, how they are calculated, and any conditions for free delivery.'
    },
    {
      question: 'How often are new wholesalers added to FastWhistle?',
      answer: 'Learn about our process for adding new suppliers and how often our list is updated.'
    },
    {
      question: 'How do I access my billing history and manage my pending bills?',
      answer: 'Get information on how to view your transaction history and manage outstanding payments through our platform.'
    },
    {
      question: 'Who can I contact for technical support?',
      answer: 'Discover how to get in touch with our technical support team for any issues you might face using our app or website.'
    },
    {
      question: 'Where can I find your Privacy Policy and Terms and Conditions?',
      answer: 'Direct links to where you can read our Privacy Policy and Terms and Conditions to understand your rights and obligations when using FastWhistle.'
    },
  ]

  visibleItemCount: number = 7;
  showAll: boolean = false;

  toggleShowAll(): void {
    this.showAll = !this.showAll;
    this.visibleItemCount =  !this.showAll ?  7 : this.accordianFaq.length;
  }

  counterCard=[
    {
      dataDelay:"0.1s",
      btClass:'fact-item-1',
      icon:'fa fa-certificate ',
      title:'Orders',
      count:'100k',
      backgroundColor:'dark-blue',
    },
    {
      dataDelay:"0.3s",
      btClass:'fact-item-2',
      icon:'fa fa-users-cog',
      title:'Distributors ',
      count:'150+',
      backgroundColor:'light-blue',
    },
    {
      dataDelay:"0.5s",
      btClass:'fact-item-3',
      icon:'fa fa-users',
      title:'Retailers ',
      count:'100k',
      backgroundColor:'dark-green',
    },
    {
      dataDelay:"0.7s",
      btClass:'fact-item-4',
      icon:'fa fa-check-circle',
      title:'Brands',
      count:'200+ ',
      backgroundColor:'light-green',
    }
  ]

 products=[
    {
      imageUrl:'../../../assets/images/brands/1.png',
    },
    {
      imageUrl:'../../../assets/images/brands/2.png',
    },
    {
      imageUrl:'../../../assets/images/brands/3.png',
    },
    {
      imageUrl:'../../../assets/images/brands/4.png',
    },
    {
      imageUrl:'../../../assets/images/brands/5.png',
    },
    {
      imageUrl:'../../../assets/images/brands/6.png',
    },
    {
      imageUrl:'../../../assets/images/brands/7.png',
    },
    {
      imageUrl:'../../../assets/images/brands/8.png',
    },
    {
      imageUrl:'../../../assets/images/brands/9.png',
    },
    {
      imageUrl:'../../../assets/images/brands/10.png',
    },
  ]

  products3=[
    {
      imageUrl:'../../../assets/images/brands/21.png',
    },
    {
      imageUrl:'../../../assets/images/brands/22.png',
    },
    {
      imageUrl:'../../../assets/images/brands/23.png',
    },
    {
      imageUrl:'../../../assets/images/brands/24.png',
    },
    {
      imageUrl:'../../../assets/images/brands/25.png',
    },
    {
      imageUrl:'../../../assets/images/brands/26.png',
    },
    {
      imageUrl:'../../../assets/images/brands/27.png',
    },
    {
      imageUrl:'../../../assets/images/brands/28.png',
    },
    {
      imageUrl:'../../../assets/images/brands/29.png',
    },
    {
      imageUrl:'../../../assets/images/brands/30.png',
    },
    
  ]

  products2=[
    {
      imageUrl:'../../../assets/images/brands/11.png',
    },
    {
      imageUrl:'../../../assets/images/brands/12.png',
    },
    {
      imageUrl:'../../../assets/images/brands/13.png',
    },
    {
      imageUrl:'../../../assets/images/brands/14.png',
    },
    {
      imageUrl:'../../../assets/images/brands/15.png',
    },
    {
      imageUrl:'../../../assets/images/brands/16.png',
    },
    {
      imageUrl:'../../../assets/images/brands/17.png',
    },
    {
      imageUrl:'../../../assets/images/brands/18.png',
    },
    {
      imageUrl:'../../../assets/images/brands/19.png',
    },
    {
      imageUrl:'../../../assets/images/brands/20.png',
    },
    
  ]

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1
    }
  ];

//   $(document).ready(function() {
//     $('.counter-value').each(function() {
//         const $counter: JQuery<HTMLElement> = $(this);
//         $counter.prop('Counter', 0).animate({
//             Counter: parseInt($counter.text(), 10)
//         }, {
//             duration: 3500,
//             easing: 'swing',
//             step: function(now: number) {
//                 $counter.text(Math.ceil(now).toString());
//             }
//         });
//     });
// });

}
