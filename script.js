const smallPlates = [
    {
      title: 'Crab Cakes',
      description: 'House made crab cakes served with Cajun remoulade',
      portion1: 'Two Cakes',
      price1: '13.00',
      portion2: 'Three Cakes',
      price2: '16.00'
    },
    {
      title: 'Classic Bruschetta',
      description: 'Tomatoes, basil, & parmesan on grilled French baguette with a balsamic drizzle.',
      portion1: '',
      price1: '12.00',
      portion2: 'with GF Bread',
      price2: '14'
    },
    { 
      title: 'Pizza',
      description: 'Choice of traditional mozzarella, pepperoni pizza, or veggie with balsamic drizzle.',
      portion1: '',
      price1: '14',
      portion2: 'with GF Bread',
      price2: '18'
    },
    { 
      title: 'Calamari',
      description: 'Dusted in a light batter and fried to perfection, served with a sweet & spicy chili sauce.',
      portion1: '',
      price1: '13',
      portion2: '',
      price2: ''
    },
    { 
      title: 'BRUSSEL SPROUTS (GF & V)',
      description: 'Fried till crispy and tossed in olive oil & parmesan cheese.',
      portion1: '',
      price1: '12',
      portion2: '',
      price2: ''
    },
    { 
      title: 'IRISH SPRING ROLLS',
      description: 'Corned beef, sauerkraut, potato, mozzarella with 1000 Island dressing.',
      portion1: '',
      price1: '12',
      portion2: '',
      price2: ''
    },
    { 
      title: 'BLARNEY CROCK',
      description: 'Chunky dip of artichokes, spinach, asiago cheese topped with parmesan, brulèed, served with tortilla chips.',
      portion1: '',
      price1: '10',
      portion2: '',
      price2: ''
    },
    { 
      title: 'LOBSTER BAKE (GF)',
      description: 'A blend of lobster meat, cream cheese & sour cream, baked and topped with parmesan cheese. Served with tortilla chips.',
      portion1: '',
      price1: '13',
      portion2: '',
      price2: ''
    },
    { 
      title: 'CHICKEN TENDERS',
      description: 'House made chicken tenders served with ranch & hot sauce.',
      portion1: '',
      price1: '13',
      portion2: '',
      price2: ''
    },
    { 
      title: 'STEAMED MUSSELS',
      description: 'Steamed with wine, herbs & garlic, served with brown bread.',
      portion1: '',
      price1: '13',
      portion2: '',
      price2: ''
    },
    { 
      title: 'APPETIZER TRIO',
      description: 'Crab cake, chicken tenders & Irish Spring Rolls. (No substitutions.)',
      portion1: '',
      price1: '17',
      portion2: '',
      price2: ''
    },
    { 
      title: 'STEAK TIPS (GF)',
      description: 'Beef tenderloin tips sautéed with garlic, sweet onion, & peppers, topped with Bleu cheese crumbles, served with crostini.',
      portion1: '',
      price1: '18',
      portion2: '',
      price2: ''
    },
];
const soupsAndSalads = [
    { 
      title: "COWLEY'S FAMOUS POTATO SOUP & SOUP OF THE DAY",
      description: 'Cup - $4.50   Bowl - $5.50',
      portion1: '',
      price1: '',
      portion2: '',
      price2: ''
    },
    { 
      title: 'CAESAR SALAD',
      description: 'Traditional Caesar with Romaine, shaved Parmesan and house made croutons. - $12.5',
      portion1: '',
      price1: '15',
      portion2: '',
      price2: ''
    },
    { 
      title: 'Dinner Cajun Black and Bleu Salad',
      description: 'Field Greens, sun dried tomatoes, red onion, charred corn and bleu cheese, topped w Cajun steak, with bleu cheese dressing.',
      portion1: '',
      price1: '18',
      portion2: '',
      price2: ''
    },
    { 
      title: 'SIMPLE GREEN SALAD (V)',
      description: 'Field greens, shaved parmesan, garlic croutons, English cucumbers, grape tomatoes, shaved carrot & choice of dressing.',
      portion1: '',
      price1: '13',
      portion2: '',
      price2: ''
    },
    { 
      title: 'APPLE PECAN SALAD (GF)',
      description: 'Wood fire grilled chicken, field greens, apples, Bleu Cheese, bacon, candied pecans, & house made apple vinaigrette dressing.',
      portion1: '',
      price1: '18',
      portion2: '',
      price2: ''
    },
    { 
      title: 'TRAVERSE CITY SALAD (GF)',
      description: 'Wood fire grilled chicken, English cucumbers, grape tomatoes, almonds, dried berries, Bleu Cheese, Mandarin oranges, field greens, house made raspberry vinaigrette.',
      portion1: '',
      price1: '19',
      portion2: '',
      price2: ''
    },
    { 
      title: 'HONEY HERB BALSAMIC SALMON SALAD',
      description: 'Wood fire grilled salmon with fried goat cheese, shaved fennel, scallion, dried berries, grape tomatoes, field greens, and house made balsamic dressing.',
      portion1: '',
      price1: '20',
      portion2: '',
      price2: ''
    },
];
const sandwichBoard = [
    { 
      title: 'HOT DELI SANDWICH',
      description: 'Choice of turkey, ham or lean corned beef, with Swiss cheese, on an onion roll.',
      portion1: '',
      price1: '16',
      portion2: '',
      price2: ''
    },
    { 
      title: 'ANGRY COD',
      description: 'Beer battered cod tossed in Sriracha hot sauce, side of MI coleslaw, remoulade on ciabatta.',
      portion1: '',
      price1: '16',
      portion2: '',
      price2: ''
    },
    { 
      title: 'TRADITIONAL REUBEN',
      description: 'Corned beef, sauerkraut, 1000 island, and Swiss cheese on Knickerbocker rye.',
      portion1: '',
      price1: '15',
      portion2: '',
      price2: ''
    },
    { 
      title: 'TURKEY REUBEN',
      description: 'Roasted turkey, MI coleslaw, 1000 island, and Swiss cheese on Knickerbocker rye.',
      portion1: '',
      price1: '15',
      portion2: '',
      price2: ''
    },
    { 
      title: 'CHICKEN CLUB',
      description: 'Wood fire grilled chicken breast served on an enriched bun with bacon & Swiss.',
      portion1: '',
      price1: '',
      portion2: '',
      price2: ''
    },
    { 
      title: 'THE "COWLEY" BURGER',
      description: 'Wood fire grilled ½ pound Certified Angus Beef patty on an enriched bun.',
      portion1: '',
      price1: '16',
      portion2: '',
      price2: ''
    },
    { 
      title: 'DOWNTOWN DUBLIN BURGER',
      description: 'Wood fire grilled ½ pound Certified Angus Beef patty, corned beef, aged cheddar, 1000 island dressing, and caramelized onions.',
      portion1: '',
      price1: '17',
      portion2: '',
      price2: ''
    },
    { 
      title: 'THE FARMINGTON',
      description: 'Sweet & tender ham griddled with tomato slices and served with American cheese and honey mustard on ciabatta.',
      portion1: '',
      price1: '15',
      portion2: '',
      price2: ''
    },
    { 
      title: 'FRENCH DIP',
      description: 'Teres Major sliced thin, caramelized onion, and Swiss cheese served on ciabatta with beef au jus & horsie sauce.',
      portion1: '',
      price1: '16',
      portion2: '',
      price2: ''
    },
    { 
      title: 'PATTY MELT',
      description: '½ pound Certified Angus Beef patty on grilled rye, caramelized onion and Swiss cheese.',
      portion1: '',
      price1: '16',
      portion2: '',
      price2: ''
    },
    { 
      title: 'BEEF BRISKET SANDWICH',
      description: '8oz Smoked brisket with BBQ sauce, on an onion roll.',
      portion1: '',
      price1: '17',
      portion2: '',
      price2: ''
    },
    { 
      title: 'CRAB CAKE BLT',
      description: 'House made crab cake, lettuce, tomato & bacon on a brioche bun, with Cajun remoulade.',
      portion1: '',
      price1: '17',
      portion2: '',
      price2: ''
    },
    { 
      title: 'CHIPOTLE BLACK BEAN BURGER',
      description: 'SW style veggie burger with mixed peppers, served on onion roll with a side of guacamole.',
      portion1: '',
      price1: '18',
      portion2: '',
      price2: ''
    },
];
const bigPlates = [
    { 
      title: 'SEAFOOD PASTA',
      description: 'Sautéed scallops, mussels, shrimp, tomatoes and angel hair pasta, tossed in a choice of lemon beurre blanc or marinara sauce, finished with parmesan cheese.',
      portion1: '',
      price1: '23',
      portion2: '',
      price2: ''
    },
    { 
      title: "COWLEY'S FAMOUS FISH & CHIPS",
      description: '12oz of Beer battered cod served with MI style Coleslaw, remoulade, French fries.',
      portion1: '',
      price1: '18',
      portion2: '',
      price2: ''
    },
    { 
      title: 'WHISKEY SALMON',
      description: 'Wood fire grilled salmon, mashed potatoes, pan roasted carrots & Irish whiskey glaze.',
      portion1: '',
      price1: '',
      portion2: '23',
      price2: ''
    },
    { 
      title: 'PERCH',
      description: 'Sautéed in a lemon butter, served with rice & vegetable.',
      portion1: '',
      price1: '23',
      portion2: '',
      price2: ''
    },
    { 
      title: 'ITALIAN COD',
      description: '12oz of cod, roasted with Italian seasoning and olive oil, finished with Parmsan cheese and choice of vegetable and starch.',
      portion1: '',
      price1: '18',
      portion2: '',
      price2: ''
    },
    { 
      title: 'CHICKEN MARSALA',
      description: 'Chicken lightly dusted in seasoned flour, sautéed in a creamy mushroom marsala sauce. Served with mashed potatoes & vegetable.',
      portion1: '',
      price1: '22',
      portion2: '',
      price2: ''
    },
    { 
      title: 'BACON & SCALLION MAC AND CHEESE',
      description: 'Cavatappi noodles tossed in cheddar enriched béchamel topped with toasted bread crumbs. <br/>Add chicken - 5, shrimp - 7, or salmon - 8.',
      portion1: '',
      price1: '15',
      portion2: '',
      price2: ''
    },
    { 
      title: "SHEPHERD'S PIE",
      description: 'Braised mix of lamb and beef & aromatic vegetables covered in mashed potatoes and cheese.',
      portion1: '',
      price1: '20',
      portion2: '',
      price2: ''
    },
    { 
      title: '8 OZ BASEBALL FILET (GF)',
      description: 'Wood fire grilled, served with buttered green beans & mashed potatoes.',
      portion1: '',
      price1: '25',
      portion2: '',
      price2: ''
    },
];

const dessertMenu = [
  { 
    title: 'DEEP FRIED OREOS',
    description: '',
    portion1: '',
    price1: '8',
    portion2: '',
    price2: ''
  },
  { 
    title: 'BANANAS FOSTER CHEESECAKE',
    description: '',
    portion1: '',
    price1: '8',
    portion2: '',
    price2: ''
  },
  { 
    title: 'DOUBLE CHOCOLATE CAKE',
    description: '',
    portion1: '',
    price1: '8',
    portion2: '',
    price2: ''
  },
  { 
    title: 'CARROT CAKE',
    description: '',
    portion1: '',
    price1: '8',
    portion2: '',
    price2: ''
  },
  { 
    title: 'ICE CREAM SUNDAE',
    description: '',
    portion1: '',
    price1: '9',
    portion2: '',
    price2: ''
  },
]


const bigPlatesSection = document.querySelector('#bigPlates');
const sandwichBoardSection = document.querySelector('#sandwichBoard');
const smallPlatesSection = document.querySelector('#smallPlates');
const soupsAndSaladsSection = document.querySelector('#soupsAndSalads');
const dessertMenuList = document.querySelector('#dessertMenuList');


const createMenu = (menuCategory, menuCategorySection) => {
  menuCategory.forEach( item => {
    let priceStuff = item.price1;
    if (item.price2){
      priceStuff += ` ~ ${item.portion2} ${item.price2}`;
    }
    let listItem = document.createElement('div');
    listItem.classList.add('block')
    listItem.innerHTML = `
    <div class="menuItem">
      <p class="menuItem_title">${item.title}</p>
      <p class="menuItem_description">${item.description}</p>
      <p class="menuItem_portion1">${priceStuff}</p>
    </div>
    `;
    menuCategorySection.appendChild(listItem);
  })
};
window.addEventListener('load', (event) => {
  console.log('The page has fully loaded');
  createMenu(bigPlates, bigPlatesSection);
  createMenu(sandwichBoard, sandwichBoardSection);
  createMenu(smallPlates, smallPlatesSection);
  createMenu(soupsAndSalads, soupsAndSaladsSection);
  createMenu(dessertMenu, dessertMenuList);


});

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

let tabsWithContent = (function () {
  let tabs = document.querySelectorAll(".tabs li");
  let tabsContent = document.querySelectorAll(".tab-content");

  let deactvateAllTabs = function () {
    tabs.forEach(function (tab) {
      tab.classList.remove("is-active");
    });
  };

  let hideTabsContent = function () {
    tabsContent.forEach(function (tabContent) {
      tabContent.classList.remove("is-active");
    });
  };

  let activateTabsContent = function (tab) {
    tabsContent[getIndex(tab)].classList.add("is-active");
  };

  let getIndex = function (el) {
    return [...el.parentElement.children].indexOf(el);
  };

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      deactvateAllTabs();
      hideTabsContent();
      tab.classList.add("is-active");
      activateTabsContent(tab);
    });
  });

  tabs[0].click();
})();
