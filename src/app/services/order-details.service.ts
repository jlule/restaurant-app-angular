import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Buritto",
      foodDetails:"Choice of beef, chicken, allpastor.",
      foodPrice:13.0,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyXOqy01jk36RBdvSqJb468Bw-TQ_LoPV3A&usqp=CAU"
    },
    {
      id:2,
      foodName:"tacos",
      foodDetails:"Choice of beef, chicken, allpastor.",
      foodPrice:2.99,
      foodImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMd2FuzynkuxpIO6vyhskSlbgX1CVKnE6YQ&usqp=CAU"
    },
    {
      id:3,
      foodName:"Plate",
      foodDetails:"rice beans and choice of meat",
      foodPrice:14.9,
      foodImg:"https://www.healthdigest.com/img/gallery/why-you-should-think-twice-before-getting-rice-at-a-mexican-restaurant/intro-1616699311.jpg"
    },
    {
      id:4,
      foodName:"Veggie Taco",
      foodDetails:"rice beans and choice of potatoes or peas",
      foodPrice:14.50,
      foodImg:"https://media.self.com/photos/5f1684fc190c9461dcf64f97/master/w_320%2Cc_limit/veggie-balsamic-tacos.png"
    },
    {
      id:5,
      foodName:"Horchatta",
      foodDetails:"all fountain drinks are $1.75",
      foodPrice:2.50,
      foodImg:"https://www.aline-made.com/wp-content/uploads/2018/01/Vegan-Horchata-1-3.jpg"
    },
    {
      id:6,
      foodName:"Flan",
      foodDetails:"Flan",
      foodPrice:6.50,
      foodImg:"http://www.mexicanrecipes.me/FlanMexicano.jpg"
    }
  ]


  

}
