/*****
Javier Flores
Main code for E-Commerce website project
11/1/17
****/

//Add an item to the catalog and a specific syntax
/***Rule to add a new item
ItemKeyName
	name
	price
		whole-sale-price	retail-price
	quantity
	shipping
	sold
	category
		array with eithe "Top","Fruit","veg","Deal"
***/
/***ITEMS****/
var items = {
	"Apple":{
		'Name': '5 Big Apples',

		'pic':'https://static.pexels.com/photos/62687/nice-apples-green-eating-healthy-healthy-food-62687.jpeg',

		'price':{ 'whole':5, 'retail':10 },

		'desc': "5 of the biggest and shiniest apples in the world. Guranteed to make the perfect snack.",

		'shipping': 10,

		'sold': 0,

		'cat':['Top','Fruit'],
	},

	"PieBlueBerry":{
		'Name': 'Blueberry Pie',

		'pic':'https://static.pexels.com/photos/288264/pexels-photo-288264.jpeg',

		'price':{ 'whole':20, 'retail':30 },

		'desc': 'A large 13" pie filled with warm blueberries.',

		'shipping': 10,

		'sold': 0,

		'cat':['Top','limited'],
	},

	"Cucumber":{
		'Name': '5 Large Cucumber',

		'pic':'https://static.pexels.com/photos/8694/food-vegetables-cucumbers.jpg',

		'price':{ 'whole':20, 'retail':55 },

		'desc': "5 of the biggest and freshest Cucumbers.",

		'shipping': 10,

		'sold': 0,

		'cat':['Top','Veg'],
	},

	"CatFood":{
		'Name': 'Bag of Cat Food',

		'pic':'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/65/63/fotolia_4098846_XS.jpg',

		'price':{ 'whole':60, 'retail':80 },

		'desc': 'The biggest bag of the best cat food, just for your cat',

		'shipping': 10,

		'sold': 1,

		'cat':['Top'],
	},
	"DogFood":{
		'Name': 'Bag of Dog Food',

		'pic':'https://img.chewy.com/is/catalog/48934_PT2._AC_SL1500_V1476358651_.jpg',

		'price':{ 'whole':60, 'retail':80 },

		'desc': 'The biggest bag of the best dog food, just for your dog',

		'shipping': 10,

		'sold': 1,

		'cat':['Top'],
	},

	"Lettuce":{
		'Name': '1 Lettuce Head',

		'pic':'https://static.pexels.com/photos/102123/pexels-photo-102123.jpeg',

		'price':{ 'whole':5, 'retail':8 },

		'desc': 'One fresh and perfect lettuce head',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','Veg'],
	},
	"Tomato":{
		'Name': '12 Tomatoes',

		'pic':'https://static.pexels.com/photos/53588/tomatoes-vegetables-food-frisch-53588.jpeg',

		'price':{ 'whole':10, 'retail':15 },

		'desc': 'Twelve tomatoes, packed so gently that they will always come in the best condition',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','Veg'],
	},
	"Cereal":{
		'Name': 'Cereal Box',

		'pic':'https://images-na.ssl-images-amazon.com/images/I/912a39r165L._SY355_.jpg',

		'price':{ 'whole':2, 'retail':5 },

		'desc': 'A nice bowl of cereal every morning for one week, only $5',

		'shipping': 10,

		'sold': 1,

		'cat':['Top'],
	},
	"Bananas":{
		'Name': '12 Bananas',

		'pic':'https://static.pexels.com/photos/38283/bananas-fruit-carbohydrates-sweet-38283.jpeg',

		'price':{ 'whole':6, 'retail':12 },

		'desc': 'Twelve of our best bananas that will be Guranteed in perfect condition',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','Fruit','limited'],
	},
	"Orange":{
		'Name': 'Bag Of Oranges',

		'pic':'https://static.pexels.com/photos/65923/orange-food-juicy-fruit-65923.jpeg',

		'price':{ 'whole':2, 'retail':4 },

		'desc': 'A bag of our best and freshest organic oranges',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','Fruit'],
	},
	
	"Donuts":{
		'Name': '12 Donuts',

		'pic':'https://img.grouponcdn.com/deal/56NKzQvb681nF24byYeP/9p-2048x1242/v1/c700x420.jpg',

		'price':{ 'whole':5, 'retail':12 },

		'desc': 'Twelve freshly baked Donuts',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','limited'],
	},
	"Lemons":{
		'Name': '12 Fresh Lemons',

		'pic':'https://www.organicfacts.net/wp-content/uploads/2013/05/Lemon3-1020x765.jpg',

		'price':{ 'whole':10, 'retail':15 },

		'desc': '12 Fresh Lemeons',

		'shipping': 10,

		'sold': 0,

		'cat':['Top','limited','Fruit'],
	},
	" Lime":{
		'Name': '12 Fresh Limes',

		'pic':'https://paradisenursery.com/wp-content/uploads/2014/04/Persian-lime.jpg',

		'price':{ 'whole':5, 'retail':15 },

		'desc': '12 Fresh Limes',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','limited','Fruit'],
	},
	"Watermelon":{
		'Name': 'Two Big Watermelon',

		'pic':'https://www.organicfacts.net/wp-content/uploads/2013/05/watermelon2.jpg',

		'price':{ 'whole':10, 'retail':25 },

		'desc': 'Two of our biggest and sweetest watermelons',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','limited','Fruit'],
	},
	"Broccoli":{
		'Name': 'Two Bunches of Broccoli',

		'pic':'https://atmedia.imgix.net/d852987f86aeae8b65926f9e7a260c28285ea744?w=720&h=480&fit=crop',

		'price':{ 'whole':5, 'retail':15 },

		'desc': 'Broccoli',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','Veg'],
	},
	"Carrots":{
		'Name': '15 Large Carrots',

		'pic':'https://www.netmascots.com/wp-content/uploads/2016/05/Fact-About-Carrots.jpg',

		'price':{ 'whole':5, 'retail':15 },

		'desc': '15 of our largest and fresh carrots',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','limited','Veg'],
	},
	"Corn":{
		'Name': '5 Large Corn',

		'pic':'https://www.organicfacts.net/wp-content/uploads/2013/05/Corn12-1020x765.jpg',

		'price':{ 'whole':2, 'retail':4 },

		'desc': 'Five Large Corn',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','limited','Veg'],
	},
	"Onions":{
		'Name': '12 Onions',

		'pic':'https://foleysproduce.com/wp-content/uploads/2016/07/Yellw-Onions.jpg',

		'price':{ 'whole':10, 'retail':15 },

		'desc': 'A bag of our freshest onions',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','Veg'],
	},
	"SweetPotato":{
		'Name': '5 large SweetPotato',

		'pic':'https://img.purch.com/rc/696x392/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2Ni83NTAvb3JpZ2luYWwvc3dlZXQtcG90YXRvZXMuanBn',

		'price':{ 'whole':15, 'retail':35 },

		'desc': 'Five of out sweetest and largest sweet potatoes',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','limited','Veg'],
	},
	"IceCream":{
		'Name': 'Large Gallon Of Ice Cream',

		'pic':'https://i5.walmartimages.com/asr/7b68c278-d69c-44ce-874c-26f820466a6b_1.3365a20252335f900b8366eace8e0b3a.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',

		'price':{ 'whole':30, 'retail':65 },

		'desc': 'A whole gallon of ice-cream, packed in special packaging to preserve the freshness',

		'shipping': 10,

		'sold': 1,

		'cat':['Top'],
	},
	"Pizza":{
		'Name': 'large Pizza',

		'pic':'https://assets3.thrillist.com/v1/image/1891930/size/tmg-article_default_mobile.jpg',

		'price':{ 'whole':2, 'retail':10.99 },

		'desc': 'A large frozen pizza',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','limited'],
	},
	"BeefGround":{
		'Name': 'Ground Beef',

		'pic':'https://i5.walmartimages.com/asr/280563ab-2e6c-4c80-b6cc-e6690d6f4a56_1.44154558c5e0a5b148634dc0bde44e1a.jpeg',

		'price':{ 'whole':5, 'retail':30 },

		'desc': 'Ground beef',

		'shipping': 10,

		'sold': 1,

		'cat':['Top'],
	},
	"Steaks":{
		'Name': 'Steak',

		'pic':'https://static.pexels.com/photos/102123/pexels-photo-102123.jpeg',

		'price':{ 'whole':5, 'retail':12 },

		'desc': 'Steak',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','limited'],
	},
	"WholeChicken":{
		'Name': 'Whole Chiken',

		'pic':'https://cdn.cpnscdn.com/static.coupons.com/ext/kitchme/images/recipes/600x400/slow-cooker-asian-style-whole-chicken_41801.jpg',

		'price':{ 'whole':5, 'retail':12 },

		'desc': 'A whole Chiken',

		'shipping': 10,

		'sold': 1,

		'cat':['Top'],
	},
	"Milk":{
		'Name': 'Gallon Of Milk',

		'pic':'https://www.drupepower.com/blog/wp-content/uploads/2016/09/right-milk.jpg',

		'price':{ 'whole':5, 'retail':12.99 },

		'desc': 'Milk',

		'shipping': 10,

		'sold': 1,

		'cat':['Top','limited'],
	},
};
/***ITEM END***/

//Store the user's items
var currentItems = {

};

//store messeges in a array
var messeges = ['Fresh Deals Everyday!','Welcome! Check Out The Limited Deals!', 'New Deals Everyday!','Check Out The Top Sellers!','Welcome!'];

//function to run once the document finishes loading
function ready(){

	//randomly get a value from messeges and set it to the inner text of the welcome
	document.getElementById('h_welcomeMes').innerText = messeges[Math.floor(Math.random() * (messeges.length ))];

	//categories for the items to be sorted to
	var categories = {
		'Top':document.getElementById('topsales'),
		'Fruit':document.getElementById('fruit'),
		'Limited':document.getElementById('deals'),
		'Veg':document.getElementById('veg'),
	};

	//function to create a new item
	function item(){
		
		this.addItem = function(){
			//loop through the items key dictonary
			for(var is in items){
				//create the item div
				this.productDiv = document.createElement('div');
				this.productDiv.className+='product'
				this.productDiv.id+= is

				this.imgDiv = document.createElement('div');
				this.imgDiv.className+='img'
				this.productDiv.appendChild(this.imgDiv);
				this.producth3 = document.createElement('h4');
				this.producth3.className+='itemName'

				this.productPrice = document.createElement('h2');
				this.productPrice.className+='itemName'

				//Places to push the item to
				this.pushTo = []

				//loop through the keys inside the seperate items
				for(var iss in items[is]){
					//Give the product its information

					this.producth3.innerHTML = items[is]['Name']
					this.productDiv.appendChild(this.producth3);

					this.productPrice.innerHTML = '$'+items[is]['price']['retail']
					this.productDiv.appendChild(this.productPrice);

					this.imgDiv.style.backgroundImage = 'url('+items[is]['pic']+')';					
				}
				//Loop through the category array in each item
				for(var inL = 0;inL<items[is]['cat'].length;inL++){
					//find where we have to push each item
					if(items[is]['cat'][inL]==='Top'){ 		this.pushTo.push(categories['Top']) }
					if(items[is]['cat'][inL]==='Fruit'){ 	this.pushTo.push(categories['Fruit']) }
					if(items[is]['cat'][inL]==='Veg'){ 		this.pushTo.push(categories['Veg']) }
					if(items[is]['cat'][inL]==='limited'){ 	this.pushTo.push(categories['Limited']) }
					
				}

				//loop through the pushTo array
				for(var jfL = 0;jfL<this.pushTo.length;jfL++){
					//Clone the div as many times as there are categories to push it to and then add it
					this.pDiv = this.productDiv.cloneNode(true)
					this.pushTo[jfL].appendChild(this.pDiv);
				}
			}
		};
	};

	//main item "creater"
	var main = new item();

	//add items to the categories
	main.addItem();

	//variables for sliding buttons
	var increase = 220;
	//current margin dummy variable
	var cur = [0, 0, 0, 0]
	//which category is the user interacting with
	var picked = 0;

	//loop through each button
	for(var l = 0;l<document.getElementsByClassName('boxItems').length;l++){

		if(document.getElementsByClassName('boxItems')[l].id==='next'){
			console.log(document.getElementsByClassName('boxItems')[l].offsetWidth)
			document.getElementsByClassName('boxItems')[l].style.left = ((parseInt(body.offsetWidth)-parseInt(document.getElementById('cart').offsetWidth))-document.getElementsByClassName('boxItems')[l].offsetWidth)+'px'
		}

		document.getElementsByClassName('boxItems')[l].onclick = function(){
			if(this.id==='prev'){
				increase = Math.abs(increase);
			}else
			if(this.id==='next'){
				increase = Math.abs(increase) * -1;
			}
			console.log(this.parentElement.parentElement.id)
			if(this.parentElement.parentElement.id ==='topsales'){ picked = 0 }
			if(this.parentElement.parentElement.id ==='deals'){ picked = 1 }
			if(this.parentElement.parentElement.id ==='veg'){ picked = 2 }
			if(this.parentElement.parentElement.id ==='fruit'){ picked = 3 }
			cur[picked]+=increase;
			this.parentElement.style.left='0px'
			this.parentElement.parentElement.style.marginLeft=cur[picked]+'px';
		};
	}

	/***jQuery to make things easier but messy***/
	var cartItems = {

	};
	var itemTotal = 0;
	var subTotal = 0;
	var tax = 0;
	var taxrate = 0.02;
	var shipping = 0;
	var totalDue = 0;
	var profit = 0;
	var currentItem = 0;
	var comsub = 0;
	var showCartItem = false;
	var CompanyInfo = '';
	$('.product').click(function(){
		if(!showCartItem){
			$('#cartBody').css('margin-left',parseInt($('#cart_current').css('width')) *-1)
			$('#cart_item .cartTitle').text(items[this.id]['Name'])
			currentItem = this.id;
			$('#c_item_cost').text(items[this.id]['price']['retail']);

			$('#item_desc').text(items[this.id]['desc'])

			
			$('#c_item_sub').text(items[this.id]['price']['retail']);
		}else{
			$('#cartBody').css('margin-left', 0)
		}

	})
	$('#cart_add').click(function(){
		//for(var k in firstObject) secondObject[k]=firstObject[k];
		for(var timesAdding = 0;timesAdding<parseInt($('#c_item_quantity').val());timesAdding++){

			cartItems[itemTotal] = currentItem;
			itemTotal++;
		}
		
		$('#addedInfo').text('Added To The Cart!')
	});

	var timer = null;
	$('#c_item_quantity').keydown(function(){
	       clearTimeout(timer); 
	       timer = setTimeout(calcPriceIn, 500)
	});

	function calcPriceIn() {
		$('#c_item_sub').text(parseInt($('#c_item_cost').text())*parseInt($('#c_item_quantity').val()));
	}
	var desc = '';
	$('#cart_back').click(function(){
		console.log(cartItems)
		subTotal = 0;
		comsub = 0;
		for(var getPrice in cartItems){
			console.log('s'+getPrice)
			subTotal += items[cartItems[getPrice]]['price']['retail']
			comsub += items[cartItems[getPrice]]['price']['whole']

			desc = items[cartItems[getPrice]]['desc']

		}
		/** If under $100, S&H is $25. If between $100 and $200 inclusive, S&H is $10. If over $200, it's free**/
		if(subTotal<100){
			shipping = 25
		}
		if(subTotal>=100&&subTotal<=200){
			shipping = 10
		}
		if(subTotal>200){
			shipping = 0
		}
		tax = subTotal*taxrate;
		totalDue = tax + subTotal + shipping;

		$('#cartBody').css('margin-left','0px')
		$('#order_items').text(itemTotal);
		$('#order_sub').text(subTotal)
		$('#order_tax').text(tax.toFixed(2))
		$('#order_ship').text(shipping);
		$('#order_total').text(totalDue)

		/**CompanyInfo***/
		profit=subTotal - comsub
		CompanyInfo+='Items Sold:'+itemTotal
		CompanyInfo+='\n'
		CompanyInfo+='Customer Subtotal:'+subTotal
		CompanyInfo+='\n'
		CompanyInfo+='Company Subtotal:'+comsub
		CompanyInfo+='\n'
		CompanyInfo+='Profit:'+profit
		console.log(CompanyInfo)

		/**Update cart**/
		var cItems = document.getElementById('cartItems');
		console.log($('#cartItems'))
		console.log('item'+itemTotal)
		var cIDivDum = document.getElementsByClassName('cartItem')[0];
		var cIDivButDum = document.getElementsByClassName('removeItem')[0];
		$('#cartItems').empty();
		for(var cI = 0;cI<itemTotal;cI++){
			var cIDiv = cIDivDum.cloneNode();
			var cIDivBut = cIDivButDum.cloneNode();
			cIDivBut.innerText = 'remove Item'
			cIDivBut.id = cI
			cIDivBut.onclick = function(){
				//itemTotal--;
				// console.log(cartItems)
				// console.log(cartItems[this.id])
				// itemTotal--;
				// delete cartItems[this.id]
				// $('#cart_back').trigger('click');
			};
			cIDiv.style.display = '';
			cIDiv.style.opacity = '1';
			cIDiv.innerText += items[cartItems[cI]]['Name']
			cIDiv.innerText += '\n'
			cIDiv.innerText += '$'+items[cartItems[cI]]['price']['whole']
			cIDiv.innerText += '\n'
			cIDiv.appendChild(cIDivBut);
			cItems.appendChild(cIDiv)
			
		}

	});

	

	$('#cart_current').css('width',$('#cart').css('width'))
	$('#cart_item').css('width',$('#cart').css('width'))

	$('#cartBody div').css('left','-100px')

	var cartTop = $('#cartBody').offset().top;
	var cartLeft = document.getElementById('cart').offsetLeft
	var cartWidth = document.getElementById('cart').offsetWidth

	window.onresize = function() {
		cartTop = $('#cartBody').offset().top;
		cartLeft = document.getElementById('cart').offsetLeft
		cartWidth = document.getElementById('cart').offsetWidth
		$('#cart_current').css('width',$('#cart').css('width'))
		$('#cart_item').css('width',$('#cart').css('width'))

		$('#cartBody div').css('left','-100px')
		for(var l = 0;l<document.getElementsByClassName('boxItems').length;l++){
			if(document.getElementsByClassName('boxItems')[l].id==='next'){
				console.log(document.getElementsByClassName('boxItems')[l].offsetWidth)
				document.getElementsByClassName('boxItems')[l].style.left = ((parseInt(body.offsetWidth)-parseInt(document.getElementById('cart').offsetWidth))-document.getElementsByClassName('boxItems')[l].offsetWidth)+'px'
			}
			console.log(l)
		}	
		console.log(2)
	};
	$(window).scroll(function() {                  

	    var currentScroll = $(window).scrollTop(); 
	    if (currentScroll >= cartTop) {           
	        $('#cart').css({                      
	            position: 'fixed',
	            top: '0',
	            left: cartLeft,
	            width: cartWidth,
	            order: '-1'
	        });
	    } else {                                   
	        $('#cart').css({                      
	            position: 'static',
	            left: cartLeft,
	            width: cartWidth,
	            order: '1'

	        });
	    }

	});

	
	
};

//$('#load_div').attr('style','display:none')
$('body div').ready(function(){
	$('#load_div').attr('style','display:none')
})



window.onload = ready;
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
