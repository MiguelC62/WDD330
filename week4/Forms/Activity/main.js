//we can use the name attribute to identify a form:
const form = document.forms['search'];
//the input field has a name attribute of searchInput and can be accessed using this code:
const input = form.elements.searchInput;
//The focus event occurs when an element is focused on.
input.addEventListener('focus', () => console.log('focused'), false);
//The blur event occurs when the user moves the focus away from the form element.
input.addEventListener('blur', () => console.log('blurred'), false);
//he change event occurs when the user moves the focus away from the form element after changing it.
input.addEventListener('change', () => console.log('changed'), false);

//we can use JavaScript to intercept the form before it’s sent by adding a submit event listener
form.addEventListener('submit', search, false);

function search() {
    alert(' Form Submitted');
}

// We can actually stop the form from being submitted to that URL altogether by using the preventDefault() method
function search(event) {
  alert('Form Submitted');
  event.preventDefault();
}

//It’s also possible to set the value using JavaScript. 
input.value = 'Search Here';

//The problem with this is that the text remains in the field when the user clicks inside it, so it has to be deleted before the user can enter their own text. 
input.addEventListener('focus', function(){
  if (input.value==='Search Here') {
    input.value = ''
    }
  }, false);

input.addEventListener('blur', function(){
  if(input.value == '') {
    input.value = 'Search Here';
    } }, false);

//Text input element objects have a value property that can be used to retrieve the text inside the field.
function search(event) {
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}


//Accessing Form Elements

//const form = document.forms[0];
//const form = document.getElementsByTagname('form')[0];
//const form = document.forms.search;
//const form = document.forms['search'];
//const [input,button] = form.elements;
//const input = form.searchInput
//const input = form['searchInput']

//Form Properties and Methods

//<button type='submit'>Submit</button>
//<input type='submit' value='Submit'>
//<input type='image' src='button.png'></input>
//<button type='reset'>Reset</button>
//form.action = '/an/other.url'

//Form Events
