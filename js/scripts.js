$(document).ready(function () {
    //OBJECTS AND GLOBAL VARIABLES START
    var sm = { name: "small", cost: 450 };
    var md = { name: "medium", cost: 650 };
    var lg = { name: "large", cost: 800 };
    //pizza crusts, names, costs
    var cripsy = { name: "Crispy Crust", cost: 220 };
    var stuffed = { name: "Stuffed Crust", cost: 250 };
    var gluttenFree = { name: "Glutten-Free Crust", cost: 220 };
    //pizza toppings, names, costs
    var bacon = { name: "Bacon", cost: 30 };
    var blackOlives = { name: "Black Olives", cost: 27 };
    var extraCheese = { name: "Extra Cheese", cost: 44 };
    var hamPineapple = { name: "Ham & Pineapple", cost: 26 };
    var mushroom = { name: "Mushroom", cost: 52 };
    var onions = { name: "Onions", cost: 40 };
    var pepperoni = { name: "Pepperoni", cost: 35 };
    var sausage = { name: "Sausage", cost: 49 };
    var chicken = { name: "Chicken", cost: 55 };
    var address1 =[];
    var deliveryCost = 0;
    //OBJECTS AND GLOBAL VARIABLES END

    var getSize = function () {
        size = "";
        var y = $("input[type=text][name=pizzasizeinput]").val();
        if (y == "sm") { size = sm } else
            if (y == "md") { size = md }
        if (y == "lg") { size = lg }
       // console.log(size)
        return size;
    }
    var getCrust = function () {
        crust ="";
        var y = $("input[type=text][name=pizzacrustinput]").val();
        if (y == "cripsy") { crust = cripsy } else
            if (y == "stuffed") { crust = stuffed }
            if (y == "gluttenFree") { crust = gluttenFree } else
           // console.log(crust);
        return crust;
    }
    var getTopping = function(){
        topping = "";
        var y = $("input[type=text][name=pizzatoppinginput]").val();
        if(y == "bacon"){topping = bacon}else 
        if(y == "blackOlives"){topping = blackOlives}else
        if(y == "extraCheese"){topping = extraCheese}else
        if(y == "hamPineapple"){topping = hamPineapple}else
        if(y == "mushroom"){topping = mushroom}else
        if(y == "onions"){topping = onions}else
        if(y == "pepperoni"){topping = pepperoni}else
        if(y == "sausage"){topping = sausage}else
        if(y == "chicken"){topping = chicken}
       // console.log(topping);
        return topping;
    }   
    
    