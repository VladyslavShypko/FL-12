// $("#someId").css({"prop" : "value", "prop1" : "value1", ...});

//body: add padding 20px

// id title: make align center, remove top margin

// div after header: add double border and padding 20px

// change color for all h2 and set top margin to 0

// set font size 18px for all .list direct child

$('body').css({'padding' : '20px'});
$('#title').css({'text-align' : 'center', 'margin-top' : '0'});
$('#header').next('div').css({'border' : 'double', 'padding' : '20px'});
$('h2').css({'color' : '#2E64FE', 'margin-top' : '0'});
$('.list').children().css({'font-size' : '18px'});

// ******************************************************
// :even, :odd, :first, :last, :not(), :empty
// :gt() /* all elements at an index greater then specified */
// :lt() /* all elements at an index less then specified */
// :hidden /* display: none, type="hidden", width & height = 0, ancestor is hidden */
// :visible /* are visible */
// :parent /* are parents to other elements, including text node */
// :contains() /* contain the specified text */
// :has() /* contain at least one element that matches the specified selector */
// ******************************************************

// in #list-1
  // show all hidden and not cloned li

  // hide empty li

// in #list-3
  // for all even li set margin-left -20px

  // for the first li set any different color

  // for all li with index > 5 set color to #ccc

// show ul which is parent

// for li wich has 'em' add red color

// for li which contains text 'Buratino' set font weight to bold

$('#list-1 li:hidden').not('.cloned').show();
$('#list-1 li:empty').hide();
$('#list-3 li:even').css({'margin-left' : '-20px'});
$('#list-3 li:first').css({'color' : '#01DF3A'});
$('#list-3 li:gt(5)').css({'color' : '#ccc'});
$('ul:parent').css({'border' : '2px solid green'});
$('li').has('em').css({'color' : 'red'});
$('li:contains("Buratino")').css({'font-weight' : 'bold'});

// ******************************************************
// :first-child, :last-child, :only-child, :first-of-type, :last-of-type,
// :only-of-type, :nth-child(), :nth-last-child(), :nth-last-of-type(),
// :nth-of-type()
// ******************************************************

// for b in p which is the only child set font size 36px

// for em in p which is the last child of type set color to green

$('p b:only-child').css({'font-size' : '36px'});
$('p em:last-of-type()').css({'color' : 'green'});

// ******************************************************
// [name], [name|='value'], [name*='value'], [name~='value'],
// [name$='value'], [name^='value']
// [name!='value'] /* neither such attribute nor specified value */
// ******************************************************

// set width 80px for input with attribute name ended by 'age'
// set width 120px for input with attribute name started by 'my'
// console.log checked checkbox
// show all images with a cat


$('input[name$="age"]').css({'width' : '80px'});
$('input[name^="my"]').css({'width' : '120px'});
console.log($('input[checked]').val());
$('img[src*="cat"]').show();

// ******************************************************
// is(), not(), has()
// eq(), first(), last()
// find(), parent(), parents(), closest()
// children(), prev(), next(), siblings()
// ******************************************************
// for .mbox with index 3 set padding-top 50px
// for first div wraper for img set float left and border red

$('.mbox').eq(3).css({'padding-top' : '50px'});
$('img').wrap('<div></div>');
$('img').parent().first().css({'float' : 'left', 'border' : '1px solid red'});


